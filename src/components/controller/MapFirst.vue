<template>
  <div id="map" class="map-container"></div>
</template>

<script>
import { mapGetters } from "vuex";
let map;
export default {
  name: "MapFirst",
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
      // let flyOption = this.mapOptions(this.step);
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
      // mapbox://styles/pokeycn/cl303i6sz000h14mf2zjl04qe
      map = new this.$mapboxgl.Map({
        container: "map",
        style:
          "https://api.mapbox.com/styles/v1/bd123/cl373u8jd000q14qe7cd1bg62.html?title=copy&access_token=pk.eyJ1IjoiYmQxMjMiLCJhIjoiY2t0MWFxdmt2MGJ0cDMxcGsxY202MGVhcSJ9.WlassP108oPcZ0XS8ztwxA&zoomwheel=true&fresh=true#3.01/51.88/13.84",
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
