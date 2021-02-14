import dashboardApi from "../../api/groverElectronicsApi";
import Toast from "../../components/common/Toast";
import router from "../../router";

function formatDate(date) {
  var formattedDate = new Date(date);
  var formattedDateText = formattedDate.getFullYear() + "-";
  if (formattedDate.getMonth() + 1 < 10) {
    formattedDateText =
      formattedDateText + "0" + (formattedDate.getMonth() + 1) + "-";
  } else {
    formattedDateText =
      formattedDateText + (formattedDate.getMonth() + 1) + "-";
  }
  if (formattedDate.getDate() < 10) {
    formattedDateText = formattedDateText + "0" + formattedDate.getDate();
  } else {
    formattedDateText = formattedDateText + formattedDate.getDate();
  }
  return formattedDateText;
}

const state = {
  customerDetails: null,
  activeCustomerDetails: null,
  inactiveCustomerDetails: null,
  emiDetails: null,
  customerDetailsProduct: null,
  customerDetailsSales: null,
  productDate: null,
  salesDate: null,
};

const getters = {
  getCustomerDetails: function(state) {
    return state.customerDetails;
  },
  getActiveCustomerDetails: function(state) {
    return state.activeCustomerDetails;
  },
  getInActiveCustomerDetails: function(state) {
    return state.inactiveCustomerDetails;
  },
  getEmiDetails: function(state) {
    return state.emiDetails;
  },
  getCustomerDetailsProduct: function(state) {
    return state.customerDetailsProduct;
  },
  getProductDate: function(state) {
    return state.productDate;
  },
  getCustomerDetailsSales: function(state) {
    return state.customerDetailsSales;
  },
  getSalesDate: function(state) {
    return state.salesDate;
  },
};

const mutations = {
  setCustomerDetails: function(state, customerDetails) {
    state.customerDetails = customerDetails;
  },
  setActiveCustomerDetails: function(state, activeCustomerDetails) {
    state.activeCustomerDetails = activeCustomerDetails;
  },
  setInActiveCustomerDetails: function(state, inactiveCustomerDetails) {
    state.inactiveCustomerDetails = inactiveCustomerDetails;
  },
  setEmiDetails: function(state, emiDetails) {
    state.emiDetails = emiDetails;
  },
  setCustomerDetailsProduct: function(state, customerDetailsProduct) {
    state.customerDetailsProduct = customerDetailsProduct;
  },
  setProductDate: function(state, productDate) {
    state.productDate = productDate;
  },
  setCustomerDetailsSales: function(state, customerDetailsSales) {
    state.customerDetailsSales = customerDetailsSales;
  },
  setSalesDate: function(state, salesDate) {
    state.salesDate = salesDate;
  },
};

