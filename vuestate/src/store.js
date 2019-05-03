import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  // set initial state
  state: {
    title: "Comics",
    // eslint-disable-next-line prettier/prettier
    links: [
      "http://marvel.com",
      "http://dccomics.com",
      "http://darkhorse.com"]
  },
  // define getters which are computed properties for stores -- returns data from store back to components
  getters: {
    countLinks: state => {
      return state.links.length;
    }
  },
  // these act as setters -- sets the data into the state -- synchronous
  mutations: {
    ADD_LINK: (state, link) => {
      state.links.push(link);
    },
    REMOVE_LINK: (state, link) => {
      state.links.splice(link, 1);
    },
    REMOVE_ALL: state => {
      state.links = [];
    }
  },
  // these perform/commit the mutations -- asynchronous
  actions: {
    removeLink: (context, link) => {
      context.commit("REMOVE_LINK", link);
    },
    removeAll({ commit }) {
      //uses argument destructuring to pass in commit which makes code simpler
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          commit("REMOVE_ALL");
          resolve();
        }, 1000);
      });
    }
  }
});
