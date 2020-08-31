<template>
  <div class="component-wrap">
    <div>
      <v-alert
        type="error"
        v-model="alert"
        dismissible
        v-for="(errors, i) in errorMsg"
        :key="i"
      >{{i}}<ul>
          <li v-for="(error, j) in errors">{{error}}</li>
        </ul>
      </v-alert>
    </div>
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
    <v-row>
      <v-col
        cols="12"
        md="4"
      >
        <v-card>
          <v-card-title>
            Pilih Layanan
          </v-card-title>
          <v-divider>

          </v-divider>
          <v-card-text>
            <v-row
              no-gutters
              justify="center"
            >
              <v-col cols="12">
                <v-autocomplete
                  v-model="kategori"
                  :items="kategoris"
                  label="Bidang Layanan"
                  clearable
                ></v-autocomplete>
              </v-col>
              <v-col
                cols="12"
                v-if="kategori"
              >
                <v-autocomplete
                  v-model="layanan"
                  :items="layanans"
                  item-text="name"
                  item-value="id"
                  label="Layanan"
                  clearable
                ></v-autocomplete>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
        <v-alert
          type="info"
          class="my-4"
        >
          Untuk edit berkas silakan hapus dan upload ulang.
        </v-alert>
      </v-col>
      <v-col
        cols="12"
        md="8"
      >
        <v-card>
          <v-card-title>
            Edit Orderan
          </v-card-title>
          <v-divider></v-divider>
          <ValidationObserver
            v-slot="{ validate, reset, invalid }"
            ref="observer"
          >
            <v-form
              lazy-validation
              :disabled="!layanan"
              @submit.prevent="submit"
            >
              <v-card-text>
                <v-row
                  no-gutters
                  justify="center"
                >
                  <v-col cols=12>
                    <ValidationProvider
                      v-slot="{ errors }"
                      name="Pemohon"
                      rules="required"
                    >
                      <v-text-field
                        label="Pemohon"
                        :error-messages="errors"
                        v-model="items.pemohon"
                        clearable
                      ></v-text-field>
                    </ValidationProvider>
                    <ValidationProvider
                      v-slot="{ errors }"
                      name="Keterangan"
                      rules="required"
                    >
                      <v-text-field
                        label="Keterangan"
                        :error-messages="errors"
                        v-model="items.keterangan"
                        clearable
                      ></v-text-field>
                    </ValidationProvider>
                  </v-col>
                  <v-col cols="12">
                    <v-btn
                      text
                      :disabled="!layanan"
                      @click="tambahBerkas()"
                    >
                      <v-icon>mdi-plus</v-icon>Tambah dokumen
                    </v-btn>
                  </v-col>
                  <v-col
                    cols=12
                    v-if="!(items.asal.length === 0)"
                  >
                    <template v-for="(berkas, i) in items.asal">
                      <v-divider></v-divider>
                      <v-row>
                        <v-col>
                          <span
                            class="text-caption"
                            v-bind:class="(!layanan)?'text--disabled':''"
                          >Berkas {{i+1}}</span>
                        </v-col>
                        <v-col
                          v-if="items.org[i] !== null"
                          class="text-right"
                        >
                          <v-btn
                            icon
                            small
                            :disabled="!layanan"
                            @click="konfirmasi(items, i)"
                          >
                            <v-icon>mdi-delete</v-icon>
                          </v-btn>
                        </v-col>
                        <v-col
                          v-else
                          class="text-right"
                        >
                          <v-btn
                            icon
                            small
                            :disabled="!layanan"
                            @click="hapusBerkas(i)"
                          >
                            <v-icon>mdi-close</v-icon>
                          </v-btn>
                        </v-col>

                      </v-row>
                      <ValidationProvider
                        v-slot="{ errors }"
                        name="Asal dokumen"
                        rules="required"
                      >
                        <v-text-field
                          label="Asal dokumen"
                          :disabled="items.org[i] !== null"
                          :error-messages="errors"
                          v-model="items.asal[i]"
                          clearable
                        ></v-text-field>
                      </ValidationProvider>
                      <ValidationProvider
                        v-slot="{ errors }"
                        name="Nomor dokumen"
                        rules="required"
                      >
                        <v-text-field
                          label="Nomor dokumen"
                          :disabled="items.org[i] !== null"
                          :error-messages="errors"
                          v-model="items.nomor_berkas[i]"
                          clearable
                        ></v-text-field>
                      </ValidationProvider>
                      <ValidationProvider
                        v-slot="{ errors }"
                        name="Isi/perihal dokumen"
                        rules="required"
                      >
                        <v-text-field
                          label="Isi/perihal dokumen"
                          :disabled="items.org[i] !== null"
                          :error-messages="errors"
                          v-model="items.perihal[i]"
                          clearable
                        ></v-text-field>
                      </ValidationProvider>
                      <v-menu
                        v-model="menu[i]"
                        :close-on-content-click="false"
                        max-width="290"
                      >
                        <template v-slot:activator="{ on, attrs }">
                          <v-text-field
                            :value="tanggalFormat[i]"
                            clearable
                            label="Tanggal dokumen"
                            readonly
                            v-bind="attrs"
                            :disabled="items.org[i] !== null"
                            v-on="on"
                            @click:clear="items.tgl_berkas[i] = null"
                          ></v-text-field>
                        </template>
                        <v-date-picker
                          locale="id-id"
                          v-model="items.tgl_berkas[i]"
                          @change="menu[i] = false"
                        ></v-date-picker>
                      </v-menu>
                      <template v-if="items.org[i] !== null">
                        <v-btn>
                          <v-icon>mdi-cloud-download</v-icon> Unduh
                        </v-btn> {{items.org[i]}}
                      </template>
                      <template v-else>
                        <ValidationProvider
                          v-slot="{ errors }"
                          name="File dokumen"
                          rules="required"
                        >
                          <v-file-input
                            show-size
                            :error-messages="errors"
                            v-model="items.berkas[i]"
                            label="File berkas"
                          ></v-file-input>
                        </ValidationProvider>
                      </template>
                    </template>
                  </v-col>
                </v-row>
              </v-card-text>
              <v-card-actions>
                <v-spacer />
                <v-btn
                  color="secondary"
                  @click="clear"
                  :disabled="!layanan"
                >
                  clear
                </v-btn>
                <v-btn
                  type="submit"
                  class="mr-4"
                  color="primary"
                  :disabled="invalid"
                >
                  submit
                </v-btn>
              </v-card-actions>
            </v-form>
          </ValidationObserver>
        </v-card>
      </v-col>
    </v-row>
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
            @click="deleteBerkas(selectedItem)"
          >Ya!</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import moment from 'moment'
