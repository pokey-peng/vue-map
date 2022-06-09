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
  data.push(countryList);
  console.log("源数据: ", data);
  return data;
}

function getNotaDataSet(finished = false) {
  if (finished) {
    return [
      {
        dimensions: [
          "序号",
          "country",
          "NAME_ZH",
          "2020军力",
          "2020军费",
          "2017军力",
          "2017军费",
          "2009军力",
          "2009军费",
          "2004军力",
          "2004军费",
          "1999军力",
          "1999军费",
          "1982军力",
          "1982军费",
          "yCoord1",
          "yCoord2",
        ],
        source: [
          [
            1,
            "Albania",
            "阿尔巴尼亚",
            6.7,
            1.3,
            6.8,
            1.1,
            11,
            1.52,
            -1,
            -1,
            -1,
            -1,
            -1,
            -1,
            0.8,
            4,
          ],
          [
            2,
            "Belgium",
            "比利时",
            25.2,
            0.89,
            27.8,
            0.89,
            36,
            1.16,
            41,
            1.15,
            43,
            1.39,
            110,
            3.27,
            0.8,
            4,
          ],
          [
            3,
            "Bulgaria",
            "保加利亚",
            25.6,
            3.15,
            24.3,
            1.25,
            32,
            1.74,
            42,
            2.39,
            -1,
            -1,
            -1,
            -1,
            0.8,
            4,
          ],
          [
            4,
            "Canada",
            "加拿大",
            71,
            1.29,
            68.2,
            1.16,
            60,
            1.38,
            62,
            1.11,
            59,
            1.24,
            82,
            6.18,
            0.8,
            4,
          ],
          [
            5,
            "Croatia",
            "克罗地亚",
            15.2,
            1.61,
            14.8,
            1.6,
            16,
            1.79,
            -1,
            -1,
            -1,
            -1,
            -1,
            -1,
            0.8,
            4,
          ],
          [
            6,
            "CzechRepublic",
            "捷克共和国",
            26.8,
            1.15,
            23.8,
            1,
            24,
            1.31,
            25,
            1.71,
            53,
            1.86,
            -1,
            -1,
            0.8,
            4,
          ],
          [
            7,
            "Denmark",
            "丹麦",
            18.1,
            1.36,
            16.7,
            1.15,
            19,
            1.35,
            20,
            1.42,
            25,
            1.56,
            30,
            2.42,
            0.8,
            4,
          ],
          [
            8,
            "Estonia",
            "爱沙尼亚",
            6.6,
            2.02,
            6,
            2.05,
            5,
            1.79,
            3,
            1.7,
            -1,
            -1,
            -1,
            -1,
            0.8,
            4,
          ],
          [
            9,
            "France",
            "法国",
            208,
            1.84,
            208.2,
            1.92,
            239,
            2.1,
            357,
            2.1,
            421,
            2.18,
            577,
            5.38,
            0.8,
            4,
          ],
          [
            10,
            "Germany",
            "德国",
            186.9,
            1.26,
            179.8,
            1.15,
            247,
            1.31,
            252,
            1.27,
            334,
            1.4,
            490,
            3.84,
            0.8,
            4,
          ],
          [
            11,
            "Greece",
            "希腊",
            107.6,
            2.67,
            106.9,
            2.58,
            135,
            3.22,
            133,
            2.61,
            205,
            3.36,
            188,
            5.11,
            0.8,
            4,
          ],
          [
            12,
            "Hungary",
            "匈牙利",
            22.7,
            1.25,
            18.7,
            1,
            19,
            1.13,
            30,
            1.47,
            61,
            1.43,
            -1,
            -1,
            0.8,
            0.9,
          ],
          [
            13,
            "Italy",
            "意大利",
            175.5,
            1.31,
            5.5,
            1.33,
            197,
            1.55,
            315,
            1.68,
            391,
            1.68,
            517,
            3.25,
            0.8,
            0.9,
          ],
          [
            14,
            "Latvia",
            "拉脱维亚",
            7,
            2.03,
            13.5,
            1.45,
            5,
            1.38,
            7,
            1.6,
            -1,
            -1,
            -1,
            -1,
            0.8,
            0.9,
          ],
          [
            15,
            "Lithuania",
            "立陶宛",
            16.3,
            2.01,
            0.8,
            1.48,
            8,
            1.08,
            12,
            1.2,
            -1,
            -1,
            -1,
            -1,
            0.8,
            0.9,
          ],
          [
            16,
            "Luxembourg",
            "卢森堡",
            0.9,
            0.57,
            1.5,
            0.41,
            0.9,
            0.38,
            1.6,
            1.87,
            1,
            0.57,
            1,
            2.92,
            0.8,
            0.9,
          ],
          [
            17,
            "Montenegro",
            "黑山",
            1.9,
            1.33,
            39.5,
            1.41,
            -1,
            -1,
            -1,
            -1,
            -1,
            -1,
            -1,
            -1,
            0.8,
            0.9,
          ],
          [
            18,
            "Netherlands",
            "荷兰",
            40,
            1.32,
            6.3,
            1.16,
            48,
            1.4,
            51,
            1.43,
            55,
            1.59,
            106,
            5.79,
            0.8,
            0.9,
          ],
          [
            19,
            "NorthMacedonia",
            "北马其顿",
            6.1,
            1.16,
            -1,
            -1,
            -1,
            -1,
            -1,
            -1,
            -1,
            -1,
            -1,
            -1,
            0.8,
            0.9,
          ],
          [
            20,
            "Norway",
            "挪威",
            20.8,
            1.86,
            20.2,
            1.63,
            18,
            1.6,
            26,
            1.85,
            33,
            2.04,
            41,
            3.93,
            0.8,
            0.9,
          ],
          [
            21,
            "Poland",
            "波兰",
            120,
            1.97,
            105.3,
            1.94,
            99,
            1.8,
            150,
            1.87,
            187,
            1.9,
            -1,
            -1,
            0.8,
            0.9,
          ],
          [
            22,
            "Portugal",
            "葡萄牙",
            28.7,
            1.78,
            27.8,
            2,
            40,
            2.03,
            45,
            1.97,
            72,
            1.89,
            89,
            3.45,
            0.8,
            0.9,
          ],
          [
            23,
            "Romania",
            "罗马尼亚",
            66.4,
            1.84,
            64,
            1.41,
            67,
            1.28,
            91,
            2.01,
            -1,
            -1,
            -1,
            -1,
            0.8,
            0.9,
          ],
          [
            24,
            "SlovakRepublic",
            "斯洛伐克共和国",
            12.9,
            1.71,
            12.2,
            1,
            15,
            1.59,
            16,
            1.43,
            -1,
            -1,
            -1,
            -1,
            0.8,
            0.9,
          ],
          [
            25,
            "Slovenia",
            "斯洛文尼亚",
            7,
            1.06,
            6.3,
            1.12,
            7,
            1.52,
            6,
            1.65,
            -1,
            -1,
            -1,
            -1,
            0.8,
            0.9,
          ],
          [
            26,
            "Spain",
            "西班牙",
            122.5,
            1.23,
            117.7,
            1.14,
            132,
            1.36,
            124,
            1.43,
            155,
            1.76,
            -1,
            -1,
            0.8,
            0.9,
          ],
          [
            27,
            "Turkey",
            "土耳其",
            437.2,
            2.69,
            416.7,
            2.05,
            495,
            2.49,
            502,
            2.7,
            797,
            3.89,
            769,
            3.53,
            0.8,
            0.9,
          ],
          [
            28,
            "UnitedKingdom",
            "英国",
            156.2,
            1.98,
            149.4,
            1.96,
            195,
            2.64,
            200,
            2.5,
            218,
            2.42,
            334,
            9.09,
            0.8,
            0.9,
          ],
          [
            29,
            "UnitedStates",
            "美国",
            1346.0,
            3.43,
            1305.9,
            3.41,
            1418,
            4.89,
            1378,
            4.02,
            1489,
            3.09,
            2206,
            10.16,
            0.8,
            0.9,
          ],
        ],
      },
      {
        transform: [
          {
            type: "filter",
            config: { dimension: "1982军费", "!=": -1 },
          },
          {
            type: "sort",
            config: { dimension: "1982军费", order: "desc" },
          },
        ],
      },
      {
        transform: [
          {
            type: "filter",
            config: { dimension: "1999军费", "!=": -1 },
          },
          {
            type: "sort",
            config: { dimension: "1999军费", order: "desc" },
          },
        ],
      },
      {
        transform: [
          {
            type: "filter",
            config: { dimension: "2004军费", "!=": -1 },
          },
          {
            type: "sort",
            config: { dimension: "2004军费", order: "desc" },
          },
        ],
      },
      {
        transform: [
          {
            type: "filter",
            config: { dimension: "2009军费", "!=": -1 },
          },
          {
            type: "sort",
            config: { dimension: "2009军费", order: "desc" },
          },
        ],
      },
      {
        transform: [
          {
            type: "filter",
            config: { dimension: "2017军费", "!=": -1 },
          },
          {
            type: "sort",
            config: { dimension: "2017军费", order: "desc" },
          },
        ],
      },
      {
        transform: [
          {
            type: "filter",
            config: { dimension: "2020军费", "!=": -1 },
          },
          {
            type: "sort",
            config: { dimension: "2020军费", order: "desc" },
          },
        ],
      },
    ];
  }
  let dataOrigin = getNotaAttrData();
  let dataset = { dimensions: [], source: [] };
  dataset.dimensions = dataOrigin[0];
  dataset.source = dataOrigin[1];
  return dataset;
}
function generateWarData(name) {
  //name = name == "海湾" ? "伊拉克" : name;
  let resultData = {};
  console.log("warData:", warData);
  warData.forEach((key) => {
    if (key["名称"] !== name) {
      return;
    }
    resultData = key["北约参战兵力"][0];
  });
  console.log("参战兵力从war", resultData);
  return resultData;
}
async function getWarCountryData() {
  let response = await axios.get(
    process.env.BASE_URL + "GeoData/warCountry.geojson"
  );
  console.log(response.data);
  let nameCountry = ["海湾", "科索沃", "阿富汗", "伊拉克", "利比亚", "叙利亚"];
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
  data.push([data[3][0], data[3][1], { name: "海湾" }]);
  //console.log("战争国家: ", data);
  return data;
}
export { getNotaAttrData, getNotaDataSet, getWarCountryData, generateWarData };
