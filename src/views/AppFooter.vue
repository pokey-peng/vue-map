<template>
  <v-card height="400px" color="blue-grey darken-3" dark>
    <v-footer v-bind="localAttrs" :padless="padless" light>
      <v-card flat tile width="100%" class="blue-grey lighten-3 text-center">
        <v-card-text>
          <v-btn v-for="icon in icons" :key="icon" class="mx-4" icon>
            <v-icon size="24px">
              {{ icon }}
            </v-icon>
          </v-btn>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="Black--text">
          {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
        </v-card-text>
      </v-card>
    </v-footer>

    <v-row align="center" justify="center" class="ma-12">
      <v-col cols="12" md="8">
        <v-select
          v-model="variant"
          :items="items"
          clearable
          label="Variant"
        ></v-select>

        <v-checkbox v-model="padless" hide-details label="Padless"></v-checkbox>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: "AppFooter",
  data: () => {
    return {
      icons: ["mdi-home", "mdi-email", "mdi-calendar", "mdi-delete"],
      items: ["default", "absolute", "fixed"],
      padless: true,
      variant: "default",
    };
  },
  computed: {
    localAttrs() {
      const attrs = {};

      if (this.variant === "default") {
        attrs.absolute = false;
        attrs.fixed = false;
      } else {
        attrs[this.variant] = true;
      }
      return attrs;
    },
  },
};
</script>
