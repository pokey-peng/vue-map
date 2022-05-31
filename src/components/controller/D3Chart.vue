<template>
  <div id="echart-main-d3">
    <div id="echart-d3"></div>
  </div>
</template>

<script>
import { getNotaAttrData, getNotaDataSet } from "../../lib/NotaDataSource";

let chartMy = null;
export default {
  name: "D3Chart",
  data: () => {
    return { rawData: null };
  },
  mounted() {
    this.rawData = getNotaAttrData();
    this.initChart();
    // this.$d3.select("#d3-container").style("background-color", "#efe5e0");
  },
  beforeDestroy() {
    if (chartMy) {
      console.log("消除气泡图");
      this.$echarts.dispose(chartMy);
      chartMy = null;
    }
  },
  methods: {
    initChart() {
      let option = {
        dataset: {},
        grid: { bottom: "40%" },
        xAxis: {
          type: "category",
          axisLine: { show: false },
          axisTick: { show: false, alignWithLabel: true },
          axisLabel: { interval: 0, rotate: 45 },
        },
        yAxis: {
          show: false,
          type: "value",
          min: 0,
          max: 5,
          axisLine: { show: false },
        },
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
            labelLayout: {
              y: "20%",
              moveOverlap: "shiftX",
              draggable: true,
            },
            labelLine: {
              show: true,
              length2: 5,
              lineStyle: {
                color: "#bbb",
              },
            },
            label: {
              show: true,
              formatter: function (params) {
                //console.log(params.data[2]);
                return `{${params.data[2]}|   }`;
              },

              position: "top",
              align: "center",
              verticalAlign: "middle",
              minMargin: 2,
              rich: {
                USA: {
                  backgroundColor: { image: "/icon/USA.png" },
                  width: 20,
                  height: 20,
                },
                DEU: {
                  backgroundColor: { image: "/icon/GER.png" },
                  width: 20,
                  height: 20,
                },
              },
            },
          },
        ],
      };
      option.dataset = getNotaDataSet();
      console.log("真正源数据", option.dataset);
      option.dataset.dimensions.push("yCoord");
      option.dataset.source.forEach((item) => {
        item.push(0.8);
      });
      console.log("气泡图配置项：", option);
      console.log("分割线");
      chartMy =
        chartMy ?? this.$echarts.init(document.getElementById("echart-d3"));

      option && chartMy.setOption(option);
      window.addEventListener("resize", chartMy.resize());
    },
  },
};
</script>

<style scoped>
#echart-main-d3 {
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  background-color: #efe5e0;
}

#echart-d3 {
  width: 100%;
  height: 100%;
}
</style>
