<template>
  <div id="map" class="map-container"></div>
</template>

<script>
import { mapGetters } from "vuex";
let map;
export default {
  name: "MapSecond",
  data: () => {
    return {};
  },
  async mounted() {
    this.initMap();
  },
  computed: {
    ...mapGetters("mapView", ["currentPage", "step"]),
    ...mapGetters("mapState", ["mapOptions"]),
  },
  watch: {
    step() {
      console.log(this.step);
      if (this.step === "2-1" || this.step === "2-5") return;
      map.flyTo(this.mapOptions(this.step));
    },
  },
  methods: {
    initMap() {
      this.$mapboxgl.accessToken =
        "pk.eyJ1IjoicG9rZXljbiIsImEiOiJjbDJrNmVoOG8wMG82M2Rubm9qeGdxdTZuIn0.l37o005heOdClDI8RY__eg";
      // eslint-disable-next-line
      map = new this.$mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/mapbox/dark-v10",
        center: [-36, 45],
        boxZoom: true,
        dragRotate: true,
        zoom: 2.77,
        scrollZoom: false,
      });
    },
  },
};
</script>

<style scoped></style>
