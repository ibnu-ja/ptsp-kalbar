<template>
  <div>
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
      </v-col>
      <v-col
        cols="12"
        md="8"
      >
        <v-card>
          <v-card-title>
            Tambah
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
                        <v-col class="text-right">
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
      },
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
  },
  methods: {
    tambahBerkas () {
      this.items.asal.push("")
      this.items.perihal.push("")
      // this.items.tgl_berkas.push(new Date().toISOString().substr(0, 10)) //tanggal sekarang
      // this.items.tgl_format.push(this.formatDate(new Date().toISOString().substr(0, 10))) //tanggal sekarang
      this.items.tgl_berkas.push(new Date().toISOString().substr(0, 10))
      // this.items.tgl_berkas.push("")
      this.items.nomor_berkas.push("")
    },
    hapusBerkas (index) {
      this.items.asal.splice(index, 1)
      this.items.perihal.splice(index, 1)
      this.items.nomor_berkas.splice(index, 1)
      this.items.berkas.splice(index, 1)
      this.items.tgl_berkas.splice(index, 1)
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
    async submit () {
      const self = this;

      const isValid = await this.$refs.observer.validate();
      if (!isValid) {
        self.errorMsg = { Validation: "Data tidak valid!" }
      }

      var payload = new FormData();
      payload.append('pemohon', self.items.pemohon)
      payload.append('keterangan', self.items.keterangan)
      for (var i in self.items.asal) {
        payload.append('asal[]', self.items.asal[i])
        payload.append('perihal[]', self.items.perihal[i])
        payload.append('nomor_berkas[]', self.items.nomor_berkas[i])
        payload.append('tgl_berkas[]', self.items.tgl_berkas[i])
        payload.append('berkas[]', self.items.berkas[i])
      }
      console.log(...payload)
      axios.post('/api/v1/layanan/' + self.layanan + '/orderan', payload, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
        .then(function (response) {
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
