import dashboardApi from "../../api/groverElectronicsApi";
import Toast from "../../components/common/Toast";

const state = {
  token: null,
  message: null,
  userDetails: null,
};

const getters = {
  getLoginStatus: function(state) {
    if (state.token) {
      return true;
    } else {
      return false;
    }
  },
  getToken: function(state) {
    return state.token;
  },
  getUserDetails: function(state) {
    return state.userDetails;
  },
  getMessage: function(state) {
    return state.message;
  },
};

const mutations = {
  setToken: function(state, token) {
    state.token = token;
    state.message = null;
  },

  setMessage: function(state, message) {
    state.message = message;
    state.token = null;
  },
  setUserDetails: function(state, userDetails) {
    state.userDetails = userDetails;
  },
};
const actions = {
  async login({ commit, dispatch }, request) {
    await dashboardApi
      .login(request)
      .then((response) => {
        if (response.status === 200 && response.data.token) {
          response.data.user.userFullName =
            response.data.user.userFirstName +
            " " +
            response.data.user.userLastName;
          commit("setUserDetails", JSON.stringify(response.data.user), {
            root: true,
          });
          commit("setToken", response.data.token);
          Toast.showToast("Welcome " + response.data.user.userFullName, "S");
        } else {
          Toast.showToast(
            "Login Failed, Please try with valid Credentials",
            "E"
          );
          commit("setMessage", response.data.message);
        }
      })
      .catch((err) => {
        dispatch("handleException", err.response, { root: true });
      });
  },

  logout: function({ commit }) {
    commit("setToken", null);
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
