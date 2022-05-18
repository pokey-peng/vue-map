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
    this.initLayer();
  },
  computed: {
    ...mapGetters("mapView", ["currentPage", "step"]),
    ...mapGetters("mapState", ["mapOptions"]),
  },
  watch: {
    step() {
      //console.log(this.step);
      if (this.step === "2-5") return;
      let flyOption = this.mapOptions(this.step);
      // flyOption["speed"] = 0.8;
      // flyOption["curve"] = 1.0;
      map.flyTo(this.mapOptions(this.step));
      this.setLayer(this.step);
    },
  },
  methods: {
    initMap() {
      this.$mapboxgl.accessToken =
        "pk.eyJ1IjoicG9rZXljbiIsImEiOiJjbDJrNmVoOG8wMG82M2Rubm9qeGdxdTZuIn0.l37o005heOdClDI8RY__eg";
      // eslint-disable-next-line
      map = new this.$mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/pokeycn/cl303i6sz000h14mf2zjl04qe",
        center: [-36, 45],
        boxZoom: true,
        dragRotate: true,
        zoom: 2.77,
        scrollZoom: false,
      });
    },
    initLayer() {
      map.on("load", () => {
        const visibility = map.getLayoutProperty(
          "fulleureapu-chaa6i",
          "visibility"
        );
        //console.log(visibility);
        if (visibility === "visible" || visibility === undefined) {
          map.setLayoutProperty("fulleureapu-chaa6i", "visibility", "none");
        }
      });
    },
    setLayer(stepId) {
      switch (stepId) {
        case "2-3":
          map.setLayoutProperty("fulleureapu-chaa6i", "visibility", "visible");
          break;
      }
    },
  },
};
</script>

<style scoped></style>
