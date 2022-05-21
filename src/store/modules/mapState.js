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
  ],
  chapter: {
    "2-0": {
      camera: {
        center: [-28, 39],
        zoom: 1.89,
        pitch: 0.0,
        bearing: 0.0,
        speed: 0.6,
        curve: 1.0,
      },
      onStepEnter: [
        {
          layer: "NOTA",
          opacity: 0,
        },
      ],
    },
    "2-1": {
      camera: {
        center: { lon: -57.25676, lat: 53.08322 },
        zoom: 2.95,
        pitch: 0.0,
        bearing: 0.0,
        speed: 0.6,
        curve: 1.0,
      },
      onStepEnter: [
        {
          layer: "NOTA",
          opacity: ["case", ["==", ["get", "JoinOrder"], 0], 0.8, 0],
        },
      ],
    },
    "2-2": {
      camera: {
        center: { lon: 16.76982, lat: 41.4426 },
        zoom: 4.41,
        pitch: 0.0,
        bearing: 0.0,
        speed: 0.6,
        curve: 1.0,
      },
      onStepEnter: [
        {
          layer: "NOTA",
          opacity: ["match", ["get", "JoinOrder"], [1, 3], 0.8, 0],
        },
      ],
      onStepExit: [{}, {}, {}, {}, {}],
      layers: {},
    },
    "2-3": {
      camera: {
        center: { lon: 13.53608, lat: 54.29591 },
        zoom: 5.45,
        pitch: 44.5,
        bearing: -59.37,
        speed: 0.6,
        curve: 1.0,
      },
      onStepEnter: [
        {
          layer: "NOTA",
          opacity: ["match", ["get", "JoinOrder"], [2], 0.8, 0],
        },
      ],
      onStepExit: {},
      layers: {},
    },
    "2-4": {
      camera: {
        center: { lon: 21.14184, lat: 51.32693 },
        zoom: 5.45,
        pitch: 50.5,
        bearing: -7.37,
        speed: 0.6,
        curve: 1.0,
      },
      onStepEnter: [
        { layer: "NOTA", opacity: ["match", ["get", "JoinOrder"], [4], 1, 0] },
      ],
      onStepExit: {},
      layers: {},
    },
    "2-5": {
      camera: {
        center: { lon: 32.99805, lat: 51.98501 },
        zoom: 4.41,
        pitch: 0.0,
        bearing: -7.37,
        speed: 0.6,
        curve: 1.0,
      },
      onStepEnter: [
        {
          layer: "NOTA",
          opacity: ["match", ["get", "JoinOrder"], [5], 1, 0],
        },
      ],
      onStepExit: {},
      layers: {},
    },
    "2-6": {
      camera: {
        center: { lon: 19.34255, lat: 43.18557 },
        zoom: 5.32,
        pitch: 28.5,
        bearing: 20.63,
        speed: 0.6,
        curve: 1.0,
      },
      onStepEnter: [
        {
          layer: "NOTA",
          opacity: ["match", ["get", "JoinOrder"], [7, 8, 6], 1, 0],
        },
      ],
      onStepExit: {},
      layers: {},
    },
    "2-7": {
      camera: {
        center: { lon: -58.79705, lat: 53.68704 },
        zoom: 2.65,
        pitch: 0.0,
        bearing: 0.0,
        speed: 0.6,
        curve: 1.0,
      },
      onStepEnter: [
        {
          layer: "NOTA",
          opacity: 1,
        },
      ],
      onStepExit: {},
      layers: {},
    },
  },
};

const mutations = {};

const actions = {};

const getters = {
  mapOptions: (state) => (viewId) => state.chapter[viewId] ?? null,
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
