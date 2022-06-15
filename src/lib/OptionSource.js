import {
  getNotaAttrData,
  getNotaDataSet,
  generateWarData,
  generateWarJureData,
} from "./NotaDataSource";

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
  let dataOrigin = getNotaDataSet();
  option["dataset"] = dataOrigin;
  option["series"].push(generateSeries("GDP_MD"));
  option["series"].push(generateSeries("POP_EST"));
  return option;
}
function getMapOption() {
  let data = generateMapData("POP_EST");
  let GDPdata = generateMapData("GDP_MD");
  let dataOrigin = getNotaAttrData();
  //console.log("生成地图数据：", dataOrigin);
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
        showLegendSymbol: false,
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
        showLegendSymbol: false,
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

let warShow = {
  海湾: false,
  伊拉克: false,
  叙利亚: false,
  阿富汗: false,
  利比亚: false,
  土耳其: false,
};
function getWarOption(name, coord = [], click = false) {
  if (click) {
    warShow[name] = !warShow[name];
    Object.keys(warShow).forEach((key) => {
      if (key !== name) {
        warShow[key] = false;
      }
    });
  }
  if (!warShow[name] && click) {
    return {
      series: [],
    };
  }
  let warData = generateWarData(name);
  let dataset = getNotaAttrData();
  let data = (function () {
    let optionData = [];
    let nameIndex = dataset[0].indexOf("NAME_ZH");
    let lngIndex = dataset[0].indexOf("LABEL_X");
    let LatIndex = dataset[0].indexOf("LABEL_Y");
    Object.keys(warData).forEach((key) => {
      dataset[1].forEach((item) => {
        if (item[nameIndex] !== key) {
          return;
        }
        optionData.push([
          item[lngIndex],
          item[LatIndex],
          warData[key],
          { name: key },
        ]);
      });
    });
    //optionData.push([19.490468, 51.990316, 2500, { name: "波兰" }]);
    return optionData;
  })();
  let newData = (function () {
    let result = data.map((item) => {
      return [[item[0], item[1]], coord];
    });
    return result;
  })();
  console.log("参战兵力option: ", data);
  let option = {
    series: [
      {
        type: "bar3D",
        name: "参战兵力",
        coordinateSystem: "globe",
        shading: "lambert",
        data: data,
        bevelSize: 0.5,
        minHeight: 1,
        barSize: 2,
        silent: false,
        itemStyle: {
          color: "orange",
        },
        animationDurationUpdate: 1000,
      },
      {
        type: "lines3D",
        name: "兵力线",
        coordinateSystem: "globe",
        blendMode: "lighter",
        effect: { show: true },
        lineStyle: {
          width: 2,
          color: "#e0747f",
          opacity: 1,
        },
        data: newData,
        animationDurationUpdate: 1000,
      },
    ],
  };
  return option;
}

function getGlobeOption(name, mapEcharts = null) {
  let dataset = getNotaAttrData();
  let data = (function () {
    let popIndex = dataset[0].indexOf("POP_EST");
    let lngIndex = dataset[0].indexOf("LABEL_X");
    let LatIndex = dataset[0].indexOf("LABEL_Y");
    return dataset[1].map((item) => {
      return [item[lngIndex], item[LatIndex], item[popIndex]];
    });
  })();
  let ROOT_PATH =
    "https://fastly.jsdelivr.net/gh/apache/echarts-website@asf-site/examples";
  return name !== "globe"
    ? {
        backgroundColor: "#84A0E7",
        // dataset: getNotaDataSet(),
        tooltip: {
          show: true,
          showContent: true,
          enterable: true,
          formatter: function (params) {
            //console.log(params);
            return `${params.seriesName} : ${params.data[1]}`;
          },
        },
        geo: {
          id: "baseGeo",
          show: true,
          map: "world",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          //center: [0, 40],
          nameProperty: "NAME_ZH",
          //label: { show: true, fontFamily: "Microsoft YaHei" },
          silent: true,
          boundingCoords: [
            [-180, 90],
            [180, -90],
          ],
          itemStyle: {
            borderColor: "#2B2346",
            normal: {
              areaColor: "#D5BFAE",
              borderColor: "#161417",
            },
            emphasis: {
              areaColor: "#357cf8",
            },
          },
        },
        series: [
          {
            type: "effectScatter",
            coordinateSystem: "geo",
            name: "curWar",
            color: {
              type: "radial",
              x: 0.5,
              y: 0.5,
              r: 0.5,
              colorStops: [
                {
                  offset: 0,
                  color: "#f6d242", // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: "#E25416", // 100% 处的颜色
                },
              ],
              global: false, // 缺省为 false
            },
            geoIndex: 0,
            data: [mapEcharts],
            //rippleEffect: { color: "red" },
            symbolSize: 25,
            emphasis: {
              focus: "self",
              label: {
                show: true,
                formatter: function (params) {
                  return params.data[2].name;
                },
              },
              blurScope: "series",
              itemStyle: { color: "yellow" },
            },
            zlevel: 10,
            z: 10,
            animationDurationUpdate: 2000,
          },
        ],
      }
    : {
        backgroundColor: "#000",
        globe: {
          //baseTexture: ROOT_PATH + "/data-gl/asset/world.topo.bathy.200401.jpg",
          baseTexture: mapEcharts,
          // heightTexture:
          //   ROOT_PATH + "/data-gl/asset/bathymetry_bw_composite_4k.jpg",
          displacementScale: 0.04,
          shading: "color",
          environment: ROOT_PATH + "/data-gl/asset/starfield.jpg",
          light: {
            ambient: {
              intensity: 0.4,
            },
            main: {
              intensity: 0.4,
            },
          },
          viewControl: {
            autoRotate: false,
            distance: 300,
            targetCoord: [-31.309033689627796, 50.59132814151329],
          },
          //layers: [{ type: "overlay", name: "POP", texture: mapChart }],
        },
        // visualMap: {
        //   max: 300000,
        //   min: 100,
        //   calculable: true,
        //   realtime: true,
        //   dimensions: 2,
        //   seriesIndex: 0,
        //   inRange: {
        //     symbolSize: [10, 100],
        //   },
        //   outOfRange: {
        //     symbolSize: 5,
        //   },
        // },
        tooltip: {
          show: true,
          showContent: true,
          enterable: true,
          formatter: function (params) {
            //console.log(params);
            return `${params.data[3].name}\n${params.seriesName} : ${params.data[2]}`;
          },
        },
        series: [],
      };
}

function getJureInitOption() {
  let oriData = generateWarJureData();
  let nameData = [oriData.name[0]];
  let pData = [oriData["平民死亡"][0]];
  let nData = [oriData["难民数量"][0]];
  let option;
  option = {
    title: {
      text: "平民死亡与难民数量",
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
        label: {
          backgroundColor: "#283b56",
        },
      },
    },
    xAxis: {
      type: "category",
      boundaryGap: true,
      data: nameData,
      axisLabel: { interval: 0 },
    },
    yAxis: [
      {
        type: "value",
        scale: true,
        name: "平民死亡",
      },
      {
        type: "value",
        scale: true,
        name: "难民数量",
      },
    ],
    series: [
      {
        type: "bar",
        name: "平民死亡",
        yAxisIndex: 0,
        data: pData,
      },
      {
        type: "bar",
        name: "难民数量",
        yAxisIndex: 1,
        data: nData,
      },
    ],
  };
  return option;
}

