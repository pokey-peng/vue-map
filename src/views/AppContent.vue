<template>
  <div class="container-wrapper">
    <Welcome />
    <MapStoryFirst />
    <EchartsStory />
  </div>
</template>
<script>
import Welcome from "../components/Welcome.vue";
import MapStoryFirst from "../components/MapStoryFirst.vue";
import EchartsStory from "../components/EchartsStory.vue";
export default {
  name: "MapApp",
  data() {
    return {};
  },
  components: {
    Welcome,
    MapStoryFirst,
    EchartsStory,
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
