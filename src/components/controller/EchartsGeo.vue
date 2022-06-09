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

import { getWarOption, getGlobeOption } from "../../lib/OptionSource";

let myChart = null;
let mapChart = null;
let barSeries = {};
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
    // this.setMapEvent();
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
      if (!mapChart && !myChart) {
        return;
      }
      console.log(newVal);
      let option = {
        series: { name: "curWar", show: true, data: [this.warCoord[0]] },
      };
      let viewOption = {
        globe: {
          viewControl: {
            distance: 150,
            targetCoord: this.warCoordSys(0),
          },
        },
      };
      barSeries = {};
      if (newVal == "3-6") {
        option.series.data[0] = this.warCoord[2];
        viewOption.globe.viewControl.targetCoord = this.warCoordSys(2);
        barSeries = getWarOption(this.warCoord[1][2].name, this.warCoordSys(2));
      } else if (newVal == "3-5") {
        option.series.data[0] = this.warCoord[5];
        viewOption.globe.viewControl.targetCoord = this.warCoordSys(5);
        barSeries = getWarOption(this.warCoord[5][2].name, this.warCoordSys(5));
      } else if (newVal == "3-7") {
        option.series.data[0] = this.warCoord[4];
        viewOption.globe.viewControl.targetCoord = this.warCoordSys(4);
        barSeries = getWarOption(this.warCoord[2][2].name, this.warCoordSys(4));
      } else if (newVal == "3-8") {
        option.series.data[0] = this.warCoord[3];
        viewOption.globe.viewControl.targetCoord = this.warCoordSys(3);
        barSeries = getWarOption(this.warCoord[3][2].name, this.warCoordSys(3));
      } else if (newVal == "3-9") {
        option.series.data[0] = this.warCoord[1];
        viewOption.globe.viewControl.targetCoord = this.warCoordSys(1);
        barSeries = getWarOption(this.warCoord[4][2].name, this.warCoordSys(1));
      } else if (newVal == "3-10") {
        option.series.data[0] = this.warCoord[0];
        viewOption.globe.viewControl.targetCoord = this.warCoordSys(0);
        barSeries = getWarOption(this.warCoord[4][2].name, this.warCoordSys(0));
      } else if (newVal == "3-11") {
        option.series.data = this.warCoord;
        barSeries = {};
      } else if (newVal == "3-4") {
        viewOption.globe.viewControl.targetCoord = [
          -31.309033689627796, 40.59132814151329,
        ];
        viewOption.globe.viewControl.distance = 300;
        option.series["show"] = false;
        option.series.data = [];
      }
      console.log("战争地点列表", this.warCoord);
      console.log("移动兵力显示: ", barSeries);
      mapChart.setOption(option);
      myChart.setOption({ series: [] }, { replaceMerge: ["series"] });
      myChart.setOption(viewOption);
      setTimeout(() => {
        myChart.setOption(barSeries, { replaceMerge: ["series"] });
      }, 1500);
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
    warCoordSys(index) {
      return [this.warCoord[index][0], this.warCoord[index][1]];
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
