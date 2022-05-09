<template>
  <div class="container-wrapper">
    <MapScroll />
    <MapScroll2 />
    <EchartsScroll />
  </div>
</template>
<script>
import MapScroll from "../components/MapScroll.vue";
import MapScroll2 from "../components/MapScroll2.vue";
import EchartsScroll from "../components/EchartsScroll.vue";
export default {
  name: "MapApp",
  data() {
    return {};
  },
  components: {
    MapScroll,
    MapScroll2,
    EchartsScroll,
  },
};
</script>
<style scoped>
.container-wrapper {
  background-color: #3b4954;
  /* width: 100%; */
  height: 100%;
  /* position: absolute; */
}
</style>
