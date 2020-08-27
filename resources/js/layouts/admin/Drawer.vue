<template>
  <v-navigation-drawer
    v-bind="$attrs"
    app
  >
    <v-list dense>
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
</template>

<script>
export default {
  name: 'DashDrawer',
  data: () => ({
    dialog: false,
    items: [
      { icon: 'mdi-home', text: 'PTSP', link: '/', permission: ['permohonan', 'layanan'] },
      { icon: 'mdi-view-dashboard', text: 'Beranda', link: '/dashboard/beranda', permission: ['permohonan', 'layanan'] },
      {
        icon: 'mdi-chevron-down',
        icon_alt: 'mdi-chevron-down',
        icon_prepend: 'mdi-handshake',
        text: 'Permohonan',
        model: null,
        url: '/dashboard/permohonan',
        permission: 'permohonan',
        children: [
          { icon: 'mdi-format-list-bulleted', text: 'List', link: '/dashboard/permohonan/list', permission: 'view permohonan' },
          { icon: 'mdi-plus', text: 'Tambah', link: '/dashboard/permohonan/tambah', permission: 'add permohonan' },
          { icon: 'mdi-hand-right', text: 'Disposisi', link: '/dashboard/permohonan/disposisi', permission: 'disposisi' },
          { icon: 'mdi-list-status', text: 'Status', link: '/dashboard/permohonan/status', permission: 'edit status permohonan' },
        ],
      },
      {
        icon: 'mdi-chevron-down',
        icon_alt: 'mdi-chevron-down',
        icon_prepend: 'mdi-walk',
        text: 'Layanan',
        url: '/dashboard/layanan',
        model: null,
        permission: 'layanan',
        children: [
          { icon: 'mdi-format-list-bulleted', text: 'List', link: '/dashboard/layanan/list', permission: 'view layanan' },
          { icon: 'mdi-plus', text: 'Tambah', link: '/dashboard/layanan/tambah', permission: 'add layanan' },
        ],
      },
    ],
  }),
  methods: {
  },
  mounted () {
    for (var item in this.items) {
      this.items[item].model = (this.$route.matched[1].path == this.items[item].url) ? true : false
    }
  },
  watch: {
  },
}
</script>
