<template>
  <div>
    <v-card>
      <v-card-title>
        Tambah Layanan
      </v-card-title>
      <v-divider></v-divider>
      <v-container>
        <ValidationObserver v-slot="{ validate, reset, invalid }">
          <v-form @submit.prevent="tambahAnime">
            <v-row no-gutters>
              <v-col cols=12>
                <ValidationProvider
                  v-slot="{ errors }"
                  name="Nama layanan"
                  rules="required"
                >
                  <v-text-field
                    label="Nama"
                    :error-messages="errors"
                    v-model="items.nama"
                  ></v-text-field>
                </ValidationProvider>
              </v-col>
              <v-col cols=12>
                <ValidationProvider
                  v-slot="{ errors }"
                  name="Kategori layanan"
                  rules="required"
                >
                  <v-autocomplete
                    v-model="items.kategori"
                    :items="kategori"
                    label="Kategori layanan"
                  ></v-autocomplete>
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
          </v-form>
        </ValidationObserver>
      </v-container>
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
        nama: "",
        kategori: [],
        deskripsi: "",
      },
      editor: ClassicEditor,
      editorConfig: {
        // The configuration of the rich-text editor.
        language: 'de'
      },
      states: [
        { name: 'Florida', abbr: 'FL', id: 1 },
        { name: 'Georgia', abbr: 'GA', id: 2 },
        { name: 'Nebraska', abbr: 'NE', id: 3 },
        { name: 'California', abbr: 'CA', id: 4 },
        { name: 'New York', abbr: 'NY', id: 5 },
      ],
      kategori: [],
      valid: false,
      alert: {
        show: false,
        icon: "",
        color: "",
        message: ""
      },
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
    // console.log()
  },
  watch: {
    // tab (newTab, oldTab) {
    //   if (newTab == 1) {
    //     this.gambar.img = null
    //   }
    //   else {
    //     this.gambar.imageData = null
    //     this.gambar.img = null
    //   }
    // },
    // "gambar.img" (newImg) {
    //   if (!newImg) {
    //     this.gambar.imageData = null
    //     this.gambar.img = null
    //   }
    // }
  },
  methods: {
    customFilter (item, queryText, itemText) {
      const textOne = item.name.toLowerCase()
      const textTwo = item.abbr.toLowerCase()
      const searchText = queryText.toLowerCase()

      return textOne.indexOf(searchText) > -1 ||
        textTwo.indexOf(searchText) > -1
    },
    tambahAlt () {
      this.items.title_synonyms.push("")
    },
    hapusAlt (index) {
      this.items.title_synonyms.splice(index, 1)
    },
    // previewImg (e) {
    //   var input = event.target;
    //   if (input.files && input.files[0]) {
    //     var reader = new FileReader();
    //     reader.onload = (e) => {
    //       // Note: arrow function used here, so that "this.imageData" refers to the imageData of Vue component
    //       // Read image as base64 and set to imageData
    //       this.gambar.imageData = e.target.result;
    //     }
    //     // Start the reader job - read file as a data url (base64 format)
    //     reader.readAsDataURL(input.files[0]);
    //   }
    // },
    clear () {
      var self = this;
      self.items.title_english = ""
      self.items.title_japanese = ""
    },
    save () {

      const self = this;

      let payload = {
        malId: self.malId,
        email: self.email,
      };

      self.$store.commit('showLoader');

      axios.post('/admin/anime', payload).then(function (response) {

      });
    },
  }
};
</script>
