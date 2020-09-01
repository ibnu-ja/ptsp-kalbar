<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-list>
        <template
          v-for="item in items"
          v-if="$auth.check({permissions: item.permission})"
        >
          <v-row
            v-if="item.heading"
            :key="item.heading"
            align="center"
          >
            <v-col cols="6">
              <v-subheader v-if="item.heading">
                {{ item.heading }}
              </v-subheader>
            </v-col>
            <v-col
              cols="6"
              class="text-center"
            >
              <a
                href="#!"
                class="body-2 black--text"
              >EDIT</a>
            </v-col>
          </v-row>
          <v-list-group
            v-else-if="item.children"
            :key="item.text"
            v-model="item.model"
            :prepend-icon="item.icon_prepend"
            :append-icon="item.model ? item.icon : item.icon_alt"
          >
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>
                  {{ item.text }}
                </v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item
              v-for="(child, i) in item.children"
              :key="i"
              :to="child.link"
              v-if="$auth.check({permissions: child.permission})"
            >
              <v-list-item-action v-if="child.icon">
                <v-icon>{{ child.icon }}</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>
                  {{ child.text }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
          <v-list-item
            v-else
            :key="item.text"
            :to="item.link"
          >
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>
                {{ item.text }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      color="indigo"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>{{$auth.user().name}} <template v-if="$auth.user().jabatan">{{$auth.user().jabatan}}</template></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        text
        link
        @click.prevent="$auth.logout()"
      >
        logout
        <v-icon right>mdi-account-arrow-right</v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: 'DashbAppBarDrawer',
  data () {
    return {
      drawer: null,
      dialog: false,
      items: [
        { icon: 'mdi-home', text: 'PTSP', link: '/', permission: ['orderan', 'layanan'] },
        { icon: 'mdi-view-dashboard', text: 'Beranda', link: '/dashboard/beranda', permission: ['orderan', 'layanan'] },
        {
          icon: 'mdi-chevron-down',
          icon_alt: 'mdi-chevron-down',
          icon_prepend: 'mdi-handshake',
          text: 'Orderan',
          model: null,
          url: '/dashboard/orderan',
          permission: ['view orderan', 'add orderan', 'edit orderan', 'delete orderan'],
          children: [
            { icon: 'mdi-format-list-bulleted', text: 'List', link: '/dashboard/orderan/list', permission: 'view orderan' },
            { icon: 'mdi-plus', text: 'Tambah', link: '/dashboard/orderan/tambah', permission: 'add orderan' },
          ],
        },
        {
          icon: 'mdi-chevron-down',
          icon_alt: 'mdi-chevron-down',
          icon_prepend: 'mdi-walk',
          text: 'Layanan',
          url: '/dashboard/layanan',
          model: null,
          permission: ['view layanan', 'add layanan', 'edit layanan', 'delete layanan'],
          children: [
            { icon: 'mdi-format-list-bulleted', text: 'List', link: '/dashboard/layanan/list', permission: 'view layanan' },
            { icon: 'mdi-plus', text: 'Tambah', link: '/dashboard/layanan/tambah', permission: 'add layanan' },
          ],
        },
        {
          icon: 'mdi-chevron-down',
          icon_alt: 'mdi-chevron-down',
          icon_prepend: 'mdi-email-send',
          text: 'Surat Keluar',
          url: '/dashboard/surat-keluar',
          model: null,
          permission: ['view surat keluar', 'add surat keluar', 'edit surat keluar', 'delete surat keluar'],
          children: [
            { icon: 'mdi-format-list-bulleted', text: 'List', link: '/dashboard/surat-keluar/list', permission: 'view surat keluar' },
            { icon: 'mdi-plus', text: 'Tambah', link: '/dashboard/surat-keluar/tambah', permission: 'add surat keluar' },
          ],
        },
      ],
    }
  },
  mounted () {
    for (var item in this.items) {
      this.items[item].model = (this.$route.matched[1].path == this.items[item].url) ? true : false
    }
  },
} 
</script>