const actions = {
  async createCustomer({ dispatch, rootState }, request) {
    if (request.customerEmiStartDate) {
      request.customerEmiEndDate = new Date(request.customerEmiEndDate);
    }
    await dashboardApi
      .createCustomer(request, rootState.Login.token)
      .then((response) => {
        if (response.status === 200 && response.data) {
          router.push("/customerList").catch(() => {});
          Toast.showToast("Customer Information Saved Successfully", "S");
        } else {
          Toast.showToast("Something went wrong", "E");
        }
      })
      .catch((err) => {
        dispatch("handleException", err.response, { root: true });
      });
  },

  async updateCustomer({ dispatch, rootState }, request) {
    await dashboardApi
      .updateCustomer(request, rootState.Login.token)
      .then((response) => {
        if (response.status === 200 && response.data) {
          router.push("/customerList").catch(() => {});
          Toast.showToast("Customer Information Updated Successfully", "S");
        } else {
          Toast.showToast("Something went wrong", "E");
        }
      })
      .catch((err) => {
        dispatch("handleException", err.response, { root: true });
      });
  },

  async fetchAllActiveCustomer({ commit, dispatch, rootState }) {
    commit("setActiveCustomerDetails", null);
    await dashboardApi
      .fetchAllActiveCustomer(rootState.Login.token)
      .then((response) => {
        if (response.status === 200 && response.data) {
          if (response.data.length > 0) {
            for (var i = 0; i < response.data.length; i++) {
              if (response.data[i].customerEmiStartDate) {
                response.data[i].customerEmiStartDate = formatDate(
                  response.data[i].customerEmiStartDate
                );
              }
              if (response.data[i].createdDate) {
                response.data[i].createdDate = formatDate(
                  response.data[i].createdDate
                );
              }
              if (response.data[i].customerEmiEndDate) {
                response.data[i].customerEmiEndDate = formatDate(
                  response.data[i].customerEmiEndDate
                );
              }
              if (response.data[i].customerDefaulter === true) {
                response.data[i].customerDefaulter = "Yes";
              } else if (response.data[i].customerDefaulter === false) {
                response.data[i].customerDefaulter = "No";
              }
              if (response.data[i].customerEmiStatus === true) {
                response.data[i].customerEmiStatus = "Yes";
              } else if (response.data[i].customerEmiStatus === false) {
                response.data[i].customerEmiStatus = "No";
              }
              if (response.data[i].customerProductsList) {
                response.data[i].customerProductsList =
                  response.data[i].customerProductsList +
                  " - " +
                  "( " +
                  response.data[i].customerProductTotalCount +
                  " )";
              }
            }
          }
          commit("setActiveCustomerDetails", JSON.stringify(response.data));
        } else {
          Toast.showToast("Something went wrong", "E");
        }
      })
      .catch((err) => {
        dispatch("handleException", err.response, { root: true });
      });
  },

  async fetchAllInActiveCustomer({ commit, dispatch, rootState }) {
    commit("setInActiveCustomerDetails", null);
    await dashboardApi
      .fetchAllInActiveCustomer(rootState.Login.token)
      .then((response) => {
        if (response.status === 200 && response.data) {
          if (response.data.length > 0) {
            for (var i = 0; i < response.data.length; i++) {
              if (response.data[i].customerEmiStartDate) {
                response.data[i].customerEmiStartDate = formatDate(
                  response.data[i].customerEmiStartDate
                );
              }
              if (response.data[i].createdDate) {
                response.data[i].createdDate = formatDate(
                  response.data[i].createdDate
                );
              }
              if (response.data[i].customerEmiEndDate) {
                response.data[i].customerEmiEndDate = formatDate(
                  response.data[i].customerEmiEndDate
                );
              }
              if (response.data[i].customerDefaulter === true) {
                response.data[i].customerDefaulter = "Yes";
              } else if (response.data[i].customerDefaulter === false) {
                response.data[i].customerDefaulter = "No";
              }
              if (response.data[i].customerEmiStatus === true) {
                response.data[i].customerEmiStatus = "Yes";
              } else if (response.data[i].customerEmiStatus === false) {
                response.data[i].customerEmiStatus = "No";
              }
            }
          }
          commit("setInActiveCustomerDetails", JSON.stringify(response.data));
        } else {
          Toast.showToast("Something went wrong", "E");
        }
      })
      .catch((err) => {
        dispatch("handleException", err.response, { root: true });
      });
  },

  async fetchCustomer({ commit, dispatch, rootState }, customerId) {
    await dashboardApi
      .fetchCustomer(customerId, rootState.Login.token)
      .then((response) => {
        if (response.status === 200 && response.data) {
          if (response.data.customerEmiStartDate) {
            response.data.customerEmiStartDate = formatDate(
              response.data.customerEmiStartDate
            );
          }
          if (response.data.customerEmiEndDate) {
            response.data.customerEmiEndDate = formatDate(
              response.data.customerEmiEndDate
            );
          }
          if (response.data.customerProductsList) {
            response.data.customerProductsList = response.data.customerProductsList.split(
              ","
            );
          }
          response.data.totalEmiAmountPaid = 0;
          response.data.totalAmountLeft = 0;
          response.data.totalAmountPaid = 0;

          if (response.data.emiList) {
            var total = 0;
            for (var i = 0; i < response.data.emiList.length; i++) {
              var date = new Date(response.data.emiList[i].createdDate);
              var str = date.toString();
              response.data.emiList[i].createdDate = str
                .split(" ", 5)
                .join(" ");

              total += parseInt(response.data.emiList[i].emiAmount);

              if (response.data.emiList[i].emiDate) {
                response.data.emiList[i].emiDate = formatDate(
                  response.data.emiList[i].emiDate
                );
              }
            }
            response.data.totalEmiAmountPaid = total;
            response.data.totalAmountPaid =
              parseInt(response.data.customerPaymentDownPayment) +
              response.data.totalEmiAmountPaid;
            response.data.totalAmountLeft =
              parseInt(response.data.customerPaymentTotalPrice) -
              response.data.totalAmountPaid;
          }
          commit("setCustomerDetails", JSON.stringify(response.data));
          router.push("/updateCustomer").catch(() => {});
        } else {
          Toast.showToast("Something went wrong fetch", "E");
        }
      })
      .catch((err) => {
        dispatch("handleException", err.response, { root: true });
      });
  },

  async createEMI({ dispatch, rootState }, request) {
    await dashboardApi
      .createEMI(request, rootState.Login.token)
      .then((response) => {
        if (response.status === 200 && response.data) {
          Toast.showToast("Emi Details Saved Succesfully", "S");
          dispatch("fetchCustomer", response.data.customerId);
        } else {
          Toast.showToast("Something went wrong 24", "E");
        }
      })
      .catch((err) => {
        dispatch("handleException", err.response, { root: true });
      });
  },

  async customerDefaulter({ dispatch, rootState }) {
    await dashboardApi
      .customerDefaulter(rootState.Login.token)
      .catch((err) => {
        dispatch("handleException", err.response, { root: true });
      });
  },

  async fetchCustomerByMonth(
    { commit, dispatch, rootState },
    productMonthYear
  ) {
    dispatch("setProductDate", productMonthYear);
    commit("setCustomerDetailsProduct", null);
    await dashboardApi
      .fetchCustomerByMonth(productMonthYear, rootState.Login.token)
      .then((response) => {
        if (response.status === 200 && response.data) {
          commit("setCustomerDetailsProduct", JSON.stringify(response.data));
        } else {
          commit("setCustomerDetailsProduct", JSON.stringify({}));
        }
      })
      .catch((err) => {
        dispatch("handleException", err.response, { root: true });
      });
  },

  async setProductDate({ commit }, productMonthYear) {
    commit("setProductDate", productMonthYear);
  },

  async fetchCustomerByMonthSales(
    { commit, dispatch, rootState },
    productMonthYear
  ) {
    dispatch("setSalesDate", productMonthYear);
    commit("setCustomerDetailsSales", null);
    await dashboardApi
      .fetchCustomerByMonth(productMonthYear, rootState.Login.token)
      .then((response) => {
        if (response.status === 200 && response.data) {
          commit("setCustomerDetailsSales", JSON.stringify(response.data));
        } else {
          commit("setCustomerDetailsSales", JSON.stringify({}));
        }
      })
      .catch((err) => {
        dispatch("handleException", err.response, { root: true });
      });
  },

  async setSalesDate({ commit }, productMonthYear) {
    commit("setSalesDate", productMonthYear);
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
