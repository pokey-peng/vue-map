<template>
  <section id="map-container-2" class="scrolly-overlay">
    <div class="scrolly-sticky">
      <MapSecond />
    </div>
    <v-container inner class="scrolly-text py-0"></v-container>
    <v-container
      inner
      class="scrolly-text scrolly-text-side py-0 mx-0"
    ></v-container>
  </section>
</template>
<script>
import MapSecond from "./controller/MapSecond.vue";
export default {
  name: "MapScroll2",
  data: () => {
    return {};
  },
  components: {
    MapSecond,
  },
};
</script>

<style scoped></style>
