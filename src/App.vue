<template>
  <v-app>
    <NavigationBar />
    <v-main>
      <router-view />
      <AppSideBar />
    </v-main>
    <AppFooter />
  </v-app>
</template>

<script>
import NavigationBar from "./views/AppBar.vue";
import AppFooter from "./views/AppFooter.vue";
import AppSideBar from "./views/AppSideBar.vue";
export default {
  name: "App",

  data: () => ({
    //
  }),
  components: {
    NavigationBar,
    AppFooter,
    AppSideBar,
  },
};
</script>
<style scoped></style>
