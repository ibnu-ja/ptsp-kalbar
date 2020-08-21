<template>
  <v-theme-provider>
    <base-section
      id="jenis-pelayanan"
      space="36"
    >
      <v-row
        align="center"
        class="ma-0"
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
            <v-list>
              <v-list-group
                v-for="(item, i) in items"
                :key="i"
              >
                <template v-slot:activator>
                  <v-list-item-content>
                    <v-list-item-title>{{item.nama}}</v-list-item-title>
                  </v-list-item-content>
                </template>
                <v-list-group
                  no-action
                  sub-group
                  v-for="(itemm, j) in item.subkategori"
                  :key="j"
                >
                  <template v-slot:activator>
                    <v-list-item-content>
                      <v-list-item-title>{{itemm.nama}}</v-list-item-title>
                    </v-list-item-content>
                  </template>
                  <v-list-item
                    v-for="(itemmm, k) in itemm.subkategori"
                    :key="k"
                    link
                  >
                    <v-list-item-title v-text="itemmm.nama"></v-list-item-title>
                  </v-list-item>
                </v-list-group>
                <!-- <v-list-item
                  v-for="(itemm, j) in item.subkategori"
                  :key="j"
                  link
                >
                  <v-list-item-title v-text="itemm.nama"></v-list-item-title>
                </v-list-item> -->
              </v-list-group>
              <!-- <v-list-item v-for="(item, i) in items" :key="i">
                <v-list-item-title>{{item.nama}}</v-list-item-title>
              </v-list-item> -->
              <!-- <v-list-item v-for="(itemm,j) in item.subkategori" :key="j">
                <v-list-item-title>{{itemm.nama}}</v-list-item-title>
              </v-list-item> -->
              <!-- <v-list-item>
                <v-list-item-icon>
                  <v-icon>mdi-home</v-icon>
                </v-list-item-icon>

                <v-list-item-title>Pelayanan</v-list-item-title>
              </v-list-item>
              <v-list-group
                no-action
                sub-group
              >
                <template v-slot:activator>
                  <v-list-item-content>
                    <v-list-item-title>Admin</v-list-item-title>
                  </v-list-item-content>
                </template>

                <v-list-item
                  v-for="(item, i) in items"
                  :key="i"
                  link
                >
                  <v-list-item-title v-text="item.text"></v-list-item-title>
                  <v-list-item-icon>
                    <v-icon v-text="item.icon"></v-icon>
                  </v-list-item-icon>
                </v-list-item>
              </v-list-group> -->
            </v-list>
          </v-card>
        </v-col>
        <v-col
          cols=12
          md=8
        >

        </v-col>
        <!-- <base-title
          space="0"
          title="GET OUR NEWSLETTER"
        />

        <v-responsive
          class="px-4 mx-6"
          max-width="600"
          width="100%"
        >
          <base-text-field
            hide-details
            label="Your Email Address"
          >
            <template v-slot:append-outer>
              <v-btn
                class="ml-n1"
                height="40"
                outlined
                style="margin-top: -7px;"
              >
                Subscribe
              </v-btn>
            </template>
          </base-text-field>
        </v-responsive> -->
      </v-row>
    </base-section>
  </v-theme-provider>
</template>

<script>
export default {
  name: 'JenisPelayanan',
  data: () => ({
    items: [
      {
        nama: "Pelayanan Bidang Tata Kelola",
        subkategori: [
          {
            nama: "Pelayana Barang Publik",
            subkategori: [
              {
                nama: "Pengadaan Barang dan Jasa melalui UKPBJ",
                link: "/asd"
              },
              {
                nama: "Pengadaan Barang dan Jasa melalui UKPBJ",
                link: "/asd"
              }
            ]
          },
          {
            nama: "Pelayana Barang Publik",
            subkategori: [
              {
                nama: "Pengadaan Barang dan Jasa melalui UKPBJ",
                link: "/asd"
              },
              {
                nama: "Pengadaan Barang dan Jasa melalui UKPBJ",
                link: "/asd"
              }
            ]
          }
        ]
      },
      {
        nama: "Pelayanan Bidang Tata Kelola",
        subkategori: [
          {
            nama: "Pelayana Barang Publik",
            subkategori: [
              {
                nama: "Pengadaan Barang dan Jasa melalui UKPBJ",
                link: "/asd"
              },
              {
                nama: "Pengadaan Barang dan Jasa melalui UKPBJ",
                link: "/asd"
              }
            ]
          },
          {
            nama: "Pelayana Barang Publik",
            subkategori: [
              {
                nama: "Pengadaan Barang dan Jasa melalui UKPBJ",
                link: "/asd"
              },
              {
                nama: "Pengadaan Barang dan Jasa melalui UKPBJ",
                link: "/asd"
              }
            ]
          }
        ]
      }
    ],

    // cruds: {
    //   {text:'Create', icon:'mdi-add'},
    //   {text:'Read',  icon:'mdi-insert_drive_file'},
    //   {text:'Update',  icon:'mdi-update'},
    //   {text:'Delete',  icon:'mdi-delete'}
    // }
  }),
}
</script>
