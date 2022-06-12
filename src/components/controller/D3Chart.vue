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
        color: ["#f2ba28", "#d44646"],
        dataset: {},
        timeline: {
          bottom: "10%",
          playInterval: 1000, // 播放速度
          replaceMerge: "xAxis",
          data: ["1982", "1999", "2004", "2009", "2017", "2020"],
        },
        title: {
          text: "北约各国军费军力变化",
          subtext: "1982年数据",
          top: "2%",
          textAlign: "center",
          right: "40%",
          textVerticalAlign: "middle",
        },
        grid: { top: "16%", bottom: "30%", right: "10%", left: "3%" },
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
            axisLabel: { show: true, interval: 0, rotate: 45 },
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
            id: "军费",
            type: "piecewise",
            show: true,
            left: "right",
            bottom: "65%",
            seriesIndex: 0,

            pieces: [
              { min: 0, max: 0.57, label: "0-0.57", symbolSize: 10 },
              { min: 0.57, max: 1.7, label: "0.57-1.7", symbolSize: 35 },
              { min: 1.7, max: 2.92, label: "1.7-2.92", symbolSize: 50 },
              {
                min: 2.92,
                max: 6.18,
                label: "2.92-6.18",
                symbolSize: 70,
              },
              { min: 6.18, max: 12, label: "6.18-12", symbolSize: 100 },
            ],
            inRange: {
              color: "#d44646",
              symbolSize: [10, 35, 50, 70, 100],
            },
            outOfRange: {
              symbolSize: 5,
              color: "#6b6e76",
            },
          },
          {
            id: "军力",
            show: true,
            left: "right",
            bottom: "40%",
            // dimension: 30,
            // min: 0,
            // max: 12,
            seriesIndex: 1,
            pieces: [
              { min: 0, max: 4.24, label: "0-4.24", symbolSize: 10 },
              { min: 4.24, max: 26.8, label: "4.24-26.8", symbolSize: 35 },
              { min: 26.8, max: 147.9, label: "26.8-147.9", symbolSize: 50 },
              {
                min: 147.9,
                max: 797,
                label: "147.9-797",
                symbolSize: 70,
              },
              { min: 797, max: 2400, label: "797-2400", symbolSize: 100 },
            ],
            inRange: {
              color: "#f2ba28",
              symbolSize: [10, 35, 50, 70, 100],
            },
            outOfRange: {
              symbolSize: 5,
              color: "#6b6e76",
            },
          },
        ],
        legend: {
          top: "40%",
          right: "1%",
          formatter: function (name) {
            return name == "军费" ? "军费(%)" : "军力(千人)";
          },
          orient: "vertical",
          data: ["军费", "军力"],
        },
        series: [
          {
            type: "scatter",
            name: "军费",
            //xAxisIndex: 0,
            //encode: { x: "NAME_ZH", y: "yCoord1" },
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
                return `{${params.data[1]}|   }`;
              },

              position: "top",
              align: "center",
              verticalAlign: "middle",
              minMargin: 2,
              rich: {
                Albania: {
                  backgroundColor: {
                    image: process.env.BASE_URL + "icon/Albania.png",
                  },
                  width: 20,
                  height: 20,
                },
                Belgium: {
                  backgroundColor: {
                    image: process.env.BASE_URL + "icon/Belgium.png",
                  },
                  width: 20,
                  height: 20,
                },
                Bulgaria: {
                  backgroundColor: {
                    image: process.env.BASE_URL + "icon/Bulgaria.png",
                  },
                  width: 20,
                  height: 20,
                },
                Canada: {
                  backgroundColor: {
                    image: process.env.BASE_URL + "icon/Canada.png",
                  },
                  width: 20,
                  height: 20,
                },
                Croatia: {
                  backgroundColor: {
                    image: process.env.BASE_URL + "icon/Croatia.png",
                  },
                  width: 20,
                  height: 20,
                },
                CzechRepublic: {
                  backgroundColor: {
                    image: process.env.BASE_URL + "icon/CzechRepublic.png",
                  },
                  width: 20,
                  height: 20,
                },
                Denmark: {
                  backgroundColor: {
                    image: process.env.BASE_URL + "icon/Denmark.png",
                  },
                  width: 20,
                  height: 20,
                },
                Estonia: {
                  backgroundColor: {
                    image: process.env.BASE_URL + "icon/Estonia.png",
                  },
                  width: 20,
                  height: 20,
                },
                France: {
                  backgroundColor: {
                    image: process.env.BASE_URL + "icon/France.png",
                  },
                  width: 20,
                  height: 20,
                },
                Germany: {
                  backgroundColor: {
                    image: process.env.BASE_URL + "icon/Germany.png",
                  },
                  width: 20,
                  height: 20,
                },
                Greece: {
                  backgroundColor: {
                    image: process.env.BASE_URL + "icon/Greece.png",
                  },
                  width: 20,
                  height: 20,
                },
                Hungary: {
                  backgroundColor: {
                    image: process.env.BASE_URL + "icon/Hungary.png",
                  },
                  width: 20,
                  height: 20,
                },
                Italy: {
                  backgroundColor: {
                    image: process.env.BASE_URL + "icon/Italy.png",
                  },
                  width: 20,
                  height: 20,
                },
                Latvia: {
                  backgroundColor: {
                    image: process.env.BASE_URL + "icon/Latvia.png",
                  },
                  width: 20,
                  height: 20,
                },
                Lithuania: {
                  backgroundColor: {
                    image: process.env.BASE_URL + "icon/Lithuania.png",
                  },
                  width: 20,
                  height: 20,
                },
                Luxembourg: {
                  backgroundColor: {
                    image: process.env.BASE_URL + "icon/Luxembourg.png",
                  },
                  width: 20,
                  height: 20,
                },
                Montenegro: {
                  backgroundColor: {
                    image: process.env.BASE_URL + "icon/Montenegro.png",
                  },
                  width: 20,
                  height: 20,
                },
                Netherlands: {
                  backgroundColor: {
                    image: process.env.BASE_URL + "icon/Netherlands.png",
                  },
                  width: 20,
                  height: 20,
                },
                NorthMacedonia: {
                  backgroundColor: {
                    image: process.env.BASE_URL + "icon/NorthMacedonia.png",
                  },
                  width: 20,
                  height: 20,
                },
                Norway: {
                  backgroundColor: {
                    image: process.env.BASE_URL + "icon/Norway.png",
                  },
                  width: 20,
                  height: 20,
                },
                Poland: {
                  backgroundColor: {
                    image: process.env.BASE_URL + "icon/Poland.png",
                  },
                  width: 20,
                  height: 20,
                },
                Portugal: {
                  backgroundColor: {
                    image: process.env.BASE_URL + "icon/Portugal.png",
                  },
                  width: 20,
                  height: 20,
                },
                Romania: {
                  backgroundColor: {
                    image: process.env.BASE_URL + "icon/Romania.png",
                  },
                  width: 20,
                  height: 20,
                },
                SlovakRepublic: {
                  backgroundColor: {
                    image: process.env.BASE_URL + "icon/SlovakRepublic.png",
                  },
                  width: 20,
                  height: 20,
                },
                Slovenia: {
                  backgroundColor: {
                    image: process.env.BASE_URL + "icon/Slovenia.png",
                  },
                  width: 20,
                  height: 20,
                },
                Spain: {
                  backgroundColor: {
                    image: process.env.BASE_URL + "icon/Spain.png",
                  },
                  width: 20,
                  height: 20,
                },
                Turkey: {
                  backgroundColor: {
                    image: process.env.BASE_URL + "icon/Turkey.png",
                  },
                  width: 20,
                  height: 20,
                },
                UnitedKingdom: {
                  backgroundColor: {
                    image: process.env.BASE_URL + "icon/UnitedKingdom.png",
                  },
                  width: 20,
                  height: 20,
                },
                UnitedStates: {
                  backgroundColor: {
                    image: process.env.BASE_URL + "icon/UnitedStates.png",
                  },
                  width: 20,
                  height: 20,
                },
              },
            },
          },
          {
            type: "scatter",
            //xAxisIndex: 1,
            name: "军力",
            //encode: { x: "NAME_ZH", y: "yCoord2" },
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
            title: { subtext: "1982年数据" },
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
                axisLabel: { show: false, interval: 0, rotate: 45 },
              },
            ],
            visualMap: [
              { id: "军费", dimension: "1982军费" },
              { id: "军力", dimension: "1982军力" },
            ],
            series: [
              {
                name: "军费",
                datasetIndex: 1,
                xAxisIndex: 0,
                encode: { x: "NAME_ZH", y: "yCoord1", tooltip: ["1982军费"] },
              },
              {
                datasetIndex: 1,
                name: "军力",
                xAxisIndex: 1,
                encode: { x: "NAME_ZH", y: "yCoord2", tooltip: ["1982军力"] },
              },
            ],
          },
          {
            title: { subtext: "1999年数据" },
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
                axisLabel: { show: false, interval: 0, rotate: 45 },
              },
            ],
            visualMap: [
              { id: "军费", dimension: "1999军费" },
              { id: "军力", dimension: "1999军力" },
            ],
            series: [
              {
                name: "军费",
                datasetIndex: 2,
                xAxisIndex: 0,
                encode: { x: "NAME_ZH", y: "yCoord1", tooltip: ["1999军费"] },
              },
              {
                name: "军力",
                datasetIndex: 2,
                xAxisIndex: 1,
                encode: { x: "NAME_ZH", y: "yCoord2", tooltip: ["1999军力"] },
              },
            ],
          },
          {
            title: { subtext: "2004年数据" },
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
                axisLabel: { show: false, interval: 0, rotate: 45 },
              },
            ],
            visualMap: [
              { id: "军费", dimension: "2004军费" },
              { id: "军力", dimension: "2004军力" },
            ],
            series: [
              {
                name: "军费",
                datasetIndex: 3,
                xAxisIndex: 0,
                encode: { x: "NAME_ZH", y: "yCoord1", tooltip: ["2004军费"] },
              },
              {
                name: "军力",
                datasetIndex: 3,
                xAxisIndex: 1,
                encode: { x: "NAME_ZH", y: "yCoord2", tooltip: ["2004军力"] },
              },
            ],
          },
          {
            title: { subtext: "2009年数据" },
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
                axisLabel: { show: false, interval: 0, rotate: 45 },
              },
            ],
            visualMap: [
              { id: "军费", dimension: "2009军费" },
              { id: "军力", dimension: "2009军力" },
            ],
            series: [
              {
                name: "军费",
                datasetIndex: 4,
                xAxisIndex: 0,
                encode: { x: "NAME_ZH", y: "yCoord1", tooltip: ["2009军费"] },
              },
              {
                name: "军力",
                datasetIndex: 4,
                xAxisIndex: 1,
                encode: { x: "NAME_ZH", y: "yCoord2", tooltip: ["2009军力"] },
              },
            ],
          },
          {
            title: { subtext: "2017年数据" },
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
                axisLabel: { show: false, interval: 0, rotate: 45 },
              },
            ],
            visualMap: [
              { id: "军费", dimension: "2017军费" },
              { id: "军力", dimension: "2017军力" },
            ],
            series: [
              {
                name: "军费",
                datasetIndex: 5,
                xAxisIndex: 0,
                encode: { x: "NAME_ZH", y: "yCoord1", tooltip: ["2017军费"] },
              },
              {
                name: "军力",
                datasetIndex: 5,
                xAxisIndex: 1,
                encode: { x: "NAME_ZH", y: "yCoord2", tooltip: ["2017军力"] },
              },
            ],
          },
          {
            title: { subtext: "2020年数据" },
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
                axisLabel: { show: false, interval: 0, rotate: 45 },
              },
            ],
            visualMap: [
              { id: "军费", dimension: "2020军费" },
              { id: "军力", dimension: "2020军力" },
            ],
            series: [
              {
                name: "军费",
                datasetIndex: 6,
                xAxisIndex: 0,
                encode: { x: "NAME_ZH", y: "yCoord1", tooltip: ["2020军费"] },
              },
              {
                name: "军力",
                datasetIndex: 6,
                xAxisIndex: 1,
                encode: { x: "NAME_ZH", y: "yCoord2", tooltip: ["2020军力"] },
              },
            ],
          },
        ],
      };
      option.dataset = getNotaDataSet(true);
      console.log("真正源数据", option.dataset);
      option.dataset[0].source.forEach((item, index) => {
        item[16] = 4.6;
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
  /* background-image: linear-gradient(
      102deg,
      rgba(5, 52, 120, 1) 0%,
      rgba(123, 146, 181, 0.7) 0%,
      rgba(241, 243, 245, 1) 100%
    ),
    url("@/assets/img/MilitaryBack.jpg"); */
  /* background-image: linear-gradient(
      4deg,
      rgba(226, 219, 224, 0.75) 30%,
      rgba(155, 152, 154, 0.3) 45%,
      rgba(87, 86, 85, 0.3) 100%
    ),
    url("@/assets/img/MilitaryBack.jpg"); */
  background-image: radial-gradient(transparent 10%, #0f0e0f 75%),
    url("@/assets/img/MilitaryBack.jpg");
  /* background-image: url("@/assets/img/MilitaryBack.jpg"); */
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  /* background-size: cover; */
}

#echart-d3 {
  width: 100%;
  height: 100%;
}
</style>
