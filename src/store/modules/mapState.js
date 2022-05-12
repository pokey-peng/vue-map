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
  camera: {
    "2-1": {
      center: { lon: -36, lat: 45 },
      zoom: 2.77,
      pitch: 0,
      bearing: 0,
    },
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
  mapOptions: (state) => (viewId) => state.camera[viewId] ?? {},
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
