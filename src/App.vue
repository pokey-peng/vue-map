<template>
  <v-app>
    <NavigationBar />
    <v-main>
      <router-view />
    </v-main>
    <AppFooter />
  </v-app>
</template>

<script>
import NavigationBar from "./views/AppBar.vue";
import AppFooter from "./views/AppFooter.vue";
export default {
  name: "App",

  data: () => ({
    //
  }),
  components: {
    NavigationBar,
    AppFooter,
  },
};
</script>
<style scoped></style>
