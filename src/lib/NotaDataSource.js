import OriginData from "../../public/AttributeData/newEuropeAttribute.json";
let dimension = [
  "ABBREV",
  "ABBREV_LEN",
  "ADM0_A3",
  "CONTINENT",
  "ECONOMY",
  "FCLASS_ISO",
  "FORMAL_EN",
  "GDP_MD",
  "GDP_YEAR",
  "INCOME_GRP",
  "ISO_A2_EH",
  "ISO_A3_EH",
  "LABELRANK",
  "LABEL_X",
  "LABEL_Y",
  "LEVEL",
  "LONG_LEN",
  "MAPCOLOR7",
  "MAPCOLOR8",
  "MAPCOLOR9",
  "MAPCOLOR13",
  "MAX_LABEL",
  "MIN_LABEL",
  "MIN_ZOOM",
  "NAME",
  "NAME_EN",
  "NAME_LEN",
  "NAME_LONG",
  "NAME_ZH",
  "NE_ID",
  "POP_EST",
  "POP_RANK",
  "POP_YEAR",
  "REGION_UN",
  "REGION_WB",
  "SUBREGION",
  "SUBUNIT",
  "TYPE",
  "WOE_ID",
  "WOE_NOTE",
  "scalerank",
];
function getNotaAttrData() {
  let data = [];
  data.push(dimension);
  let countryList = Object.keys(OriginData).map((item) => {
    let dataItem = OriginData[item];
    let country = [];
    dimension.forEach((attr) => {
      country.push(dataItem[attr]);
    });
    return country;
  });
  countryList.sort((a, b) => {
    return a[7] - b[7];
  });
  console.log(
    "GDP最小值(十万美元): ",
    countryList[0][7],
    "  GDP最大值: ",
    countryList[countryList.length - 1][7]
  );
  console.log(
    "人口最小值: ",
    countryList.reduce((pre, cur) => {
      return pre[30] < cur[30] ? pre : cur;
    })[30],
    "人口最大值: ",
    countryList.reduce((pre, cur) => {
      return pre[30] > cur[30] ? pre : cur;
    })[30]
  );
  data.push(countryList);
  console.log("源数据: ", data);
  return data;
}

function getNotaDataSet() {
  let dataOrigin = getNotaAttrData();
  let dataset = { dimensions: [], source: [] };
  dataset.dimensions = dataOrigin[0];
  dataset.source = dataOrigin[1];
  return dataset;
}

export { getNotaAttrData, getNotaDataSet };
