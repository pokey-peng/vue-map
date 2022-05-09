// state
const state = {
  settings: [
    {
      id: 2,
      options: {
        center: [88.9, 37.4],
        zoom: 1.82,
      },
      layers: [
        {
          id: "corridors",
          type: "line",
          source: "corridors",
          layout: {
            "line-cap": "round",
            "line-join": "round",
          },
          paint: {
            "line-color": ["string", ["get", "color"], "#000000"],
            "line-opacity": 0.7,
            "line-width": 5,
          },
        },
      ],
    },
    {
      id: 3,
      options: {
        center: [104.2, 37.37],
        zoom: 3.79,
      },
      layers: [
        {
          id: "GRP",
          type: "fill",
          source: "GRP",
          paint: {
            "fill-color": [
              "interpolate",
              ["linear"],
              ["get", "year2012"],
              441.36,
              "#c4cced",
              19962,
              "#766eb4",
              39482,
              "#4c3e89",
            ],
            "fill-opacity": 0.8,
            "fill-outline-color": "#4c3bba",
          },
        },
        {
          id: "population",
          type: "circle",
          source: "population",
          paint: {
            "circle-radius": ["round", ["/", ["sqrt", ["get", "year2012"]], 2]],
            "circle-color": "#ff6505",
            "circle-opacity": 0.5,
            "circle-stroke-color": "#ff6505",
            "circle-stroke-width": 1,
          },
        },
      ],
    },
    {
      id: 5,
      options: {
        center: [-51.736, 43.476],
        zoom: 1.44,
      },
      layers: [
        {
          id: "bilateral",
          type: "fill",
          source: "bilateral",
          paint: {
            "fill-color": "#ff4d3d",
            "fill-opacity": 0.5,
            "fill-outline-color": "#ff4d3d",
          },
        },
        {
          id: "16_1",
          type: "fill",
          source: "16_1",
          paint: {
            "fill-color": "#868ad5",
            "fill-opacity": [
              "match",
              ["get", "BRICS"],
              "Member State",
              0.5,
              // fallback color
              0.3,
            ],
            "fill-outline-color": "#6469d3",
          },
        },
        {
          id: "BRICS",
          type: "fill",
          source: "BRICS",
          paint: {
            "fill-color": "#3cd7a1",
            "fill-opacity": [
              "match",
              ["get", "BRICS"],
              "Member State",
              0.5,
              // fallback color
              0.3,
            ],
            "fill-outline-color": "#2f755c",
          },
        },
        {
          id: "Lancang_Me",
          type: "fill",
          source: "Lancang_Me",
          paint: {
            "fill-color": "#3f2dc8",
            "fill-opacity": [
              "match",
              ["get", "BRICS"],
              "Member State",
              0.5,
              // fallback color
              0.3,
            ],
            "fill-outline-color": "#4d40b0",
          },
        },
        {
          id: "Shanghai_C",
          type: "fill",
          source: "Shanghai_C",
          paint: {
            "fill-color": "#f17255",
            "fill-opacity": [
              "match",
              ["get", "BRICS"],
              "Member State",
              0.5,
              // fallback color
              0.3,
            ],
            "fill-outline-color": "#ff1605",
          },
        },
        {
          id: "multilateral",
          type: "fill",
          source: "multilateral",
          paint: {
            "fill-color": [
              "case",
              ["==", ["get", "16_1"], "Member State"],
              "#bf7da8",
              ["==", ["get", "BRICS"], "Member State"],
              "#3ea878",
              ["==", ["get", "Lancang_Me"], "Member State"],
              "#6097d2",
              ["==", ["get", "Shanghai_C"], "Member State"],
              "#e65c5c",
              ["==", ["get", "Shanghai_C"], "Dialogue Partner"],
              "#ed8c8c",
              ["==", ["get", "Shanghai_C"], "Observer State"],
              "#f5bdbd",
              "transparent",
            ],
            "fill-opacity": 0.5,
            "fill-outline-color": [
              "case",
              ["==", ["get", "16_1"], "Member State"],
              "#bf7da8",
              ["==", ["get", "BRICS"], "Member State"],
              "#3ea878",
              ["==", ["get", "Lancang_Me"], "Member State"],
              "#6097d2",
              ["==", ["get", "Shanghai_C"], "Member State"],
              "#e65c5c",
              ["==", ["get", "Shanghai_C"], "Dialogue Partner"],
              "#ed8c8c",
              ["==", ["get", "Shanghai_C"], "Observer State"],
              "#f5bdbd",
              "transparent",
            ],
          },
        },
      ],
    },
    {
      id: 6,
      options: {
        center: [81.0, 29.48],
        zoom: 3.43,
      },
      layers: [
        {
          id: "conflict-areas",
          type: "fill",
          source: "conflict-areas",
          paint: {
            "fill-color": "#ff5606",
            "fill-opacity": 0.5,
            "fill-outline-color": "#ff5606",
          },
        },
        {
          id: "conflict-borders",
          type: "line",
          source: "conflict-borders",
          layout: {
            "line-cap": "round",
            "line-join": "round",
          },
          paint: {
            "line-color": "#ff5606",
            "line-opacity": 1,
            "line-width": 2,
          },
        },
      ],
    },
    {
      id: 6.1,
      options: {
        center: [42.177, 43.905],
        zoom: 1.77,
      },
      layers: [
        {
          id: "power",
          type: "fill",
          source: "power",
          paint: {
            "fill-color": [
              "match",
              ["get", "Situation"],
              "BRI",
              "#f66451",
              "Countries that are leaning strongly towards BRI",
              "#f66451",
              "Countries that are cautious towards BRI",
              "#febf9a",
              "Countries that are against BRI",
              "#5251a4",
              // fallback color
              "hsla(12, 100%, 59%, 0)",
            ],
            "fill-opacity": 0.85,
            "fill-outline-color": [
              "match",
              ["get", "Situation"],
              "BRI",
              "#f66451",
              "Countries that are leaning strongly towards BRI",
              "#f66451",
              "Countries that are cautious towards BRI",
              "#febf9a",
              "Countries that are against BRI",
              "#5251a4",
              // fallback color
              "hsla(12, 100%, 59%, 0)",
            ],
          },
        },
      ],
    },
    {
      id: 6.2,
      layers: [
        {
          id: "ports",
          type: "circle",
          source: "ports",
          paint: {
            "circle-radius": [
              "*",
              ["round", ["sqrt", ["get", "CostUSbillions"]]],
              7,
            ],
            "circle-color": [
              "match",
              ["get", "Type"],
              "China-owned",
              "#99000d",
              "Largely-owned by China",
              "#cb181d",
              "Partially-owned by China",
              "#ef3b2c",
              "Under lease",
              "#fb6a4a",
              "Awarded contract",
              "#fc9272",
              "Investment and construction",
              "#fcbba1",
              "Partnership/Joint-venture",
              "#fee0d2",
              // fallback color
              "#ff462e",
            ],
            "circle-opacity": 0.67,
            "circle-stroke-color": [
              "match",
              ["get", "Type"],
              "China-owned",
              "#99000d",
              "Largely-owned by China",
              "#cb181d",
              "Partially-owned by China",
              "#ef3b2c",
              "Under lease",
              "#fb6a4a",
              "Awarded contract",
              "#fc9272",
              "Investment and construction",
              "#fcbba1",
              "Partnership/Joint-venture",
              "#fee0d2",
              // fallback color
              "#ff462e",
            ],
          },
        },
      ],
    },
    {
      id: 7,
      options: {
        center: [66.58, 33.49],
        zoom: 2.41,
      },
      layers: [
        {
          id: "brirailroads",
          type: "line",
          source: "brirailroads",
          layout: {
            "line-cap": "round",
            "line-join": "round",
          },
          paint: {
            "line-color": "#ff2424",
            "line-width": 2,
          },
        },
        {
          id: "brirailstops",
          type: "circle",
          source: "brirailstops",
          paint: {
            "circle-radius": 3,
            "circle-color": "#fff",
            "circle-stroke-color": "#ff2424",
            "circle-stroke-width": 1.5,
          },
        },
        {
          id: "oilpipelines",
          type: "line",
          source: "oilpipelines",
          layout: {
            "line-cap": "round",
            "line-join": "round",
          },
          paint: {
            "line-color": "#58618d",
            "line-width": 5,
          },
        },
        {
          id: "gaspipelines",
          type: "line",
          source: "gaspipelines",
          layout: {
            "line-cap": "round",
            "line-join": "round",
          },
          paint: {
            "line-color": "#949db8",
            "line-width": 5,
          },
        },
        {
          id: "ports",
          type: "circle",
          source: "ports",
          paint: {
            "circle-radius": [
              "interpolate",
              ["exponential", 0.5],
              ["zoom"],
              1,
              2,
              2.99,
              4,
              3,
              5,
              22,
              5,
            ],
            "circle-color": "#479a89",
            "circle-stroke-color": "#479a89",
            "circle-stroke-width": 1,
            "circle-stroke-opacity": 1,
          },
        },
      ],
    },
  ],
  camera: {
    "2-2": {
      center: { lon: -93.1278, lat: 37.93079 },
      zoom: 4.52,
      pitch: 48.0,
      bearing: -15.2,
    },
    "2-3": {
      center: { lon: 57.23748, lat: 33.56816 },
      zoom: 4.74,
      pitch: 47.0,
      bearing: -15.28,
    },
    "2-4": {
      center: { lon: 32.88111, lat: 49.05974 },
      zoom: 5.6,
      pitch: 0.0,
      bearing: 0.0,
    },
  },
};

const mutations = {};

const actions = {};

const getters = {
  mapOptions: (state) => (viewId) => state.camera[viewId],
  mapLayers: (state) => (viewId) =>
    state.settings.find((view) => view.id === viewId).layers,
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
