import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    limit: 50,
    offset: 0,
    fetchedData: [],
    currentFeed: [],
    displayPopup: false,
    popupData: {},
  },
  mutations: {
    setData(state, data) {
      state.fetchedData = data;
    },
    setCurrentFeed(state) {
      state.currentFeed = state.fetchedData.slice(state.offset, state.offset + 10);
    },
    setPopup(state, data) {
      state.popupData = data;
    },
    toggleDisplay(state) {
      state.displayPopup = state.displayPopup ? false : true;
    },
    setOffset(state, value) {
      state.offset = value;
    },
  },
  actions: {
    fetchData(context) {
      fetch(`https://api.spacexdata.com/v3/launches?limit=${context.state.limit}`)
        .then((resp) => {
          return resp.json();
        })
        .then((data) => {
          context.commit("setData", data);
          context.commit("setCurrentFeed");
        });
    },
    showPopup(context, popupObj) {
      context.commit("setPopup", popupObj);
      context.commit("toggleDisplay");
    },
  },
  modules: {},
});
