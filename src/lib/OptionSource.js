import { getNotaAttrData } from "./NotaDataSource";

function getInitBarOption() {
  let option = {
    tooltip: { trigger: "axis", axisPointer: { type: "shadow" } },
    dataset: { sourceHeader: false, dimensions: [], source: [] },
    xAxis: {
      type: "category",
      name: "国家",
      axisLabel: { rotate: 35, color: "#23272e", fontWeight: "bolde" },
    },
    yAxis: {},
    series: [],
  };
  let dataOrigin = getNotaAttrData();
  option["dataset"]["dimensions"] = dataOrigin[0];
  option["dataset"]["source"] = dataOrigin[1];
  option["series"].push(generateSeries("GDP_MD"));
  option["series"].push(generateSeries("POP_EST"));
  return option;
}
function generateSeries(yName) {
  let series = { type: "bar", encode: { x: "NAME_ZH", y: "GDP_MD" } };
  series["encode"]["y"] = yName;
  return series;
}
export { getInitBarOption };
