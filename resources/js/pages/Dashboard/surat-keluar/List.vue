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
              v-model="jenis"
              :items="jenisSurat"
              item-text="name"
              item-value="value"
              append-icon=""
              label="Jenis Surat"
              clearable
            ></v-autocomplete>
          </v-col>
          <v-col
            cols=12
            md=4
          >
            <v-autocomplete
              :name="Math.random()"
              v-model="satker"
              :items="satkers"
              item-text="jabatan"
              item-value="jabatan"
              append-icon=""
              label="Satuan Kerja"
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
              <td v-if="$auth.check({role: ['admin']})">
                <v-row
                  no-gutters
                  justify="center"
                >
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
                </v-row>
              </td>
              <td>{{item.nomor_urut}}</td>
              <td>{{item.isi}}</td>
              <td>{{jenisSurat[item.jenis].name}}</td>
              <td>{{item.asal}}</td>
              <td>
                <v-btn
                  small
                  rounded
                  color="primary"
                  @click="unduh(item)"
                >
                  <v-icon>mdi-cloud-download</v-icon>
                  {{formatBytes(item.berkas[0].size)}}
                </v-btn>
              </td>
              <td>{{item.created_at | moment("DD-MM-YYYY")}}</td>
              <td>{{item.updated_at | moment("DD-MM-YYYY")}}</td>
            </tr>
          </tbody>
        </template>
      </v-data-table>
    </v-card>
    <!-- dialog berkas -->
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
      berkas: null,
      satker: null,
      satkers: [],
      jenisSurat: [
        { name: 'Surat Keluar Biasa', value: 0 },
        { name: 'Surat Perjalanan Dinas', value: 1 },
        { name: 'Surat Keterangan', value: 2 },
      ],
      jenis: null,
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
    var self = this
    this.tampilData()
    axios.get('/api/v1/jabatan-all')
      .then(function (response) {
        self.satkers = response.data.data
      })
      .catch(function (e) {
        console.log(e)
      })
  },
  computed: {
    headersBase () {
      return [
        { text: 'Aksi', value: 'name', width: '100', align: 'center', requiresAdmin: true },
        { text: 'Nomor Urut', value: 'nomor_urut', },
        { text: 'Isi Surat', value: 'isi' },
        {
          text: 'Jenis', value: 'jenis',
          filter: value => {
            if (!this.jenis) return true
            return value == this.jenis
          },
        },
        {
          text: 'Satker', value: 'asal',
          filter: value => {
            if (!this.satker) return true
            return value == this.satker
          },
        },
        { text: 'Berkas' },
        { text: 'Dibuat', value: 'created_at', width: '110' },
        { text: 'Diperbarui', value: 'created_at', width: '110' },
      ]
    },
    headers () {
      // dear vuetify cant you just make show properties?
      if (!this.$auth.check({ permissions: ['edit surat keluar', 'delete surat keluar'] }))
        return this.headersBase.filter(field => !field.requiresAdmin);
      else return this.headersBase;
    }
  },
  methods: {
    formatBytes (bytes, decimals = 2) {
      if (bytes === 0) return '0 Bytes';

      const k = 1024;
      const dm = decimals < 0 ? 0 : decimals;
      const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

      const i = Math.floor(Math.log(bytes) / Math.log(k));

      return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
    },
    unduh (item) {
      axios({
        url: '/api/v1/surat-keluar/' + item.id + '/unduh',
        method: 'GET',
        responseType: 'blob',
      }).then((response) => {
        var fileURL = window.URL.createObjectURL(new Blob([response.data]));
        var fileLink = document.createElement('a');

        fileLink.href = fileURL;
        fileLink.setAttribute('download', item.berkas[0].file_name);
        document.body.appendChild(fileLink);

        fileLink.click();
      });
    },
    tampilData () {
      var self = this;
      self.dataLoading = true
      axios.get('/api/v1/surat-keluar')
        .then(function (response) {
          // console.log(response.data.data)
          self.items = response.data.data
          self.dataLoading = false
        })
        .catch(function (e) {
          console.log(e)
        })
    },
    konfirmasi (item) {
      var self = this;
      self.dialogDelete = true
      // console.log(key)
      self.msg = "Anda akan menghapus layanan <span class='font-weight-bold'>" + item.name + "</span>. Tetap lanjutkan?"
      self.selectedItem = item.id
    },
    deleteData (id) {
      var self = this;
      axios.delete('/api/v1/surat-keluar/' + id)
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
  }
}
</script>