function getJureUpdateOption(name, isCalcu = true) {
  let oriData = generateWarJureData();
  console.log("死亡数据", oriData);
  let index = oriData.name.indexOf(name);
  let nameData;
  let pData;
  let nData;
  if (isCalcu) {
    nameData = oriData.name.slice(0, index + 1);
    pData = oriData["平民死亡"].slice(0, index + 1);
    nData = oriData["难民数量"].slice(0, index + 1);
  } else {
    nameData = [oriData.name[index]];
    pData = [oriData["平民死亡"][index]];
    nData = [oriData["难民数量"][index]];
  }

  let option = {
    xAxis: { data: nameData },
    series: [
      {
        name: "平民死亡",
        data: pData,
      },
      {
        name: "难民数量",
        data: nData,
      },
    ],
  };
  return option;
}

function getBaseMapNATO() {
  let dataset = getNotaAttrData();
  let index = dataset[0].indexOf("NAME_ZH");
  let data = [];
  dataset[1].forEach((item) => {
    data.push({
      name: item[index],
      label: { show: true },
      itemStyle: { areaColor: "#a90000", color: "#a90000" },
    });
  });
  return data;
}

function getSymbolWar(name, label = false) {
  let warData = generateWarData(name);
  let dataset = getNotaAttrData();
  let labelData = [];
  let data = (function () {
    let optionData = [];
    let nameIndex = dataset[0].indexOf("NAME_ZH");
    let lngIndex = dataset[0].indexOf("LABEL_X");
    let LatIndex = dataset[0].indexOf("LABEL_Y");
    Object.keys(warData).forEach((key) => {
      dataset[1].forEach((item) => {
        if (item[nameIndex] !== key) {
          return;
        }
        optionData.push([item[lngIndex], item[LatIndex], { name: key }]);
      });
      labelData.push({
        name: key,
        label: {
          show: true,
          offset: [10, 10],
          color: "#0288D1",
          fontFamily: "Microsoft YaHei",
          fontSize: 15,
        },
      });
    });
    labelData.push({
      name: name === "海湾" ? "伊拉克" : name,
      label: {
        show: true,
        offset: [20, 20],
        color: "#a90000",
        fontFamily: "Microsoft YaHei",
        fontSize: 15,
      },
    });
    //optionData.push([19.490468, 51.990316, { name: "波兰" }]);
    return optionData;
  })();
  if (label) {
    return [data, labelData];
  }
  return data;
}

export {
  getInitBarOption,
  getMapOption,
  getWarOption,
  getGlobeOption,
  getJureInitOption,
  getJureUpdateOption,
  getBaseMapNATO,
  getSymbolWar,
};
