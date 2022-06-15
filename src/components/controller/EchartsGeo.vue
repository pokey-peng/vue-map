<template>
  <div id="echarts-main-geo">
    <div id="echart-geo"></div>
    <transition
      name="bounce"
      enter-active-class="animate__animated animate__bounceInRight"
      leave-active-class="animate__animated animate__bounceOutRight"
      ><div id="echart-jure" v-show="jureShow"></div
    ></transition>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import axios from "axios";
import "animate.css";
import {
  getNotaAttrData,
  getNotaDataSet,
  getWarCountryData,
} from "../../lib/NotaDataSource";

import {
  getWarOption,
  getGlobeOption,
  getJureInitOption,
  getJureUpdateOption,
  getBaseMapNATO,
  getSymbolWar,
} from "../../lib/OptionSource";

let myChart = null;
let mapChart = null;
let jureChart = null;
let barSeries = {};
export default {
  name: "EchartsGeo",
  data: () => {
    return { warCoord: [], jureShow: false, natoShow: false };
  },
  computed: {
    ...mapGetters("mapView", ["currentPage", "step"]),
    ...mapGetters("warState", ["warIndexs"]),
  },
  mounted() {
    this.initEcharts();
    // this.setMapEvent();
  },
  beforeDestroy() {
    if (myChart && mapChart && jureChart) {
      this.$echarts.dispose(mapChart);
      this.$echarts.dispose(myChart);
      this.$echarts.dispose(jureChart);
      (mapChart = null), (myChart = null), (jureChart = null);
    }
  },
  watch: {
    step(newVal) {
      if (!mapChart && !myChart) {
        return;
      }

      console.log(newVal);
      //console.log(getBaseMapNATO());
      this.setJureChart(newVal, this.warIndexs(newVal));
      this.setWarOption(this.warIndexs(newVal));
      if (newVal === "4-0") {
        if (!this.natoShow) {
          mapChart.setOption({
            geo: { id: "baseGeo", regions: getBaseMapNATO() },
          });
          this.natoShow = true;
        }
      }
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

      this.warCoord = await getWarCountryData();

      mapChart.setOption(getGlobeOption("map", []));

      myChart =
        myChart ?? this.$echarts.init(document.getElementById("echart-geo"));

      myChart.setOption(getGlobeOption("globe", mapChart));
      //console.log(getGlobeOption("globe", mapChart));
      mapChart.on("click", function (params) {
        let seriesOption = getWarOption(
          params.data[2].name,
          [params.data[0], params.data[1]],
          true
        );
        let option = {
          geo: { id: "baseGeo", regions: [] },
          series: [
            {
              name: "symbolWar",
              type: "scatter",
              coordinateSystem: "geo",
              symbol: "arrow",
              itemStyle: { color: "#2a308b" },
              data: [],
            },
          ],
        };
        console.log("地球组件配置: ", seriesOption);
        let [warSymbolData, labelData] = getSymbolWar(
          params.data[2].name,
          true
        );
        option.series[0].data = warSymbolData;
        option.geo.regions = labelData;
        mapChart.setOption(option);
        myChart.setOption(seriesOption, { replaceMerge: ["series"] });
        jureChart.setOption(getJureUpdateOption(params.data[2].name, false));
      });
    },
    initJureEcharts() {
      jureChart =
        jureChart ?? this.$echarts.init(document.getElementById("echart-jure"));
      jureChart.setOption(getJureInitOption());
    },
    setJureChart(step, indexs) {
      if (step === "4-1" || step == "4-7") {
        if (!this.jureShow) {
          this.jureShow = true;
        }
        this.initJureEcharts();
      } else if (step === "4-8" || step === "4-0") {
        this.jureShow = false;
      } else {
        if (this.jureShow) {
          let name =
            indexs.length === 1
              ? this.warCoord[indexs[0]][2].name
              : this.warCoord[0][2].name;
          jureChart.setOption(getJureUpdateOption(name));
        }
      }
    },
    warCoordSys(index) {
      return [this.warCoord[index][0], this.warCoord[index][1]];
    },
    setWarOption(indexs) {
      let option = {
        geo: { id: "baseGeo", regions: [] },
        series: [
          { name: "curWar", show: true, data: [] },
          {
            name: "symbolWar",
            type: "scatter",
            coordinateSystem: "geo",
            symbol: "arrow",
            itemStyle: { color: "#2a308b" },
            data: [],
          },
        ],
      };
      let viewOption = {
        globe: {
          viewControl: {
            distance: 150,
            targetCoord: [-31.309033689627796, 40.59132814151329],
          },
        },
      };
      barSeries = {};
      if (indexs === null || indexs === undefined) {
        viewOption.globe.viewControl.distance = 300;
        option.series[0]["show"] = false;
      } else {
        indexs.forEach((item) => {
          option.series[0].data.push(this.warCoord[item]);
          let [warSymbolData, labelData] = getSymbolWar(
            this.warCoord[item][2].name,
            true
          );
          option.series[1].data = warSymbolData;
          option.geo.regions = labelData;
        });
        if (indexs.length !== 1) {
          option.series[1].data = [];
          let dOption = ["阿富汗", "伊拉克", "叙利亚", "科索沃", "利比亚"].map(
            (item) => {
              return {
                name: item,
                label: {
                  show: true,
                  offset: [20, 20],
                  color: "#a90000",
                  fontFamily: "Microsoft YaHei",
                  fontSize: 15,
                },
              };
            }
          );
          option.geo.regions = dOption;
        }
        viewOption.globe.viewControl.targetCoord = this.warCoordSys(indexs[0]);
        barSeries =
          indexs.length > 1
            ? {}
            : getWarOption(
                this.warCoord[indexs[0]][2].name,
                this.warCoordSys(indexs[0])
              );
      }
      console.log("symbolOption:", option);
      mapChart.setOption(option);
      myChart.setOption({ series: [] }, { replaceMerge: ["series"] });
      myChart.setOption(viewOption);
      setTimeout(() => {
        myChart.setOption(barSeries, { replaceMerge: ["series"] });
      }, 1500);
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

#echart-jure {
  position: absolute;
  top: 2%;
  right: 1%;
  width: 25vh;
  height: 28vh;
  /* padding-left: 10px;
  padding-right: 10px; */
  padding: 0;
  background-color: rgba(250, 235, 215);
}
</style>
