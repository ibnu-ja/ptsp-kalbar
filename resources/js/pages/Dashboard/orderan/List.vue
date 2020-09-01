<template>
  <div class="component-wrap">
    <v-snackbar
      v-model="snackbar"
      timeout="3000"
      color="success"
      top
    >
      {{ snackbarMsg }}
      <template v-slot:action="{ attrs }">
        <v-btn
          color="pink"
          text
          v-bind="attrs"
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
    <v-card>
      <v-card-title>
        <v-row>
          <v-col
            cols=12
            md=4
          >
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Cari"
              single-line
              hide-details
              clearable
            ></v-text-field>
          </v-col>
          <v-col
            cols=12
            md=4
          >
            <v-autocomplete
              :name="Math.random()"
              v-model="kategori"
              :items="kategoris"
              append-icon=""
              label="Bidang Layanan"
              clearable
            ></v-autocomplete>
          </v-col>
          <v-col
            cols=12
            md=4
          >
            <v-autocomplete
              :name="Math.random()"
              v-model="layanan"
              :items="layanans"
              item-text="name"
              item-value="id"
              append-icon=""
              label="Layanan"
              clearable
            ></v-autocomplete>
          </v-col>
        </v-row>
      </v-card-title>
      <v-data-table
        :loading="dataLoading"
        :headers="headers"
        :items="items"
        :search="search"
        :items-per-page="10"
        item-key="id"
        :footer-props="{
      showFirstLastPage: true,
      firstIcon: 'mdi-arrow-collapse-left',
      lastIcon: 'mdi-arrow-collapse-right',
      prevIcon: 'mdi-minus',
      nextIcon: 'mdi-plus'
    }"
      >
        <template v-slot:body="{ items }">
          <tbody>
            <tr
              v-for="item in items"
              :key="item.id"
            >
              <td>
                <v-row
                  no-gutters
                  justify="center"
                >
                  <template v-if="$auth.check({role: ['admin']})">
                    <v-col>
                      <v-btn
                        icon
                        small
                        color="primary"
                        @click="$router.push({ name:'dashboard.orderan.edit', params: { id: item.id }})"
                      >
                        <v-icon>mdi-pencil</v-icon>
                      </v-btn>
                    </v-col>
                    <v-col>
                      <v-btn
                        icon
                        small
                        color="red"
                        @click="konfirmasi(item)"
                      >
                        <v-icon>mdi-delete</v-icon>
                      </v-btn>
                    </v-col>
                  </template>
                  <template v-else><template v-if="$auth.check({role: ['operator']})">
                      <v-col>
                        <v-btn
                          text
                          small
                          color="primary"
                          @click="verifikasi(item)"
                        >
                          verifikasi
                        </v-btn>
                      </v-col>
                    </template>
                    <template v-if="$auth.check({role: ['pejabat', 'pimpinan']})">
                      <v-col>
                        <v-btn
                          text
                          small
                          color="primary"
                          @click="disposisiMenu(item)"
                        >
                          disposisi
                        </v-btn>
                      </v-col>
                    </template>
                    <template v-if="$auth.check({permissions: ['edit status orderan']})">
                      <v-col>
                        <v-btn
                          text
                          small
                          color="primary"
                          @click="selesai(item)"
                        >
                          selesaikan
                        </v-btn>
                      </v-col>
                    </template></template>
                </v-row>
              </td>
              <td>{{item.pemohon}}</td>
              <td>{{item.keterangan}}</td>
              <td>{{item.layanan.kategori}}</td>
              <td>{{item.layanan.name}}</td>
              <td>
                <v-btn
                  outlined
                  rounded
                  small
                  color="primary"
                  @click="tampilBerkas(item)"
                >tampil</v-btn>
              </td>
              <td>{{item.created_at | moment("DD-MM-YYYY")}}</td>
              <td>{{item.updated_at | moment("DD-MM-YYYY")}}</td>
            </tr>
          </tbody>
        </template>
      </v-data-table>
      <!-- <v-card-text v-else><div >Tolon</div></v-card-text> -->
    </v-card>
    <!-- dialog berkas -->
    <v-dialog
      v-model="dialogBerkas"
      max-width="900"
    >
      <v-card>
        <v-card-title class="headline">Berkas</v-card-title>
        <v-card-text>
          <v-data-table
            :headers="berkasHeaders"
            :items="berkas"
            :items-per-page="5"
          ><template v-slot:body="{ items }">
              <tbody>
                <tr
                  v-for="(item, index) in berkas"
                  :key="item.uuid"
                >
                  <td>
                    <v-btn
                      icon
                      small
                      color="primary"
                      @click="unduh(item, index)"
                    >
                      <v-icon>mdi-cloud-download</v-icon>
                    </v-btn>
                  </td>
                  <td>{{item.custom_properties.surat.nomor}}</td>
                  <td>{{item.custom_properties.surat.asal}}</td>
                  <td>{{item.custom_properties.surat.perihal}}</td>
                  <td>{{item.file_name}}</td>
                  <td>{{item.custom_properties.surat.tgl_berkas}}</td>
                  <td>{{formatBytes(item.size)}}</td>
                </tr>
              </tbody>
            </template></v-data-table>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="green darken-1"
            text
            @click="dialogBerkas = false"
          >Tutup</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog
      v-model="dialogDisposisi"
      persistent
      max-width="600"
    >
      <v-card>
        <ValidationObserver
          v-slot="{validate,reset,invalid}"
          ref="observer"
        >
          <v-form lazy-validation>
            <v-card-title class="headline">Disposisi Orderan</v-card-title>
            <v-card-text>
              <v-row no-gutters>
                <v-col cols="12">
                  <ValidationProvider
                    v-slot="{ errors }"
                    name="Satker"
                    rules="required"
                  >
                    <v-autocomplete
                      v-model="satker"
                      :error-messages="errors"
                      :items="satkers"
                      item-text="jabatan"
                      item-value="kode_jabatan"
                      label="Satker"
                      clearable
                    ></v-autocomplete>
                  </ValidationProvider>
                  <ValidationProvider
                    v-slot="{ errors }"
                    name="Keterangan"
                    rules=""
                  >
                    <v-textarea
                      :error-messages="errors"
                      label="Keterangan"
                      v-model="keterangan"
                    ></v-textarea>
                  </ValidationProvider>
                </v-col>
              </v-row>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="green darken-1"
                text
                @click="dialogDisposisi = false"
              >Batal</v-btn>
              <v-btn
                color="green darken-1"
                text
                :disabled="invalid"
                @click="disposisi(selectedItem)"
              >OK</v-btn>
            </v-card-actions>
          </v-form>
        </ValidationObserver>
      </v-card>
    </v-dialog>
    <v-dialog
      v-model="dialogDelete"
      persistent
      max-width="400"
    >
      <v-card>
        <v-card-title class="headline">Peringatan!</v-card-title>
        <v-card-text v-html="msg"></v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="green darken-1"
            text
            @click="dialogDelete = false"
          >Batal</v-btn>
          <v-btn
            color="green darken-1"
            text
            @click="deleteData(selectedItem)"
          >Ya!</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { extend, ValidationObserver, ValidationProvider } from "vee-validate";
