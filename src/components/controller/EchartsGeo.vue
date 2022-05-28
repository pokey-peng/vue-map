<template>
  <div id="echarts-main-geo">
    <div id="echart-geo"></div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

let myChart;
export default {
  name: "EchartsGeo",
  data: () => {
    return {};
  },
  computed: {
    ...mapGetters("mapView", ["currentPage", "step"]),
  },
  mounted() {
    this.initEcharts();
  },
  beforeDestroy() {
    if (myChart) {
      this.$echarts.dispose(myChart);
    }
  },
  methods: {
    initEcharts() {
      myChart = this.$echarts.init(document.getElementById("echart-geo"));
      // let option;
      // option && myChart.setOption(option);
      let ROOT_PATH =
        "https://fastly.jsdelivr.net/gh/apache/echarts-website@asf-site/examples";
      let option;

      option = {
        backgroundColor: "#000",
        globe: {
          baseTexture: ROOT_PATH + "/data-gl/asset/world.topo.bathy.200401.jpg",
          heightTexture:
            ROOT_PATH + "/data-gl/asset/world.topo.bathy.200401.jpg",
          displacementScale: 0.04,
          shading: "realistic",
          environment: ROOT_PATH + "/data-gl/asset/starfield.jpg",
          realisticMaterial: {
            roughness: 0.9,
          },
          postEffect: {
            enable: true,
          },
          light: {
            main: {
              intensity: 5,
              shadow: true,
            },
            ambientCubemap: {
              texture: ROOT_PATH + "/data-gl/asset/pisa.hdr",
              diffuseIntensity: 0.2,
            },
          },
        },
      };

      option && myChart.setOption(option);
    },
  },
};
</script>
<style scoped>
#echarts-main-geo {
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
}
#echart-geo {
  width: 100%;
  height: 100%;
}
</style>
