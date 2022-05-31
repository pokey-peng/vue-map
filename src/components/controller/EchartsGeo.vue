<template>
  <div id="echarts-main-geo">
    <div id="echart-geo"></div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import axios from "axios";
import { getNotaAttrData, getNotaDataSet } from "../../lib/NotaDataSource";

let myChart;
let mapChart;
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
    if (myChart && mapChart) {
      this.$echarts.dispose(mapChart);
      this.$echarts.dispose(myChart);
    }
  },
  methods: {
    async initEcharts() {
      const response = await axios.get("/GeoData/world.geojson");
      this.$echarts.registerMap("world", response.data);
      let canvas = document.createElement("canvas");
      mapChart = this.$echarts.init(canvas, null, {
        width: 4096,
        height: 2048,
      });
      let mapOption = {
        // dataset: getNotaDataSet(),
        series: [
          {
            type: "map",
            map: "world",
            // 绘制完整尺寸的 echarts 实例
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            silent: true,
            boundingCoords: [
              [-180, 90],
              [180, -90],
            ],
          },
        ],
      };

      mapChart.setOption(mapOption);
      myChart = this.$echarts.init(document.getElementById("echart-geo"));
      // let option;
      // option && myChart.setOption(option);
      let ROOT_PATH =
        "https://fastly.jsdelivr.net/gh/apache/echarts-website@asf-site/examples";
      let dataset = getNotaAttrData();
      let data = (function () {
        let popIndex = dataset[0].indexOf("POP_EST");
        //let nameIndex = dataset[0].indexOf("NAME");
        let lngIndex = dataset[0].indexOf("LABEL_X");
        let LatIndex = dataset[0].indexOf("LABEL_Y");
        return dataset[1].map((item) => {
          return [item[lngIndex], item[LatIndex], item[popIndex]];
        });
      })();
      let option;
      option = {
        backgroundColor: "#000",
        globe: {
          // baseTexture: ROOT_PATH + "/data-gl/asset/world.topo.bathy.200401.jpg",
          baseTexture: mapChart,
          heightTexture:
            ROOT_PATH + "/data-gl/asset/bathymetry_bw_composite_4k.jpg",
          displacementScale: 0.04,
          shading: "lambert",
          environment: ROOT_PATH + "/data-gl/asset/starfield.jpg",
          // realisticMaterial: {
          //   roughness: 0.9,
          // },
          // postEffect: {
          //   enable: true,
          // },
          // lambertMaterial: {
          //   detailTexture:
          //     ROOT_PATH + "/data-gl/asset/world.topo.bathy.200401.jpg",
          //   //textureTiling: 1,
          // },
          light: {
            // main: {
            //   intensity: 5,
            //   shadow: true,
            // },
            // ambientCubemap: {
            //   texture: ROOT_PATH + "/data-gl/asset/pisa.hdr",
            //   diffuseIntensity: 0.2,
            // },
            ambient: {
              intensity: 0.4,
            },
            main: {
              intensity: 0.4,
            },
          },
          viewControl: {
            autoRotate: false,
          },
        },
        visualMap: {
          max: 332000000,
          min: 400000,
          calculable: true,
          realtime: false,
          inRange: {
            color: [
              "#313695",
              "#4575b4",
              "#74add1",
              "#abd9e9",
              "#e0f3f8",
              "#ffffbf",
              "#fee090",
              "#fdae61",
              "#f46d43",
              "#d73027",
              "#a50026",
            ],
          },
          outOfRange: {
            colorAlpha: 0,
          },
        },
        series: [
          {
            type: "bar3D",
            coordinateSystem: "globe",
            shading: "lambert",
            data: data,
            barSize: 1,
            minHeight: 0.2,
            silent: false,
            itemStyle: {
              color: "orange",
            },
          },
        ],
      };
      console.log("地球地图配置项: ", option);

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
