<template>
  <div id="echarts-main-geo">
    <div id="echart-geo"></div>
  </div>
</template>
<script>
import {
  DatasetComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
} from "echarts/components";
import { LineChart, PieChart } from "echarts/charts";
import { UniversalTransition, LabelLayout } from "echarts/features";
import { CanvasRenderer } from "echarts/renderers";
import { mapGetters } from "vuex";

let myChart;
export default {
  name: "EchartsGeo",
  data: () => {
    return {};
  },
  mounted() {
    this.initEcharts();
  },
  methods: {
    initEcharts() {
      this.$echarts.use([
        DatasetComponent,
        TooltipComponent,
        GridComponent,
        LegendComponent,
        LineChart,
        PieChart,
        CanvasRenderer,
        UniversalTransition,
        LabelLayout,
      ]);
      myChart = this.$echarts.init(
        document.getElementById("echart-geo"),
        "dark"
      );
      let option;

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
