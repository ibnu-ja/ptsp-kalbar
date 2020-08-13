<template>
  <base-section id="proses-pelayanan">
    <base-section-heading
      color="grey lighten-2"
      icon="mdi-walk"
      title="Proses Pelayanan"
    />

    <v-container>
      <v-row>
        <v-col
          v-for="card in cards"
          :key="card.title"
          cols="12"
          md="3"
        >
          <base-info-card v-bind="card" />
        </v-col>
      </v-row>
    </v-container>
  </base-section>
</template>

<script>
  export default {
    name: 'ProsesPelayanan',

    data: () => ({
      cards: [
        {
          title: 'Permohonan Pelayanan',
          text: 'Pemohon menyiapkan berkas dan persyaratan.',
          callout: '1',
        },
        {
          title: 'Pemeriksaan Berkas',
          text: 'Operator mem-verifikasi kelengkapan persyaratan yang diajukan pemohon.',
          callout: '2',
        },
        {
          title: 'Proses Penyelesaian',
          text: 'Petugas teknis akan menindaklanjuti penyelesaian.',
          callout: '3',
        },
        {
          title: 'Menerima Tanda Terima',
          text: 'Pemohon datang untuk menerima hasil pelayanan.',
          callout: '4',
        },
        // {
        //   title: 'Target Setting',
        //   subtitle: 'Income Flow',
        //   text: 'Similique sunt in culpa qui officia deserunt mollitia animi, id est laborut dolorum fuga.harum quidem rerum facilis estexpedita distinctio.',
        //   callout: '04',
        // },
      ],
    }),
  }
</script>