import * as rules from "vee-validate/dist/rules";
import { messages } from "vee-validate/dist/locale/id.json";


Object.keys(rules).forEach(rule => {
  extend(rule, {
    ...rules[rule], // copies rule configuration
    message: messages[rule] // assign message
  });
});

export default {
  data () {
    return {
      items: [],
      dataLoading: null,
      dialogDelete: false,
      dialogBerkas: false,
      msg: null,
      search: '',
      snackbar: false,
      snackbarMsg: null,
      selectedItem: "",
      deskripsi: null,
      kategoris: [],
      layanans: [],
      kategori: null,
      layanan: null,
      berkas: null,
      dialogDisposisi: null,
      keterangan: null,
      satker: null,
      satkers: [],
      berkasHeaders: [
        {
          text: 'Unduh',
          align: 'center',
        },
        { text: 'Nomor', value: 'custom_properties.surat.nomor' },
        { text: 'Asal', value: 'custom_properties.surat.asal' },
        { text: 'Perihal', value: 'custom_properties.surat.perihal' },
        {
          text: 'Nama file',
          align: 'start',
          value: 'file_name',
        },
        { text: 'Tgl berkas', value: 'custom_properties.surat.tgl_berkas' },
        { text: 'Ukuran', value: 'size' },
      ],
    }
  },
  components: {
    ValidationProvider,
    ValidationObserver
  },
  watch: {
    kategori (newVal) {
      var self = this
      if (newVal) { //check if not null
        axios.get('/api/tampil-layanan', {
          params: {
            kategori: newVal
          }
        })
          .then(function (response) {
            self.layanans = response.data.data
          }).catch(function (e) {
            console.log(e)
          });
      } else {
        this.tampilData()
        self.layanans = []
      }
    }
  },
  created () {
    this.tampilData()
    const self = this
    axios.get('/api/kategori')
      .then(function (response) {
        self.kategoris = response.data.kategori
      }).catch(function (e) {
        console.log(e)
      });
  },
  computed: {
    headers () {
      return [
        { text: 'Aksi', value: 'name', width: '100', align: 'center' },
        { text: 'Pemohon', value: 'pemohon' },
        { text: 'Keterangan', value: 'keterangan' },
        // { text: 'Kategori', value: 'pemohon' },
        // { text: 'Pemohon', value: 'pemohon' },
        {
          text: 'Kategori', value: 'layanan.kategori', align: 'd-none',
          filter: value => {
            if (!this.kategori) return true
            return value == this.kategori
          },
        },
        {
          text: 'Layanan', value: 'layanan.id',
          filter: value => {
            if (!this.layanan) return true
            return value == this.layanan
          },
        },
        { text: 'Berkas', value: 'berkas' },
        { text: 'Dibuat', value: 'created_at', width: '110' },
        { text: 'Diperbarui', value: 'created_at', width: '110' },
      ]
    },
  },
  methods: {
    selesai (item) {
      var self = this
      axios.get('/api/v1/orderan/' + item.id + '/selesai')
        .then(function (response) {
          self.tampilData()
          self.snackbarMsg = "Sukses!"
          self.snackbar = true;
        })
        .catch(function (e) {
          console.log(e)
        })
      // self.selectedItem = item.id
      // this.disposisi(item.id)
    },
    disposisiMenu (item) {
      var self = this;
      self.selectedItem = item.id
      self.dialogDisposisi = true
      axios.get('/api/v1/jabatan')
        .then(function (response) {
          self.satkers = response.data.data
          // self.snackbarMsg = "Sukses verifikasi!"
          // self.snackbar = true;
        })
        .catch(function (e) {
          console.log(e)
        })
    },
    verifikasi (item) {
      var self = this;
      axios.get('/api/v1/orderan/' + item.id + '/verifikasi')
        .then(function () {
          self.snackbarMsg = "Sukses verifikasi!"
          self.snackbar = true;
          self.tampilData();
        })
        .catch(function (e) {
          console.log(e)
        })
    },
    formatBytes (bytes, decimals = 2) {
      if (bytes === 0) return '0 Bytes';

      const k = 1024;
      const dm = decimals < 0 ? 0 : decimals;
      const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

      const i = Math.floor(Math.log(bytes) / Math.log(k));

      return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
    },
    unduh (berkas, index) {
      axios({
        url: '/api/v1/orderan/' + this.selectedItem.id + '/unduh-berkas/' + index,
        method: 'GET',
        responseType: 'blob',
      }).then((response) => {
        var fileURL = window.URL.createObjectURL(new Blob([response.data]));
        var fileLink = document.createElement('a');

        fileLink.href = fileURL;
        fileLink.setAttribute('download', berkas.file_name);
        document.body.appendChild(fileLink);

        fileLink.click();
      });
    },
    tampilData () {
      var self = this;
      self.dataLoading = true
      axios.get('/api/v1/layanan/orderan')
        .then(function (response) {
          // console.log(response.data.data)
          self.items = response.data.data
          self.dataLoading = false
        })
        .catch(function (e) {
          console.log(e)
        })
    },
    tampilBerkas (item) {
      var self = this
      self.dialogBerkas = true
      // console.log(berkas)
      self.selectedItem = item
      self.berkas = [...item.berkas]
      console.log(self.berkas)

    },
    konfirmasi (item) {
      var self = this;
      self.dialogDelete = true
      // console.log(key)
      self.msg = "Anda akan menghapus layanan <span class='font-weight-bold'>" + item.name + "</span>. Tetap lanjutkan?"
      self.selectedItem = item.id
    },
    tampilDeskripsi (item) {
      var self = this;
      self.dialogDeskripsi = true
      console.log(self.dialogDeskripsi);
      this.deskripsi = item.deskripsi;
    },
    disposisi (id) {
      var self = this;
      let payload = {
        tujuan: self.satker,
        keterangan: self.keterangan
      }
      axios.post('/api/v1/orderan/' + id + '/disposisi', payload)
        .then(function (response) {
          self.tampilData()
          self.dialogDisposisi = false
          self.snackbarMsg = "Sukses!"
          self.snackbar = true;
        })
        .catch(function (e) {
          console.log(e)
        })
    },
    deleteData (id) {
      var self = this;
      axios.delete('/api/v1/orderan/' + id + '/hapus')
        .then(function (response) {
          self.tampilData()
          self.dialogDelete = false
          self.snackbarMsg = "Sukses menghapus!"
          self.snackbar = true;
        })
        .catch(function (e) {
          console.log(e)
        })
    },
    filterKategori (value, search, item) {
      return value != null &&
        search != null &&
        typeof value === 'string' &&
        value.toString().toLocaleUpperCase().indexOf(search) !== -1
    },
  }
}
</script>