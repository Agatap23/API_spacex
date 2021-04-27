import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    launchData: [],
    displayPopup: false,
    popupData: {},
  },
  mutations: {
    setData(state, data) {
      state.launchData = data;
    },
    setPopup(state, data) {
      state.popupData = data;
    },
    toggleDisplay(state) {
      state.displayPopup = state.displayPopup ? false : true;
    },
  },
  actions: {
    fetchData(context) {
      fetch("https://api.spacexdata.com/v3/launches")
        .then((resp) => {
          return resp.json();
        })
        .then((data) => {
          context.commit("setData", data.slice(0, 20));
        });
    },
    showPopup(context, popupObj) {
      context.commit("setPopup", popupObj);
      context.commit("toggleDisplay");
    },
  },
  modules: {},
});
