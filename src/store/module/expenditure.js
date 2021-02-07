import dashboardApi from "../../api/groverElectronicsApi";
import Toast from "../../components/common/Toast";
// import router from "../../router";

// function formatDate(date) {
//   var formattedDate = new Date(date);
//   var formattedDateText = formattedDate.getFullYear() + "-";
//   if (formattedDate.getMonth() + 1 < 10) {
//     formattedDateText =
//       formattedDateText + "0" + (formattedDate.getMonth() + 1) + "-";
//   } else {
//     formattedDateText =
//       formattedDateText + (formattedDate.getMonth() + 1) + "-";
//   }
//   if (formattedDate.getDate() < 10) {
//     formattedDateText = formattedDateText + "0" + formattedDate.getDate();
//   } else {
//     formattedDateText = formattedDateText + formattedDate.getDate();
//   }
//   return formattedDateText;
// }

const state = {
  expenditureDetails: null,
  expenditureDate: null,
};

const getters = {
  getExpenditureDetails: function(state) {
    return state.expenditureDetails;
  },
  getExpenditureDate: function(state) {
    return state.expenditureDate;
  },
};

const mutations = {
  setExpenditureDetails: function(state, expenditureDetails) {
    state.expenditureDetails = expenditureDetails;
  },
  setExpenditureDate: function(state, expenditureDate) {
    state.expenditureDate = expenditureDate;
  },
};

const actions = {
  async createExpenditure({ dispatch, rootState }, request) {
    await dashboardApi
      .createExpenditure(request, rootState.Login.token)
      .then((response) => {
        if (response.status === 200 && response.data) {
          dispatch("fetchExpenditure", request.expMonthYear);
          Toast.showToast("Expenditure Information Saved Successfully", "S");
        } else {
          Toast.showToast("Something went wrong", "E");
        }
      })
      .catch((err) => {
        dispatch("handleException", err.response, { root: true });
      });
  },

  async fetchExpenditure({ commit, dispatch, rootState }, expMonthYear) {
    dispatch("setExpDate", expMonthYear);
    commit("setExpenditureDetails", null);
    await dashboardApi
      .fetchExpenditure(expMonthYear, rootState.Login.token)
      .then((response) => {
        if (response.status === 200 && response.data) {
          commit("setExpenditureDetails", JSON.stringify(response.data));
        } else {
          commit("setExpenditureDetails", JSON.stringify({}));
        }
      })
      .catch((err) => {
        dispatch("handleException", err.response, { root: true });
      });
  },

  async setExpDate({ commit }, expMonthYear) {
    commit("setExpenditureDate", expMonthYear);
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
