<template>
  <div class="container-wrapper">
    <Welcome />
    <MapStoryFirst />
    <EchartsStory />
    <GlobeStory />
  </div>
</template>
<script>
import Welcome from "../components/Welcome.vue";
import MapStoryFirst from "../components/MapStoryFirst.vue";
import EchartsStory from "../components/EchartsStory.vue";
import GlobeStory from "../components/GlobeStory.vue";
export default {
  name: "MapApp",
  data() {
    return {};
  },
  components: {
    Welcome,
    MapStoryFirst,
    EchartsStory,
    GlobeStory,
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
