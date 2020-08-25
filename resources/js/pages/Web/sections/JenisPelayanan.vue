<template>
  <v-theme-provider>
    <base-section
      id="jenis-pelayanan"
      space="36"
    >
      <v-row
        class="ma-0 px-10"
        justify="center"
      >
        <v-col
          cols=12
          md=4
        >
          <v-card
            class="mx-auto"
            width="600"
          >
            <v-card-title>
              <span class="title text--h5">Kategori Layanan</span>
            </v-card-title>
            <v-list>
              <!-- <v-subheader>Layanan</v-subheader> -->
              <v-list-group
                v-for="(item, i) in items"
                :key="i"
                :value="i == 0 ? true: false"
              >
                <template v-slot:activator>
                  <v-list-item-content>
                    <v-list-item-title>{{item}}</v-list-item-title>
                  </v-list-item-content>
                </template>
                <v-list-item
                  v-for="(itemm, j) in subkategori"
                  :key="j"
                  @click="tampilLayanan(item, j)"
                >
                  <v-list-item-content>
                    <v-list-item-title>{{itemm}}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-group>
            </v-list>
          </v-card>
        </v-col>
        <v-col
          cols=12
          md=8
        >
        <h5 class="text-h5 py-2">{{subkategori[activeSub]}}</h5>
          <v-expansion-panels
            v-model="panel"
            :disabled="loading"
            v-if="!loading"
          >
            <v-expansion-panel
              v-for="(layanan, k) in layanans"
              :key="k"
            >
              <v-expansion-panel-header class="text-h6">{{layanan.name}}</v-expansion-panel-header>
              <v-expansion-panel-content>
                <div v-html="layanan.deskripsi"></div>
                <v-btn link class="py-2">Daftar Permohonan</v-btn>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
          <div
            v-else
            class="text-center"
          >
            <v-progress-circular
              :size="70"
              :width="7"
              indeterminate
            ></v-progress-circular>
          </div>
        </v-col>
      </v-row>
    </base-section>
  </v-theme-provider>
</template>

<script>
export default {
  name: 'JenisPelayanan',
  data: () => ({
    items: [],
    subkategori: ['Layanan Barang Publik', 'Layanan Jasa Publik', 'Layanan Administrasi'],
    layanans: '',
    activeSub: 0,
    loading: true,
    panel: 0,
    readonly: false,
  }),
  mounted: function () {
    var that = this
    axios
      .get('/api/kategori')
      .then(function (response) {
        that.items = response.data.kategori
        that.tampilLayanan(response.data.kategori[0], 0)
      })
      // .then(function (response) {
      //   console.log(response.data)
      //   this.items = response.data.kategori
      //   // this.tampilLayanan (response.data.kategori[0], 1)
      // })
      .catch(error => console.log(error))
    // 
  },
  methods: {
    tampilLayanan (layanan, subkategori) {
      var that = this
      that.loading = true
      that.activeSub = subkategori
      axios
        .get(
          '/api/layanan?kategori=' + layanan + '&subkategori=' + (subkategori + 1)
        )
        .then(function (response) {
          that.layanans = response.data.data
          that.loading = false
        })
        .catch(
          error => console.log(error)
        )
    }
  }
}
</script>
