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
                  v-model="jenis"
                  :items="jenisSurat"
                  item-text="name"
                  item-value="value"
                  label="Jenis surat"
                  clearable
                ></v-autocomplete>
              </v-col>
              <v-col
                cols="12"
                v-if="nomor_urut != null"
              >
                <v-alert type="success">
                  Nomor urut surat: {{nomor_urut}}
                </v-alert>
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
              :disabled="jenis == null"
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
                      name="Nomor Surat"
                      rules="required"
                    >
                      <v-text-field
                        label="Nomor Surat"
                        :error-messages="errors"
                        v-model="items.nomor_surat"
                        clearable
                      ></v-text-field>
                    </ValidationProvider>
                    <ValidationProvider
                      v-slot="{ errors }"
                      name="Isi/perihal surat"
                      rules="required"
                    >
                      <v-text-field
                        label="Isi/perihal surat"
                        :error-messages="errors"
                        v-model="items.isi"
                        clearable
                      ></v-text-field>
                    </ValidationProvider>
                    <ValidationProvider
                      v-slot="{ errors }"
                      name="Tujuan surat"
                      rules=""
                    >
                      <v-text-field
                        label="Tujuan surat"
                        :error-messages="errors"
                        v-model="items.tujuan"
                        clearable
                      ></v-text-field>
                    </ValidationProvider>
                    <v-menu
                      v-model="menu"
                      :close-on-content-click="false"
                      max-width="290"
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <ValidationProvider
                          v-slot="{ errors }"
                          name="Tanggal dokumen"
                          rules="required"
                        >
                          <v-text-field
                            v-model="tanggalFormat"
                            :error-messages="errors"
                            clearable
                            label="Tanggal dokumen"
                            readonly
                            v-bind="attrs"
                            v-on="on"
                            @click:clear="items.tgl_surat = null"
                          ></v-text-field>
                        </ValidationProvider>
                      </template>
                      <v-date-picker
                        v-model="items.tgl_surat"
                        @change="menu = false"
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
                        v-model="items.berkas"
                        label="File berkas"
                      ></v-file-input>
                    </ValidationProvider>
                  </v-col>
                </v-row>
              </v-card-text>
              <v-card-actions>
                <v-spacer />
                <v-btn
                  color="secondary"
                  @click="clear"
                  :disabled="jenis == null"
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
        nomor_surat: null,
        tgl_surat: null,
        isi: null,
        tujuan: null,
        berkas: null,
      },
      asdasd: "",
      errorMsg: {},
      snackbar: false,
      snackbarMsg: null,
      jenis: null,
      menu: null,
      nomor_urut: null,
      jenisSurat: [
        { name: 'Surat Keluar Biasa', value: 0 },
        { name: 'Surat Perjalanan Dinas', value: 1 },
        { name: 'Surat Keterangan', value: 2 },
      ],
    }
  },
  watch: {
    jenis: function (newVal) {
      var self = this
      if (newVal === undefined) //console.log('null')
      {
        this.nomor_urut = null
        this.items.nomor_surat = null
      }
      else {
        axios.get('/api/v1/surat-keluar/cekNomor/' + newVal)
          .then(function (response) {
            console.log(newVal)
            self.nomor_urut = response.data.data
            self.items.nomor_surat = response.data.data
          })
          .catch(function (e) {
            console.log(e)
          })
      }
    }
  },
  computed: {
    tanggalFormat () {
      return this.items.tgl_surat ? moment(this.items.tgl_surat).format('dddd, Do MMMM YYYY') : ""
    },
  },
  created () {
    const self = this
    self.items.tgl_surat = new Date().toISOString().substr(0, 10)
    //get kategori
  },
  methods: {
    clear () {
      var self = this
      self.items.nomor_surat = null
      self.items.tgl_surat = null
      self.items.isi = null
      self.items.tujuan = null
      self.items.berkas = null
      self.jenis = null
      self.$refs.observer.reset();
    },
    async submit () {
      const self = this;

      const isValid = await this.$refs.observer.validate();
      if (!isValid) {
        self.errorMsg = { Validation: "Data tidak valid!" }
      }

      var payload = new FormData();
      payload.append('nomor_surat', self.items.nomor_surat)
      payload.append('tujuan', self.items.tujuan)
      payload.append('tgl_surat', self.items.tgl_surat)
      payload.append('isi', self.items.isi)
      payload.append('jenis', self.jenis)
      payload.append('berkas', self.items.berkas)

      axios.post('/api/v1/surat-keluar', payload, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
        .then(function (response) {
          self.$store.commit('hideLoader');
          // reset the values ...
          self.clear();
          self.snackbarMsg = "Sukses!"
          self.snackbar = true;
        })
        .catch(function (e) {
          // console.log()
          console.log(e.response)
          self.alert = true
          self.errorMsg = JSON.parse(e.response.request.response)

        });
    },
  }
};
</script>
