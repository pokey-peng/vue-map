import OriginData from "../../public/AttributeData/newEuropeAttribute.json";
import * as axios from "axios";
import warData from "../../public/AttributeData/war.json";

function getNotaAttrData() {
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
  let data = [];
  data.push(dimension);
  console.log("最最开始数据", OriginData);
  console.log("分割线");
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
function generateWarData(name) {
  name = name == "海湾" ? "伊拉克" : name;
  let resultData = {};
  warData.forEach((key) => {
    if (key["名称"] !== name) {
      return;
    }
    resultData = key["北约参战兵力"][0];
  });
  console.log("参战兵力", resultData);
  return resultData;
}
async function getWarCountryData() {
  let response = await axios.get(
    process.env.BASE_URL + "GeoData/warCountry.geojson"
  );
  console.log(response.data);
  let nameCountry = ["科索沃", "阿富汗", "叙利亚", "伊拉克", "利比亚"];
  let data = [];
  for (let feature of response.data.features) {
    let name = feature.properties["NAME_ZH"];
    if (!nameCountry.includes(name)) {
      continue;
    }
    let attr = { name };
    data.push([
      feature.properties["LABEL_X"],
      feature.properties["LABEL_Y"],
      attr,
    ]);
  }
  //console.log("战争国家: ", data);
  return data;
}
export { getNotaAttrData, getNotaDataSet, getWarCountryData, generateWarData };
