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
        color: ["#a90000", "#00008b"],
        dataset: {},
        timeline: {
          bottom: "10%",
          playInterval: 1000, // 播放速度
          replaceMerge: "xAxis",
          data: ["1982", "1999", "2004", "2009", "2017", "2020"],
        },
        textStyle: { color: "#ffffff" },
        title: [
          {
            text: "北约各国军费军力变化",
            subtext: "1982年数据",
            top: "2%",
            textAlign: "center",
            right: "30%",
            textVerticalAlign: "middle",
            textStyle: {
              color: "#ffffff",
              fontSize: 30,
              fontFamily: "sans-serif",
              fontStyle: "normal",
            },
            subtextStyle: {
              color: "#ffffff",
              fontSize: 20,
              fontStyle: "italic",
            },
          },
          {
            id: "timeTitle",
            text: "1982",
            textAlign: "center",
            left: "14%",
            top: "2%",
            textStyle: {
              color: "#ffffff",
              fontSize: 100,
            },
          },
        ],
        grid: { top: "16%", bottom: "30%", right: "10%", left: "3%" },
        xAxis: [
          {
            type: "category",
            axisLine: { show: false },
            axisTick: { show: false, alignWithLabel: true },
            axisLabel: {
              interval: 0,
              rotate: 45,
              fontFamily: "sans-serif",
              fontStyle: "normal",
              fontWeight: "bold",
              fontSize: 16,
              // color: "rgba(89, 82, 82, 1)",
            },
          },
          {
            type: "category",
            axisLine: { show: false },
            axisTick: { show: false, alignWithLabel: true },
            axisLabel: {
              show: true,
              interval: 0,
              rotate: 45,
              fontFamily: "sans-serif",
              fontStyle: "normal",
              fontWeight: "bold",
            },
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
            left: "90%",
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
            textStyle: {
              color: "#ffffff",
              fontStyle: "italic",
            },
            inRange: {
              color: "#a90000",
              opacity: 1,
              symbolSize: [10, 35, 50, 70, 100],
            },
            outOfRange: {
              symbolSize: 5,
              color: "#6b6e76",
            },
            itemStyle: {
              shadowBlur: 10,
              shadowColor: "rgba(120, 36, 50, 0.5)",
              shadowOffsetY: 5,
              color: new this.$echarts.graphic.RadialGradient(0.4, 0.3, 1, [
                {
                  offset: 0,
                  color: "#a90000",
                },
              ]),
            },
            align: "left",
          },
          {
            id: "军力",
            show: true,
            left: "90%",
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
            textStyle: {
              color: "#ffffff",
              fontStyle: "italic",
            },
            inRange: {
              color: "#00008b",
              opacity: 1,
              symbolSize: [10, 35, 50, 70, 100],
            },
            outOfRange: {
              symbolSize: 5,
              color: "#6b6e76",
            },
            align: "left",
          },
        ],
        legend: {
          top: "40%",
          right: "1%",
          formatter: function (name) {
            return name == "军费" ? "军费占GDP比重(%)" : "军力(千人)";
          },
          textStyle: {
            color: "#ffffff",
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
                  width: 40,
                  height: 40,
                },
                Belgium: {
                  backgroundColor: {
                    image: process.env.BASE_URL + "icon/Belgium.png",
                  },
                  width: 40,
                  height: 40,
                },
                Bulgaria: {
                  backgroundColor: {
                    image: process.env.BASE_URL + "icon/Bulgaria.png",
                  },
                  width: 40,
                  height: 40,
                },
                Canada: {
                  backgroundColor: {
                    image: process.env.BASE_URL + "icon/Canada.png",
                  },
                  width: 40,
                  height: 40,
                },
                Croatia: {
                  backgroundColor: {
                    image: process.env.BASE_URL + "icon/Croatia.png",
                  },
                  width: 40,
                  height: 40,
                },
                CzechRepublic: {
                  backgroundColor: {
                    image: process.env.BASE_URL + "icon/CzechRepublic.png",
                  },
                  width: 40,
                  height: 40,
                },
                Denmark: {
                  backgroundColor: {
                    image: process.env.BASE_URL + "icon/Denmark.png",
                  },
                  width: 40,
                  height: 40,
                },
                Estonia: {
                  backgroundColor: {
                    image: process.env.BASE_URL + "icon/Estonia.png",
                  },
                  width: 40,
                  height: 40,
                },
                France: {
                  backgroundColor: {
                    image: process.env.BASE_URL + "icon/France.png",
                  },
                  width: 40,
                  height: 40,
                },
                Germany: {
                  backgroundColor: {
                    image: process.env.BASE_URL + "icon/Germany.png",
                  },
                  width: 40,
                  height: 40,
                },
                Greece: {
                  backgroundColor: {
                    image: process.env.BASE_URL + "icon/Greece.png",
                  },
                  width: 40,
                  height: 40,
                },
                Hungary: {
                  backgroundColor: {
                    image: process.env.BASE_URL + "icon/Hungary.png",
                  },
                  width: 40,
                  height: 40,
                },
                Italy: {
                  backgroundColor: {
                    image: process.env.BASE_URL + "icon/Italy.png",
                  },
                  width: 40,
                  height: 40,
                },
                Latvia: {
                  backgroundColor: {
                    image: process.env.BASE_URL + "icon/Latvia.png",
                  },
                  width: 40,
                  height: 40,
                },
                Lithuania: {
                  backgroundColor: {
                    image: process.env.BASE_URL + "icon/Lithuania.png",
                  },
                  width: 40,
                  height: 40,
                },
                Luxembourg: {
                  backgroundColor: {
                    image: process.env.BASE_URL + "icon/Luxembourg.png",
                  },
                  width: 40,
                  height: 40,
                },
                Montenegro: {
                  backgroundColor: {
                    image: process.env.BASE_URL + "icon/Montenegro.png",
                  },
                  width: 40,
                  height: 40,
                },
                Netherlands: {
                  backgroundColor: {
                    image: process.env.BASE_URL + "icon/Netherlands.png",
                  },
                  width: 40,
                  height: 40,
                },
                NorthMacedonia: {
                  backgroundColor: {
                    image: process.env.BASE_URL + "icon/NorthMacedonia.png",
                  },
                  width: 40,
                  height: 40,
                },
                Norway: {
                  backgroundColor: {
                    image: process.env.BASE_URL + "icon/Norway.png",
                  },
                  width: 40,
                  height: 40,
                },
                Poland: {
                  backgroundColor: {
                    image: process.env.BASE_URL + "icon/Poland.png",
                  },
                  width: 40,
                  height: 40,
                },
                Portugal: {
                  backgroundColor: {
                    image: process.env.BASE_URL + "icon/Portugal.png",
                  },
                  width: 40,
                  height: 40,
                },
                Romania: {
                  backgroundColor: {
                    image: process.env.BASE_URL + "icon/Romania.png",
                  },
                  width: 40,
                  height: 40,
                },
                SlovakRepublic: {
                  backgroundColor: {
                    image: process.env.BASE_URL + "icon/SlovakRepublic.png",
                  },
                  width: 40,
                  height: 40,
                },
                Slovenia: {
                  backgroundColor: {
                    image: process.env.BASE_URL + "icon/Slovenia.png",
                  },
                  width: 40,
                  height: 40,
                },
                Spain: {
                  backgroundColor: {
                    image: process.env.BASE_URL + "icon/Spain.png",
                  },
                  width: 40,
                  height: 40,
                },
                Turkey: {
                  backgroundColor: {
                    image: process.env.BASE_URL + "icon/Turkey.png",
                  },
                  width: 40,
                  height: 40,
                },
                UnitedKingdom: {
                  backgroundColor: {
                    image: process.env.BASE_URL + "icon/UnitedKingdom.png",
                  },
                  width: 40,
                  height: 40,
                },
                UnitedStates: {
                  backgroundColor: {
                    image: process.env.BASE_URL + "icon/UnitedStates.png",
                  },
                  width: 40,
                  height: 40,
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
            title: [
              { subtext: "冷战前(1982年)" },
              { id: "timeTitle", text: "1982" },
            ],
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
            title: [
              { subtext: "第一次东扩后(1999年)" },
              { id: "timeTitle", text: "1999" },
            ],
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
            title: [
              { subtext: "第二次东扩后(2004年)" },
              { id: "timeTitle", text: "2004" },
            ],
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
            title: [
              { subtext: "第三次东扩后(2009年)" },
              { id: "timeTitle", text: "2009" },
            ],
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
                itemStyle: {
                  shadowBlur: 10,
                  shadowColor: "rgba(120, 36, 50, 0.5)",
                  shadowOffsetY: 5,
                  color: new this.$echarts.graphic.RadialGradient(0.4, 0.3, 1, [
                    {
                      offset: 0,
                      color: "#a90000",
                    },
                  ]),
                },
              },
              {
                name: "军力",
                datasetIndex: 4,
                xAxisIndex: 1,
                encode: { x: "NAME_ZH", y: "yCoord2", tooltip: ["2009军力"] },
                itemStyle: {
                  shadowBlur: 10,
                  shadowColor: "rgba(25, 100, 150, 0.5)",
                  shadowOffsetY: 5,
                  color: new this.$echarts.graphic.RadialGradient(0.4, 0.3, 1, [
                    {
                      offset: 0,
                      color: "#00008b",
                    },
                  ]),
                },
              },
            ],
          },
          {
            title: [
              { subtext: "第四次东扩后(2017年)" },
              { id: "timeTitle", text: "2017" },
            ],
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
            title: [
              { subtext: "第五次东扩后(2020年)" },
              { id: "timeTitle", text: "2020" },
            ],
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
  background-image: linear-gradient(
      rgba(228, 235, 245, 0.2),
      rgba(228, 235, 245, 0.2)
    ),
    url("@/assets/img/NATO_Back3.jpg");
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
