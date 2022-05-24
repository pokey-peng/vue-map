<template>
  <div id="echarts-main">
    <div id="echart"></div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import { getInitBarOption } from "../../lib/OptionSource";

let myChart;
export default {
  name: "EchartsBar",
  data: () => {
    return {};
  },
  mounted() {
    this.initEcharts();
  },
  computed: {
    ...mapGetters("mapView", ["currentPage", "step"]),
  },
  methods: {
    initEcharts() {
      myChart = this.$echarts.init(document.getElementById("echart"));
      let option = getInitBarOption();
      console.log(option);
      /*setTimeout(function () {
      //   option = {
      //     legend: {},
      //     tooltip: {
      //       trigger: "axis",
      //       showContent: false,
      //     },
      //     dataset: {
      //       source: [
      //         ["product", "2012", "2013", "2014", "2015", "2016", "2017"],
      //         ["Milk Tea", 56.5, 82.1, 88.7, 70.1, 53.4, 85.1],
      //         ["Matcha Latte", 51.1, 51.4, 55.1, 53.3, 73.8, 68.7],
      //         ["Cheese Cocoa", 40.1, 62.2, 69.5, 36.4, 45.2, 32.5],
      //         ["Walnut Brownie", 25.2, 37.1, 41.2, 18, 33.9, 49.1],
      //       ],
      //     },
      //     xAxis: { type: "category" },
      //     yAxis: { gridIndex: 0 },
      //     grid: { top: "55%" },
      //     series: [
      //       {
      //         type: "line",
      //         smooth: true,
      //         seriesLayoutBy: "row",
      //         emphasis: { focus: "series" },
      //       },
      //       {
      //         type: "line",
      //         smooth: true,
      //         seriesLayoutBy: "row",
      //         emphasis: { focus: "series" },
      //       },
      //       {
      //         type: "line",
      //         smooth: true,
      //         seriesLayoutBy: "row",
      //         emphasis: { focus: "series" },
      //       },
      //       {
      //         type: "line",
      //         smooth: true,
      //         seriesLayoutBy: "row",
      //         emphasis: { focus: "series" },
      //       },
      //       {
      //         type: "pie",
      //         id: "pie",
      //         radius: "30%",
      //         center: ["50%", "25%"],
      //         emphasis: {
      //           focus: "self",
      //         },
      //         label: {
      //           formatter: "{b}: {@2012} ({d}%)",
      //         },
      //         encode: {
      //           itemName: "product",
      //           value: "2012",
      //           tooltip: "2012",
      //         },
      //       },
      //     ],
      //   };
      // myChart.on("updateAxisPointer", function (event) {
      //   const xAxisInfo = event.axesInfo[0];
      //   if (xAxisInfo) {
      //     const dimension = xAxisInfo.value + 1;
      //     myChart.setOption({
      //       series: {
      //         id: "pie",
      //         label: {
      //           formatter: "{b}: {@[" + dimension + "]} ({d}%)",
      //         },
      //         encode: {
      //           value: dimension,
      //           tooltip: dimension,
      //         },
      //       },
      //     });
      //   }
      // });*/
      myChart.setOption(option);

      option && myChart.setOption(option);
      window.addEventListener("resize", myChart.resize());
    },
  },
};
</script>
<style scoped>
#echarts-main {
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
}
#echart {
  width: 100%;
  height: 100%;
}
</style>
