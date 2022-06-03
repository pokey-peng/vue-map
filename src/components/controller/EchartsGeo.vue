<template>
  <div id="echarts-main-geo">
    <div id="echart-geo"></div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import axios from "axios";
import {
  getNotaAttrData,
  getNotaDataSet,
  getWarCountryData,
} from "../../lib/NotaDataSource";

import { getWarOption } from "../../lib/OptionSource";

let myChart = null;
let mapChart = null;
export default {
  name: "EchartsGeo",
  data: () => {
    return { warCoord: [] };
  },
  computed: {
    ...mapGetters("mapView", ["currentPage", "step"]),
  },
  mounted() {
    this.initEcharts();
    this.setMapEvent();
  },
  beforeDestroy() {
    if (myChart && mapChart) {
      this.$echarts.dispose(mapChart);
      this.$echarts.dispose(myChart);
      (mapChart = null), (myChart = null);
    }
  },
  watch: {
    step(newVal) {
      let option = { series: { name: "涟漪", data: [this.warCoord[0]] } };
      if (newVal == "3-6") {
        option.series.data[0] = this.warCoord[1];
      } else if (newVal == "3-5") {
        option.series.data[0] = this.warCoord[0];
      } else if (newVal == "3-7") {
        option.series.data[0] = this.warCoord[2];
      }
      mapChart.setOption(option);
    },
  },
  methods: {
    async initEcharts() {
      const response = await axios.get(
        process.env.BASE_URL + "GeoData/world.geojson"
      );
      this.$echarts.registerMap("world", response.data);
      let canvas = document.createElement("canvas");
      mapChart =
        mapChart ??
        this.$echarts.init(canvas, null, {
          width: 4096,
          height: 2048,
        });
      let dataset = getNotaAttrData();
      let data = (function () {
        let popIndex = dataset[0].indexOf("POP_EST");
        let lngIndex = dataset[0].indexOf("LABEL_X");
        let LatIndex = dataset[0].indexOf("LABEL_Y");
        return dataset[1].map((item) => {
          return [item[lngIndex], item[LatIndex], item[popIndex]];
        });
      })();

      this.warCoord = await getWarCountryData();
      let mapOption = {
        // dataset: getNotaDataSet(),
        tooltip: {
          show: true,
          showContent: true,
          enterable: true,
          formatter: function (params) {
            //console.log(params);
            return `${params.seriesName} : ${params.data[1]}`;
          },
        },
        geo: {
          id: "baseGeo",
          show: true,
          map: "world",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          //center: [0, 40],
          nameProperty: "NAME_ZH",
          label: { show: true },
          regions: [
            {
              name: "叙利亚",
              itemStyle: {
                areaColor: "#41b883",
                color: "#41b883",
              },
              opacity: 0.5,
            },
          ],
          silent: true,
          boundingCoords: [
            [-180, 90],
            [180, -90],
          ],
        },
        series: [
          {
            type: "effectScatter",
            coordinateSystem: "geo",
            name: "涟漪",
            color: "red",
            geoIndex: 0,
            data: [this.warCoord[0]],
            rippleEffect: { color: "red" },
            symbolSize: 15,
            emphasis: {
              focus: "self",
              label: {
                show: true,
                formatter: function (params) {
                  return params.data[2].name;
                },
              },
              blurScope: "series",
              itemStyle: { color: "yellow" },
            },
            zlevel: 10,
            z: 10,
            animationDurationUpdate: 1000,
          },
        ],
      };

      mapChart.setOption(mapOption);

      myChart =
        myChart ?? this.$echarts.init(document.getElementById("echart-geo"));
      // let option;
      // option && myChart.setOption(option);
      let ROOT_PATH =
        "https://fastly.jsdelivr.net/gh/apache/echarts-website@asf-site/examples";

      let option;
      option = {
        backgroundColor: "#000",
        globe: {
          //baseTexture: ROOT_PATH + "/data-gl/asset/world.topo.bathy.200401.jpg",
          baseTexture: mapChart,
          // heightTexture:
          //   ROOT_PATH + "/data-gl/asset/bathymetry_bw_composite_4k.jpg",
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
            beta: 120,
            alpha: 40,
          },
          //layers: [{ type: "overlay", name: "POP", texture: mapChart }],
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
        // tooltip: {
        //   show: true,
        //   showContent: true,
        //   enterable: true,
        //   formatter: function (params) {
        //     console.log(params);
        //     return `${params.seriesName} : ${params.data[2]}`;
        //   },
        // },
        series: [
          // {
          //   type: "bar3D",
          //   name: "人口",
          //   coordinateSystem: "globe",
          //   shading: "lambert",
          //   data: data,
          //   barSize: 1,
          //   minHeight: 0.2,
          //   silent: false,
          //   itemStyle: {
          //     color: "orange",
          //   },
          // },
        ],
      };
      console.log("地球地图配置项: ", option);

      option && myChart.setOption(option, true);
      mapChart.on("click", function (params) {
        let seriesOption = getWarOption(params.data[2].name);
        myChart.setOption(seriesOption);
      });
    },
    setMapEvent() {},
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
