const state = {
  page: 1,
  step: 0,
  cameraView: 0,
  year: 1949,
};

const mutations = {
  setPage(state, page) {
    state.page = page;
  },
  setStep(state, step) {
    state.step = step;
  },
  setCameraView(state, cameraViewId) {
    state.cameraView = cameraViewId;
  },
  setYear(state, year) {
    state.year = year;
  },
};

const actions = {
  updatePage({ commit }, currentPage) {
    commit("setPage", currentPage);
  },
  updateStep({ commit }, currentStep) {
    commit("setStep", currentStep);
  },
  updateCameraView({ commit }, cameraViewId) {
    commit("setCameraView", cameraViewId);
  },
  updateYear({ commit }, currentYear) {
    commit("setYear", currentYear);
  },
};

const getters = {
  currentPage: (state) => state.page,
  step: (state) => state.step,
  cameraView: (state) => state.cameraView,
  currentYear: (state) => state.year,
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
