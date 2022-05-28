import { getNotaAttrData } from "./NotaDataSource";

function getInitBarOption() {
  let option = {
    title: {
      text: "北约各成员国经济人口数据对比",
      subtext: "经济数据年份：2019,人口数据年份：2019",
      textVerticalAlign: "middle",
      left: "center",
      top: "30",
    },
    animationDurationUpdate: 1000,
    legend: {
      show: true,
      // left: "right",
      right: 30,
      orient: "vertical",
      selectedMode: "single",
      selected: {
        // 选中'系列1'
        GDP: true,
        // 不选中'系列2'
        POP: false,
      },
      animation: true,
      data: ["GDP", "POP"],
    },
    grid: {
      top: 200,
    },
    tooltip: { trigger: "axis", axisPointer: { type: "shadow" } },
    dataset: {
      sourceHeader: false,
      dimensions: [],
      source: [],
    },
    // xAxis: {
    //   name: "GDP",
    //   splitLine: {
    //     lineStyle: {
    //       type: "dashed",
    //     },
    //   },
    // },
    // yAxis: {
    //   name: "POP",
    //   splitLine: {
    //     lineStyle: {
    //       type: "dashed",
    //     },
    //   },
    //scale: true,
    //},
    angleAxis: { type: "category", startAngle: 75 },
    radiusAxis: {},
    polar: { center: ["50%", "53%"] },
    series: [],
  };
  let dataOrigin = getNotaAttrData();
  option["dataset"]["dimensions"] = dataOrigin[0];
  option["dataset"]["source"] = dataOrigin[1];
  option["series"].push(generateSeries("GDP_MD"));
  option["series"].push(generateSeries("POP_EST"));
  return option;
}
function getMapOption() {
  let data = generateMapData("POP_EST");
  let GDPdata = generateMapData("GDP_MD");
  let dataOrigin = getNotaAttrData();
  console.log("生成地图数据：", dataOrigin);
  let mapOption = {
    visualMap: [
      {
        left: "right",
        min: 500000,
        seriesIndex: 0,
        max: 400000000,
        inRange: {
          // prettier-ignore
          color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026'],
        },
        text: ["High", "Low"],
        calculable: true,
      },
      {
        type: "piecewise",
        left: "left",
        seriesIndex: 1,
        pieces: [
          { min: 20000000, label: "最高", color: "#a50026" },
          { min: 10000000, max: 20000000, label: "较高", color: "#FF6666" },
          { min: 500000, max: 10000000, label: "中等", color: "#CCCC99" },
          { min: 100000, max: 500000, label: "较低", color: "#CC9933" },
          { min: 5000, max: 100000, label: "低", color: "#0099CC" },
        ],
        text: ["High", "Low"],
        calculable: true,
      },
    ],
    legend: {
      show: true,
      // left: "right",
      right: 30,
      orient: "vertical",
      selectedMode: "single",
      selected: {
        // 选中'系列1'
        GDP: true,
        // 不选中'系列2'
        POP: false,
      },
      animation: true,
      data: ["GDP", "POP"],
    },
    series: [
      {
        id: "pop",
        type: "map",
        name: "POP",
        roam: true,
        left: "10%",
        center: [-28, 39],
        scaleLimit: { min: 2, max: 16 },
        map: "NOTA",
        animationDurationUpdate: 1000,
        universalTransition: true,
        nameProperty: "NAME_ZH",
        data: data,
      },
      {
        id: "gdp",
        type: "map",
        name: "GDP",
        roam: true,
        left: "10%",
        center: [-28, 39],
        scaleLimit: { min: 2, max: 16 },
        map: "NOTA",
        animationDurationUpdate: 1000,
        universalTransition: true,
        nameProperty: "NAME_ZH",
        data: GDPdata,
      },
    ],
  };
  return mapOption;
}

function generateMapData(valueName = "POP_EST") {
  let dataOrigin = getNotaAttrData();
  let mapData = [];
  let index = dataOrigin[0].indexOf("NAME_ZH");
  let valIndex = dataOrigin[0].indexOf(valueName);
  dataOrigin[1].forEach((item) => {
    let itemOne = {};
    itemOne["name"] = item[index];
    itemOne["value"] = item[valIndex];
    mapData.push(itemOne);
  });
  return mapData;
}
function generateSeries(yName) {
  let series = {
    type: "bar",
    // symbolSize: function (val) {
    //   return val[7] / 90000;
    // },
    coordinateSystem: "polar",
    universalTransition: true,
    encode: {
      angle: "NAME_ZH",
      radius: "",
      // tooltip: [6, 7, 30, 0, 1, 2, 3, 4, 5, 8],
    },
  };
  series["encode"]["radius"] = yName;
  series["id"] = yName.slice(0, 3).toLowerCase();
  series["name"] = yName.slice(0, 3);
  return series;
}
export { getInitBarOption, getMapOption };