import { extend, ValidationObserver, ValidationProvider } from "vee-validate";
import * as rules from "vee-validate/dist/rules";
import { messages } from "vee-validate/dist/locale/id.json";
var FormData = require('form-data');

Object.keys(rules).forEach(rule => {
  extend(rule, {
    ...rules[rule], // copies rule configuration
    message: messages[rule] // assign message
  });
});

export default {
  components: {
    ValidationProvider,
    ValidationObserver
  },
  data () {
    return {
      items: {
        pemohon: null,
        keterangan: null,
        nomor_berkas: [],
        berkas: [],
        asal: [],
        perihal: [],
        tgl_berkas: [],
        org: [],
      },
      dialogDelete: null,
      errorMsg: {},
      menu: [false],
      subkategori: [
        { text: 'Layanan Barang Publik', value: 0 },
        { text: 'Layanan Jasa Publik', value: 1 },
        { text: 'Layanan Administrasi', value: 2 },
      ],
      kategoris: [],
      kategori: null,
      alert: false,
      layanans: [],
      layanan: null,
      snackbar: false,
      snackbarMsg: null,
      msg: null,
      selectedItem: null,
    }
  },
  watch: {
    kategori: function (val) {
      var self = this
      axios.get('/api/tampil-layanan?kategori=' + val)
        .then(function (response) {
          // console.log(('/api/tampil-layanan?kategori=' + val))
          console.log(response.data.data)
          self.layanans = response.data.data
        }).catch(function (e) {
          console.log(e)
        });
    },
  },
  computed: {
    tanggalFormat () {
      let tanggal = []
      this.items.tgl_berkas.forEach(element => {
        tanggal.push(moment(element).format('dddd, MMMM Do YYYY'))
      })
      return tanggal
    },
  },
  mounted () {
    const self = this
    //get kategori
    axios.get('/api/kategori')
      .then(function (response) {
        self.kategoris = response.data.kategori
      }).catch(function (e) {
        console.log(e)
      });
    this.getData(this.$route.params.id)
  },
  methods: {
    konfirmasi (item, index) {
      var self = this;
      self.dialogDelete = true
      // console.log(key)
      self.msg = "Anda akan menghapus berkas <span class='font-weight-bold'>" + item.org[0] + "</span>. Tetap lanjutkan?"
      self.selectedItem = index
    },
    deleteBerkas (index) {
      var self = this;
      axios.delete('/api/v1/orderan/' + this.$route.params.id + '/delete-media/' + index)
        .then(function (response) {
          self.getData(self.$route.params.id)
          console.log(index)
          self.hapusBerkas(index)
          self.dialogDelete = false
          self.snackbarMsg = "Sukses menghapus!"
          self.snackbar = true;
        })
        .catch(function (e) {
          console.log(e)
        })
    },
    getData (id) {
      var self = this
      axios.get('/api/v1/layanan/orderan/' + id)
        .then(function (response) {
          console.log(response.data.data)
          self.items.pemohon = response.data.data.pemohon
          self.items.keterangan = response.data.data.keterangan
          self.kategori = response.data.data.layanan.kategori
          self.layanan = response.data.data.layanan.id
          // console.log(response.data.data.berkas[0])
          for (var index in response.data.data.berkas) {
            // console.log(response.data.data.berkas[index])
            // console.log(i)
            self.items.nomor_berkas[index] = response.data.data.berkas[index].custom_properties.surat.nomor
            self.items.asal[index] = response.data.data.berkas[index].custom_properties.surat.asal
            self.items.perihal[index] = response.data.data.berkas[index].custom_properties.surat.perihal
            self.items.tgl_berkas[index] = response.data.data.berkas[index].custom_properties.surat.tgl_berkas
            self.items.org[index] = response.data.data.berkas[index].file_name
            // self.items.tgl_format[index] = self.formatDate(self.items.tgl_berkas[index])
            // console.log(response.data.data.berkas[index].custom_properties.surat.tgl_berkas)
            // console.log(self.formatDate(response.data.data.berkas[index].custom_properties.surat.tgl_berkas))
          }

        }).catch(function (e) {
          console.log(e)
        })

    },
    formatDate (date) {
      if (!date) return null

      const [year, month, day] = date.split('-')
      return `${month}/${day}/${year}`
    },
    parseDate (date) {
      if (!date) return null

      const [month, day, year] = date.split('/')
      return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
    },
    tambahBerkas () {
      this.items.asal.push("")
      this.items.perihal.push("")
      // this.items.tgl_berkas.push(new Date().toISOString().substr(0, 10)) //tanggal sekarang
      // this.items.tgl_format.push(this.formatDate(new Date().toISOString().substr(0, 10))) //tanggal sekarang
      this.items.tgl_berkas.push(new Date().toISOString().substr(0, 10))
      this.items.nomor_berkas.push("")
      this.items.org.push(null)
    },
    hapusBerkas (index) {
      this.items.asal.splice(index, 1)
      this.items.perihal.splice(index, 1)
      this.items.nomor_berkas.splice(index, 1)
      this.items.berkas.splice(index, 1)
      this.items.tgl_berkas.splice(index, 1)
      this.items.org.splice(index, 1)
    },
    clear () {
      var self = this
      self.items.pemohon = ""
      self.items.keterangan = ""
      self.items.nomor_berkas = []
      self.items.berkas = []
      self.items.asal = []
      self.items.perihal = []
      self.items.tgl_berkas = []
      self.$refs.observer.reset();
    },
    formSend () {
      const self = this;
      var payload = new FormData();
      for (var i in self.items.asal) {
        if (self.items.org[i] == null) {
          payload.append('asal[]', self.items.asal[i])
          payload.append('perihal[]', self.items.perihal[i])
          payload.append('nomor_berkas[]', self.items.nomor_berkas[i])
          payload.append('tgl_berkas[]', self.items.tgl_berkas[i])
          payload.append('berkas[]', self.items.berkas[i])
        }
      }
      axios.post('/api/v1/orderan/' + self.$route.params.id + '/berkas', payload, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
        .then(function (response) {
        })
        .catch(function (e) {
          console.log(e.response)
        });
    },
    async submit () {
      const self = this;

      const isValid = await this.$refs.observer.validate();
      if (!isValid) {
        self.errorMsg = { Validation: "Data tidak valid!" }
      }
      let payload = {
        pemohon: self.items.pemohon,
        keterangan: self.items.keterangan,
        layanan_id: self.layanan
      }

      axios.patch('/api/v1/layanan/' + self.layanan + '/orderan/' + self.$route.params.id, payload)
        .then(function (response) {
          self.formSend()
          self.$store.commit('hideLoader');
          // reset the values ...
          self.clear();
          self.layanan = null
          self.kategori = null
          self.snackbarMsg = "Sukses!"
          self.snackbar = true;
        })
        .catch(function (e) {
          // console.log()
          console.log(e.response)
          self.alert = true
          self.errorMsg = JSON.parse(e.response.request.response)
          // self.dialog = true

        });
    },
  }
};
</script>
