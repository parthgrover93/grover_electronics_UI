import Vue from "vue";
import Vuex from "vuex";
import Login from "../store/module/login";
import Error from "../store/module/error";
import Customer from "../store/module/customer";
import Expenditure from "../store/module/expenditure";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [
    createPersistedState({
      storage: window.sessionStorage,
    }),
  ],
  state: {},
  mutations: {},
  actions: {},
  modules: {
    Login,
    Error,
    Customer,
    Expenditure,
  },
});
