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
            md=6
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
            md=6
          >
            <v-autocomplete
              v-model="kategori"
              :items="kategoris"
              append-icon=""
              label="Bidang Layanan"
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
                <v-btn
                  icon
                  small
                  color="primary"
                  @click="$router.push({ name:'dashboard.layanan.edit', params: { id: item.id }})"
                >
                  <v-icon>mdi-pencil</v-icon>
                </v-btn>
                <v-btn
                  icon
                  small
                  color="red"
                  @click="konfirmasi(item)"
                >
                  <v-icon>mdi-delete</v-icon>
                </v-btn>
              </td>
              <td>{{item.name}}</td>
              <td>{{item.kategori}}</td>
              <td>
                <v-btn
                  rounded
                  color="primary"
                  outlined
                  small
                  @click="tampilDeskripsi(item)"
                >tampil</v-btn>
              </td>
              <td>{{item.permohonan_count}}</td>
              <td>{{item.created_at | moment("DD-MM-YYYY")}}</td>
              <td>{{item.updated_at | moment("DD-MM-YYYY")}}</td>
            </tr>
          </tbody>
        </template>
      </v-data-table>
    </v-card>

    <v-dialog
      v-model="dialogDeskripsi"
      max-width="500"
    >
      <v-card>
        <v-card-title class="headline">Deskripsi</v-card-title>
        <v-card-text v-html="deskripsi">
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="green darken-1"
            text
            @click="dialogDeskripsi = false"
          >Tutup</v-btn>
        </v-card-actions>
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
export default {
  data () {
    return {
      items: [],
      dataLoading: null,
      dialogDelete: false,
      dialogDeskripsi: false,
      msg: null,
      search: '',
      snackbar: false,
      snackbarMsg: null,
      selectedItem: "",
      deskripsi: null,
      kategoris: [],
      kategori: null
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
        {
          text: 'Nama Layanan',
          value: 'name',
        },
        {
          text: 'Kategori', value: 'kategori',
          filter: value => {
            if (!this.kategori) return true
            return value == this.kategori
          },
        },
        { text: 'Deskripsi', value: 'deskripsi' },
        { text: 'Permohonan', value: 'permohonan_count', width: '130', align: 'center'  },
        { text: 'Dibuat', value: 'created_at', width: '110' },
        { text: 'Diperbarui', value: 'created_at', width: '110' },
      ]
    },
  },
  methods: {
    tampilData () {
      var self = this;
      self.dataLoading = true
      axios.get('/api/v1/layanan')
        .then(function (response) {
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
    tampilDeskripsi (item) {
      var self = this;
      self.dialogDeskripsi = true
      console.log(self.dialogDeskripsi);
      this.deskripsi = item.deskripsi;
    },
    deleteData (id) {
      var self = this;
      axios.delete('/api/v1/layanan/' + id)
        .then(function (response) {
          self.tampilData()
          self.dialogDelete = false
          self.snackbarMsg = "Sukses menghapus!"
          self.snackbar = true;
        })
        .catch(function (e) {
          console.log(e)
          self.dialogDelete = false
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