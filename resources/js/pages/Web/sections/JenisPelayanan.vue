<template>
  <v-theme-provider dark>
    <base-section
      id="jenis-pelayanan"
      space="36"
    >
      <v-row
        align="center"
        class="ma-0"
        justify="center"
      >
      <v-col cols=12 md=4>

      </v-col>
      <v-col cols=12 md=8>

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
  }
</script>
