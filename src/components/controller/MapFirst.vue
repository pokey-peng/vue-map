<template>
  <div id="map" class="map-container"></div>
</template>

<script>
import { mapGetters } from "vuex";
import { setLayerOpacity } from "../../lib/SetLayer";
let map;
export default {
  name: "MapFirst",
  props: { yearLabel: Array },
  data: () => {
    return {};
  },
  async mounted() {
    this.initMap();
    this.initLayer();
  },
  computed: {
    ...mapGetters("mapView", ["currentPage", "step", "currentYear"]),
    ...mapGetters("mapState", ["mapOptions"]),
  },
  watch: {
    step() {
      //(this.step);
      let option = this.mapOptions(this.step);
      if (option === null || option === undefined) {
        return;
      }
      console.log(option);
      map.flyTo(option["camera"]);
      this.setLayer(option["onStepEnter"]);
    },
    currentYear() {
      //console.log(this.currentYear);
      this.filterByYear(Number(this.currentYear));
    },
    yearLabel(newVal) {
      let expression =
        newVal.length !== 0 ? ["match", ["get", "JoinTime"], newVal, 1, 0] : 0;
      let options = {};
      //console.log(expression);
      map.setPaintProperty("NOTA", "fill-opacity", expression, options);
    },
  },
  methods: {
    initMap() {
      this.$mapboxgl.accessToken =
        "pk.eyJ1IjoicG9rZXljbiIsImEiOiJjbDJrNmVoOG8wMG82M2Rubm9qeGdxdTZuIn0.l37o005heOdClDI8RY__eg";
      // eslint-disable-next-line
      // pk.eyJ1IjoicG9rZXljbiIsImEiOiJjbDJrNmVoOG8wMG82M2Rubm9qeGdxdTZuIn0.l37o005heOdClDI8RY__eg
      // pk.eyJ1IjoiYmQxMjMiLCJhIjoiY2t0MWFxdmt2MGJ0cDMxcGsxY202MGVhcSJ9.WlassP108oPcZ0XS8ztwxA
      // mapbox://styles/pokeycn/cl303i6sz000h14mf2zjl04qe
      map = new this.$mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/pokeycn/cl3d1w72z000014qfbg1cf28d",
        center: [-28, 39],
        boxZoom: true,
        dragRotate: false,
        zoom: 1.89,
        scrollZoom: false,
      });
    },
    initLayer() {
      map.on("load", () => {
        map.setPaintProperty("NOTA", "fill-opacity", 0, {});
      });
    },
    setLayer(stepSetting) {
      let layerSetting = stepSetting;
      if (layerSetting.length > 0) {
        layerSetting.forEach((layer) => {
          setLayerOpacity(layer, map);
        });
      }
    },
    filterByYear(year, mode = "multi") {
      let filterExpress =
        mode === "single"
          ? ["match", ["get", "JoinTime"], [year], 1, 0]
          : ["case", ["<=", ["get", "JoinTime"], year], 1, 0];
      let options = {};
      // let transitionProp = "fill-opacity" + "-transition";
      // options = { duration: 0.3 };
      // map.setPaintProperty("NOTA", transitionProp, options);
      map.setPaintProperty("NOTA", "fill-opacity", filterExpress, options);
    },
  },
};
</script>

<style scoped></style>
