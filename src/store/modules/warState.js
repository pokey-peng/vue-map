// state
const state = {
  chapter: {
    "3-4": {
      name: "海湾",
      index: null,
      onStepEnter: [],
    },
    "3-5": {
      index: [5],
      onStepEnter: [],
    },
    "3-6": {
      index: [2],
      onStepEnter: [],
      onStepExit: [{}, {}, {}, {}, {}],
      layers: {},
    },
    "3-7": {
      index: [4],
      onStepEnter: [
        {
          layer: "final Europe",
          opacity: ["match", ["get", "JoinOrder"], [2], 0.8, 0],
        },
      ],
      onStepExit: {},
      layers: {},
    },
    "3-8": {
      index: [3],
      onStepEnter: [],
      onStepExit: {},
      layers: {},
    },
    "3-9": {
      index: [1],
      onStepEnter: [
        {
          layer: "final Europe",
          opacity: ["match", ["get", "JoinOrder"], [5], 1, 0],
        },
      ],
      onStepExit: {},
      layers: {},
    },
    "3-10": {
      index: [0],
      onStepEnter: [
        {
          layer: "final Europe",
          opacity: ["match", ["get", "JoinOrder"], [7, 8, 6], 1, 0],
        },
      ],
      onStepExit: {},
      layers: {},
    },
    "3-11": {
      index: [0, 1, 2, 3, 4, 5],
      onStepEnter: [],
      onStepExit: {},
      layers: {},
    },
  },
  defaultOptions: {},
};

const mutations = {};

const actions = {};

const getters = {
  warOptions: (state) => (viewId) => {
    if (viewId in state.chapter) {
      //console.log(viewId);
      return state.chapter[viewId];
    } else {
      return null;
    }
  },
  warIndexs: (state) => (viewId) => {
    return state.chapter[viewId] ? state.chapter[viewId].index : null;
  },
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
