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
} from "../../lib/OptionSource";

let myChart = null;
let mapChart = null;
let jureChart = null;
let barSeries = {};
export default {
  name: "EchartsGeo",
  data: () => {
    return { warCoord: [], jureShow: false };
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
      this.setJureChart(newVal, this.warIndexs(newVal));
      this.setWarOption(this.warIndexs(newVal));
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
        console.log("地球组件配置: ", seriesOption);
        myChart.setOption(seriesOption, { replaceMerge: ["series"] });
      });
    },
    initJureEcharts() {
      jureChart =
        jureChart ?? this.$echarts.init(document.getElementById("echart-jure"));
      jureChart.setOption(getJureInitOption());
    },
    setJureChart(step, indexs) {
      if (step === "4-1") {
        this.jureShow = true;
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
        series: { name: "curWar", show: true, data: [] },
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
        option.series["show"] = false;
      } else {
        indexs.forEach((item) => {
          option.series.data.push(this.warCoord[item]);
        });
        viewOption.globe.viewControl.targetCoord = this.warCoordSys(indexs[0]);
        barSeries =
          indexs.length > 1
            ? {}
            : getWarOption(
                this.warCoord[indexs[0]][2].name,
                this.warCoordSys(indexs[0])
              );
      }
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
  top: 1rem;
  right: 1rem;
  width: 16rem;
  height: 15rem;
  padding-left: 10px;
  padding-right: 10px;
  background-color: antiquewhite;
}
</style>
