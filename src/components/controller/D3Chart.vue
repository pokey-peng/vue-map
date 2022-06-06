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
        timeline: {
          bottom: "10%",
          playInterval: 1000, // 播放速度
          data: ["1950", "1960", "1970", "1980", "1990", "2000"],
        },
        title: {
          text: "北约各国军费军力变化",
          subtext: "1950年数据",
          top: "2%",
          textAlign: "center",
          right: "40%",
          textVerticalAlign: "middle",
        },
        grid: { top: "16%", bottom: "30%" },
        xAxis: [
          {
            type: "category",
            axisLine: { show: false },
            axisTick: { show: false, alignWithLabel: true },
            axisLabel: { interval: 0, rotate: 45 },
          },
          {
            type: "category",
            axisLine: { show: false },
            axisTick: { show: false, alignWithLabel: true },
            axisLabel: { interval: 0, rotate: 45 },
          },
        ],
        yAxis: {
          show: false,
          type: "value",
          min: 0,
          max: 5,
          axisLine: { show: false },
        },
        tooltip: {},
        // 基本配置去掉dimension,由options数组设置每一时期映射的维度
        visualMap: [
          {
            id: "GDP_V",
            show: true,
            left: "right",
            bottom: "5%",
            //dimension: 7, // 指向第三列（列序号从 0 开始记，所以设置为 2）。
            min: 0, // 需要给出数值范围，最小数值。
            max: 300, // 需要给出数值范围，最大数值。
            seriesIndex: 0,
            itemWidth: 30,
            itemHeight: 120,
            calculable: true,
            precision: 0.1,
            text: ["GDP高低"],
            textGap: 30,
            inRange: {
              symbolSize: [10, 100],
              // color: ["#1a237e", "#33691e", "#b71c1c"],
            },
          },
          {
            id: "POP_V",
            show: false,
            // dimension: 30,
            min: 0,
            max: 300,
            seriesIndex: 1,
            inRange: {
              symbolSize: [10, 100],
              // color: ["#1a237e", "#33691e", "#b71c1c"],
            },
          },
        ],
        legend: {
          top: "40%",
          right: "1%",
          formatter: function (name) {
            return name == "NOTA_Pao" ? "经济" : "人口";
          },
          orient: "vertical",
          data: ["NOTA_Pao", "NOTA_POP"],
        },
        series: [
          {
            type: "scatter",
            name: "NOTA_Pao",
            xAxisIndex: 0,
            encode: { x: "NAME_ZH", y: "yCoord" },
            emphasis: {
              focus: "series",
            },
            labelLayout: {
              y: "40%",
              //moveOverlap: "shiftX",
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
                  backgroundColor: {
                    image: process.env.BASE_URL + "icon/USA.png",
                  },
                  width: 20,
                  height: 20,
                },
                DEU: {
                  backgroundColor: {
                    image: process.env.BASE_URL + "icon/GER.png",
                  },
                  width: 20,
                  height: 20,
                },
              },
            },
          },
          {
            type: "scatter",
            xAxisIndex: 1,
            name: "NOTA_POP",
            encode: { x: "NAME_ZH", y: "yCoord2" },
            emphasis: {
              focus: "series",
            },
            labelLine: {
              show: true,
              length2: 5,
              lineStyle: {
                color: "#bbb",
              },
            },
            labelLayout: {
              y: "40%",
              moveOverlap: "shiftX",
              draggable: true,
            },
            label: {
              show: true,
              formatter: function (params) {
                //console.log(params.data[2]);
                return "  ";
              },

              position: "top",
              align: "center",
              verticalAlign: "middle",
            },
          },
        ],
        // 设置每一时期映射的维度
        options: [
          {
            title: { subtext: "1950年数据" },
            visualMap: [
              { id: "GDP_V", dimension: "1950" },
              { id: "POP_V", dimension: "1960" },
            ],
            series: [
              { name: "NOTA_Pao", encode: { tooltip: ["NAME_ZH", "1950"] } },
              { name: "NOTA_POP", encode: { tooltip: ["NAME_ZH", "1960"] } },
            ],
          },
          {
            title: { subtext: "1960年数据" },
            visualMap: [
              { id: "GDP_V", dimension: "1960" },
              { id: "POP_V", dimension: "1970" },
            ],
            series: [
              { name: "NOTA_Pao", encode: { tooltip: ["NAME_ZH", "1960"] } },
              { name: "NOTA_POP", encode: { tooltip: ["NAME_ZH", "1970"] } },
            ],
          },
          {
            title: { subtext: "1970年数据" },
            visualMap: [
              { id: "GDP_V", dimension: "1970" },
              { id: "POP_V", dimension: "1980" },
            ],
            series: [
              { name: "NOTA_Pao", encode: { tooltip: ["NAME_ZH", "1970"] } },
              { name: "NOTA_POP", encode: { tooltip: ["NAME_ZH", "1980"] } },
            ],
          },
          {
            title: { subtext: "1980年数据" },
            visualMap: [
              { id: "GDP_V", dimension: "1980" },
              { id: "POP_V", dimension: "1990" },
            ],
            series: [
              { name: "NOTA_Pao", encode: { tooltip: ["NAME_ZH", "1980"] } },
              { name: "NOTA_POP", encode: { tooltip: ["NAME_ZH", "1990"] } },
            ],
          },
          {
            title: { subtext: "1990年数据" },
            visualMap: [
              { id: "GDP_V", dimension: "1990" },
              { id: "POP_V", dimension: "2000" },
            ],
            series: [
              { name: "NOTA_Pao", encode: { tooltip: ["NAME_ZH", "1990"] } },
              { name: "NOTA_POP", encode: { tooltip: ["NAME_ZH", "2000"] } },
            ],
          },
          {
            title: { subtext: "2000年数据" },
            visualMap: [
              { id: "GDP_V", dimension: "2000" },
              { id: "POP_V", dimension: "1950" },
            ],
            series: [
              { name: "NOTA_Pao", encode: { tooltip: ["NAME_ZH", "2000"] } },
              { name: "NOTA_POP", encode: { tooltip: ["NAME_ZH", "1950"] } },
            ],
          },
        ],
      };
      option.dataset = getNotaDataSet();
      console.log("真正源数据", option.dataset);
      option.dataset.dimensions.push("yCoord");
      option.dataset.dimensions.push("yCoord2");
      option.dataset.dimensions.push("1950");
      option.dataset.dimensions.push("1960");
      option.dataset.dimensions.push("1970");
      option.dataset.dimensions.push("1980");
      option.dataset.dimensions.push("1990");
      option.dataset.dimensions.push("2000");
      option.dataset.source.forEach((item, index) => {
        let index2 = index + 1;
        item.push(0.8);
        item.push(4.6);
        item.push(Math.random() * (index2 * 10 - index * 10 + 1) + index * 10);
        item.push(Math.random() * (index2 * 10 - index * 10 + 1) + index * 10);
        item.push(Math.random() * (index2 * 10 - index * 10 + 1) + index * 10);
        item.push(Math.random() * (index2 * 10 - index * 10 + 1) + index * 10);
        item.push(Math.random() * (index2 * 10 - index * 10 + 1) + index * 10);
        item.push(Math.random() * (index2 * 10 - index * 10 + 1) + index * 10);
      });
      console.log("气泡图配置项：", option);
      console.log("分割线****************************");
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
