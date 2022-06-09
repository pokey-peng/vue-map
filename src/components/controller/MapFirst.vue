<template>
  <div id="map" class="map-container"></div>
</template>

<script>
import { mapGetters } from "vuex";
import { setLayerOpacity } from "../../lib/SetLayer";
import { EventBus } from "@/lib/bus";
import * as turf from "@turf/turf";
import { point as point2, generateDisArrary } from "@/lib/AnimateBorder";
let map;
let disArray, pArray;
[disArray, pArray] = generateDisArrary();
console.log("弧线数组: ", disArray);
let counter = 0;
let curArcArray;
let origin = point2.features[0].geometry.coordinates;
const steps = 100;
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
  beforeDestroy() {
    EventBus.$off();
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
      console.log(this.currentYear);
      if (!["1982", "2009", "2017", "2020"].includes(this.currentYear)) {
        EventBus.$emit("ChangeBorder", this.currentYear);
      }

      this.filterByYear(Number(this.currentYear));
    },
    yearLabel(newVal) {
      let expression =
        newVal.length !== 0 ? ["match", ["get", "JoinTime"], newVal, 1, 0] : 0;
      let options = {};
      if (![1982, 2009, 2017, 2020].includes(newVal)) {
        EventBus.$emit("ChangeBorder", newVal);
      }
      //console.log(expression);
      map.setPaintProperty("final Europe", "fill-opacity", expression, options);
    },
  },
  methods: {
    initMap() {
      this.$mapboxgl.accessToken =
        "pk.eyJ1IjoiYmQxMjMiLCJhIjoiY2t0MWFxdmt2MGJ0cDMxcGsxY202MGVhcSJ9.WlassP108oPcZ0XS8ztwxA";
      // eslint-disable-next-line
      // pk.eyJ1IjoicG9rZXljbiIsImEiOiJjbDJrNmVoOG8wMG82M2Rubm9qeGdxdTZuIn0.l37o005heOdClDI8RY__eg
      // mapbox://styles/pokeycn/cl3d1w72z000014qfbg1cf28d
      map = new this.$mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/bd123/cl3tf7e44000714o3enyga2hd",
        center: [-28, 39],
        boxZoom: true,
        doubleClickZoom: true,
        dragRotate: false,
        zoom: 1.89,
        scrollZoom: false,
      });
    },
    initLayer() {
      map.on("load", () => {
        map.loadImage(
          process.env.BASE_URL + "icon/NOTA/NOTA_flag.png",
          (err, image) => {
            if (err) throw err;
            map.addImage("NOTA", image, { pixelRatio: 40 });

            map.addLayer({
              id: "pattern-layer",
              type: "fill",
              source: "finall Europe",
              paint: {
                "fill-pattern": "pattern",
              },
            });
          }
        );
        map.addSource("point2", {
          type: "geojson",
          data: point2,
        });
        map.addLayer({
          id: "point2",
          source: "point2",
          type: "symbol",
          layout: {
            "icon-image": "NOTA",
            "icon-rotate": ["get", "bearing"],
            "icon-rotation-alignment": "map",
            "icon-allow-overlap": true,
            "icon-ignore-placement": true,
          },
        });
        map.setPaintProperty("final Europe", "fill-opacity", 0, {});
        map.setPaintProperty("point2", "icon-opacity", 0, {});
        EventBus.$on("ChangeBorder", (curYear) => {
          if (curYear === "1949") {
            console.log("检测到变化:", curYear);
            point2.features[0].geometry.coordinates = origin;
            map.getSource("point2").setData(point2);
          }
          if (curYear === "1952") {
            curArcArray = disArray["1949-1952"];
            counter = 0;
            console.log("检测到变化:", curYear);
            this.animate(counter);
          } else if (curYear === "1955") {
            curArcArray = disArray["1952-1955"];
            point2.features[0].geometry.coordinates = pArray["1949-1952"];
            map.getSource("point2").setData(point2);
            counter = 0;
            console.log("检测到变化:", curYear);
            this.animate(counter);
          } else if (curYear === "1999") {
            curArcArray = disArray["1955-1999"];
            point2.features[0].geometry.coordinates = pArray["1952-1955"];
            map.getSource("point2").setData(point2);
            counter = 0;
            console.log("检测到变化:", curYear);
            this.animate(counter);
          } else if (curYear === "2004") {
            curArcArray = disArray["1999-2004"];
            point2.features[0].geometry.coordinates = pArray["1955-1999"];
            map.getSource("point2").setData(point2);
            counter = 0;
            console.log("检测到变化:", curYear);
            this.animate(counter);
          }
        });
        EventBus.$on("showSymbol", () => {
          map.setPaintProperty("point2", "icon-opacity", 1, {});
        });
        EventBus.$on("hideSymbol", () => {
          map.setPaintProperty("point2", "icon-opacity", 0, {});
        });
      });

      map.on("click", (e) => {
        console.log(e.lngLat);
      });
    },
    animate(counter) {
      let coords = curArcArray.map((item) => {
        return item[counter >= steps ? counter : counter + 1];
      });

      if (coords.includes(undefined) || coords.includes(null)) return;

      point2.features[0].geometry.coordinates = coords;
      map.getSource("point2").setData(point2);
      if (counter < steps) {
        requestAnimationFrame(this.animate);
      }

      counter = counter + 1;
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
      map.setPaintProperty(
        "final Europe",
        "fill-opacity",
        filterExpress,
        options
      );
    },
  },
};
</script>

<style scoped></style>
