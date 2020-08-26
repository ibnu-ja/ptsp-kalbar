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
    <v-card>
      <v-card-title>
        Tambah Layanan
      </v-card-title>
      <v-divider></v-divider>
      <ValidationObserver
        v-slot="{ validate, reset, invalid }"
        ref="observer"
      >
        <v-form
          lazy-validation
          @submit.prevent="submit"
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
                  rules="required"
                >
                  <v-text-field
                    label="Nama"
                    :error-messages="errors"
                    v-model="items.name"
                  ></v-text-field>
                </ValidationProvider>
              </v-col>
              <v-col cols=12>
                <ValidationProvider
                  v-slot="{ errors }"
                  name="Kategori layanan"
                  rules="required"
                >
                  <v-combobox
                    v-model="items.kategori"
                    :error-messages="errors"
                    :items="kategori"
                    label="Kategori layanan"
                  ></v-combobox>
                </ValidationProvider>
              </v-col>
              <v-col cols=12>
                <ValidationProvider
                  v-slot="{ errors }"
                  name="Subkategori layanan"
                  rules="required"
                >
                  <v-select
                    :items="subkategori"
                    v-model="items.subkategori"
                    :error-messages="errors"
                    item-text="text"
                    item-value="value"
                    label="Subkategori"
                  ></v-select>
                </ValidationProvider>
              </v-col>
              <v-col cols="12">
                <div>Deskripsi</div>
                <ckeditor
                  :editor="editor"
                  v-model="items.deskripsi"
                  :config="editorConfig"
                ></ckeditor>
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
import { extend, ValidationObserver, ValidationProvider } from "vee-validate";
import * as rules from "vee-validate/dist/rules";
import { messages } from "vee-validate/dist/locale/id.json";
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

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
      dialog: true,
      errorMsg: {},
      subkategori: [
        { text: 'Layanan Barang Publik', value: 0 },
        { text: 'Layanan Jasa Publik', value: 1 },
        { text: 'Layanan Administrasi', value: 3 },
      ],
      editor: ClassicEditor,
      kategori: [],
      alert: false,
    };
  },
  mounted () {
    const self = this
    axios.get('/api/kategori')
      .then(function (response) {
        self.kategori = response.data.kategori
      }).catch(function (e) {
        console.log(e)
      });
  },
  methods: {
    clear () {
      var self = this
      self.items.name = ""
      self.items.kategori = ""
      self.items.subkategori = ""
      self.items.deskripsi = ""
      self.$refs.observer.reset();
    },
    async submit () {
      const self = this;

      const isValid = await this.$refs.observer.validate();
      if (!isValid) {
        self.errorMsg = { Validation: "Data tidak valid!" }
      }
      let payload = {
        name: "",
        kategori: self.items.kategori,
        subkategori: self.items.subkategori,
        deskripsi: self.items.deskripsi,
      }
      axios.post('/api/layanan', payload)
        .then(function (response) {
          self.$store.commit('hideLoader');
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
