<template>
  <div>
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
    <v-card>
      <v-card-title>
        Edit Layanan
      </v-card-title>
      <v-divider></v-divider>
      <ValidationObserver
        v-slot="{ validate, reset, invalid }"
        ref="observer"
      >
        <v-form
          lazy-validation
          @submit.prevent="update($route.params.id)"
        >
          <v-card-text>
            <v-row
              no-gutters
              align="center"
              justify="center"
            >
              <v-col cols=12>
                <ValidationProvider
                  v-slot="{ errors }"
                  name="Nama layanan"
                  rules=""
                >
                  <v-text-field
                    label="Nama"
                    :error-messages="errors"
                    v-model="items.name"
                    clearable
                  ></v-text-field>
                </ValidationProvider>
              </v-col>
              <v-col cols=12>
                <ValidationProvider
                  v-slot="{ errors }"
                  name="Kategori layanan"
                  rules=""
                >
                  <v-combobox
                    v-model="items.kategori"
                    :error-messages="errors"
                    :items="kategori"
                    clearable
                    label="Kategori layanan"
                  ></v-combobox>
                </ValidationProvider>
              </v-col>
              <v-col cols=12>
                <ValidationProvider
                  v-slot="{ errors }"
                  name="Subkategori layanan"
                  rules=""
                >
                  <v-select
                    :items="subkategori"
                    v-model="items.subkategori"
                    :error-messages="errors"
                    clearable
                    item-text="text"
                    item-value="value"
                    label="Subkategori"
                  ></v-select>
                </ValidationProvider>
              </v-col>
              <v-col cols="12">
                <div>Deskripsi</div>
                <jodit-editor v-model="items.deskripsi" />
              </v-col>
            </v-row>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn
              color="secondary"
              @click="clear"
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
  </div>
</template>

<script>
import { Jodit } from 'jodit'
import 'jodit/build/jodit.min.css'
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
  components: {
    ValidationProvider,
    ValidationObserver
  },
  data () {
    const self = this;
    return {
      mal_id: "",
      items: {
        name: "",
        kategori: "",
        subkategori: "",
        deskripsi: "",
      },
      editor: null,
      dialog: true,
      errorMsg: {},
      subkategori: [
        { text: 'Layanan Barang Publik', value: 0 },
        { text: 'Layanan Jasa Publik', value: 1 },
        { text: 'Layanan Administrasi', value: 2 },
      ],
      kategori: [],
      alert: false,
      snackbar: false,
      snackbarMsg: null,
    };
  },
  created () {
    const self = this
    axios.get('/api/kategori')
      .then(function (response) {
        self.kategori = response.data.kategori
      }).catch(function (e) {
        console.log(e)
      });
      // console.log(this.$route.params.id)
    this.getData(this.$route.params.id)
  },
  methods: {
    getData (id) {
      var self = this
      axios.get('/api/v1/layanan/' + id)
        .then(function (response) {
          console.log(response.data.data)
          self.items.name = response.data.data.name
          self.items.kategori = response.data.data.kategori
          self.items.subkategori = response.data.data.subkategori
          self.items.deskripsi = response.data.data.deskripsi
        }).catch(function (e) {
          console.log(e)
        })

    },
    clear () {
      var self = this
      self.items.name = ""
      self.items.kategori = ""
      self.items.subkategori = ""
      self.items.deskripsi = ""
      self.$refs.observer.reset();
    },
    async update (id) {
      const self = this;

      const isValid = await this.$refs.observer.validate();
      if (!isValid) {
        self.errorMsg = { Validation: "Data tidak valid!" }
      }
      let payload = {
        name: self.items.name,
        kategori: self.items.kategori,
        subkategori: self.items.subkategori,
        deskripsi: self.items.deskripsi,
      }
      // console.log($route.params.id)
      axios.patch('/api/v1/layanan/' + id, payload)
        .then(function (response) {
          self.$store.commit('hideLoader');
          self.snackbarMsg = "Sukses!"
          self.snackbar = true;
          // reset the values ...
          self.clear();
        })
        .catch(function (e) {
          // console.log()
          console.log(e.response)
          self.alert = true
          self.errorMsg = JSON.parse(e.response.request.response)
          // self.dialog = true
        });
    }
  }
};
</script>
