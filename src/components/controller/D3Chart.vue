<template>
  <div id="d3-container">
    <div id="echart-d3-container"></div>
  </div>
</template>

<script>
import { getNotaAttrData, getNotaDataSet } from "../../lib/NotaDataSource";

let chartMy;
export default {
  name: "D3Chart",
  data: () => {
    return { rawData: null };
  },
  mounted() {
    this.rawData = getNotaAttrData();
    this.initChart();
    this.$d3.select("#d3-container").style("background-color", "#efe5e0");
  },
  beforeDestroy() {
    if (chartMy) {
      this.$echarts.dispose(chartMy);
    }
  },
  methods: {
    initChart() {
      const option = {
        dataset: {},
        xAxis: {
          type: "category",
          axisLine: { show: false },
          axisTick: { alignWithLabel: true },
          axisLabel: { interval: 0, rotate: 45 },
        },
        yAxis: { type: "value", min: 0, max: 5, axisLine: { show: true } },
        visualMap: [
          {
            show: true,
            left: "right",
            bottom: "5%",
            dimension: 7, // 指向第三列（列序号从 0 开始记，所以设置为 2）。
            min: 5500, // 需要给出数值范围，最小数值。
            max: 22000000, // 需要给出数值范围，最大数值。
            itemWidth: 30,
            itemHeight: 120,
            calculable: true,
            precision: 0.1,
            text: ["GDP高低"],
            textGap: 30,
            inRange: {
              symbolSize: [10, 100],
              color: ["#1a237e", "#33691e", "#b71c1c"],
            },
          },
        ],
        series: [
          {
            type: "scatter",
            name: "NOTA_Pao",
            encode: { x: "NAME_ZH", y: "yCoord" },
          },
        ],
      };
      option.dataset = getNotaDataSet();
      option.dataset.dimensions.push("yCoord");
      option.dataset.source.forEach((item) => {
        item.push(2);
      });
      console.log("气泡图配置项：", option);
      chartMy = this.$echarts.init(
        document.getElementById("echart-d3-container")
      );
      chartMy.setOption(option);
    },
  },
};
</script>

<style scoped>
#d3-container {
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  background-color: red;
}

#echart-d3-container {
  width: 100%;
  height: 100%;
}
</style>
