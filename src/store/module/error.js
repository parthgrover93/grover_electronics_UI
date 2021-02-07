import Toast from "../../components/common/Toast";

const mutations = {
  setErrorMsg: function(state, errorMsg) {
    state.errorMsg = errorMsg;
  },
};
const actions = {
  // Vuex Action to handle exception
  handleException({ commit }, err) {
    if (err.data.status === 401) {
      // if Customized message is set in backend, same can be shown here using err.data.message property.
      if (err.data.isGenericError && err.data.isGenericError === true) {
        Toast.showToast("Generic error message for 401 error code", "E");
      } else {
        Toast.showToast(err.data.message, "E");
      }
    } else if (err.data.status === 403) {
      if (err.data.isGeneric && err.data.isGeneric === true) {
        Toast.showToast("Generic error message for 403 error code", "E");
      } else {
        Toast.showToast(err.data.message, "E");
      }
    } else if (err.data.status === 400) {
      if (err.data.isGeneric && err.data.isGeneric === true) {
        Toast.showToast("Generic error message for 400 error code", "E");
      } else {
        Toast.showToast(err.data.message, "E");
      }
    } else if (err.data.status === 404) {
      if (err.data.isGeneric && err.data.isGeneric === true) {
        Toast.showToast("Generic error message for 404 error code", "E");
      } else {
        Toast.showToast(err.data.message, "E");
      }
    } else if (err.data.status === 405) {
      if (err.data.isGeneric && err.data.isGeneric === true) {
        Toast.showToast("Generic error message for 405 error code", "E");
      } else {
        Toast.showToast(err.data.message, "E");
      }
    } else if (err.data.status === 406) {
      if (err.data.isGeneric && err.data.isGeneric === true) {
        Toast.showToast("Generic error message for 406 error code", "E");
      } else {
        Toast.showToast(err.data.message, "E");
      }
    } else if (err.data.status === 407) {
      if (err.data.isGeneric && err.data.isGeneric === true) {
        Toast.showToast("Generic error message for 407 error code", "E");
      } else {
        Toast.showToast(err.data.message, "E");
      }
    } else if (err.data.status === 408) {
      if (err.data.isGeneric && err.data.isGeneric === true) {
        Toast.showToast("Generic error message for 408 error code", "E");
      } else {
        Toast.showToast(err.data.message, "E");
      }
    } else if (err.data.status === 409) {
      if (err.data.isGeneric && err.data.isGeneric === true) {
        Toast.showToast("Generic error message for 409 error code", "E");
      } else {
        Toast.showToast(err.data.message, "E");
      }
    } else if (err.data.status === 410) {
      if (err.data.isGeneric && err.data.isGeneric === true) {
        Toast.showToast("Generic error message for 410 error code", "E");
      } else {
        Toast.showToast(err.data.message, "E");
      }
    } else if (err.data.status === 411) {
      if (err.data.isGeneric && err.data.isGeneric === true) {
        Toast.showToast("Generic error message for 411 error code", "E");
      } else {
        Toast.showToast(err.data.message, "E");
      }
    } else if (err.data.status === 412) {
      if (err.data.isGeneric && err.data.isGeneric === true) {
        Toast.showToast("Generic error message for 412 error code", "E");
      } else {
        Toast.showToast(err.data.message, "E");
      }
    } else if (err.data.status === 413) {
      if (err.data.isGeneric && err.data.isGeneric === true) {
        Toast.showToast("Generic error message for 413 error code", "E");
      } else {
        Toast.showToast(err.data.message, "E");
      }
    } else if (err.data.status === 414) {
      if (err.data.isGeneric && err.data.isGeneric === true) {
        Toast.showToast("Generic error message for 414 error code", "E");
      } else {
        Toast.showToast(err.data.message, "E");
      }
    } else if (err.data.status === 415) {
      if (err.data.isGeneric && err.data.isGeneric === true) {
        Toast.showToast("Generic error message for 415 error code", "E");
      } else {
        Toast.showToast(err.data.message, "E");
      }
    } else if (err.data.status === 416) {
      if (err.data.isGeneric && err.data.isGeneric === true) {
        Toast.showToast("Generic error message for 416 error code", "E");
      } else {
        Toast.showToast(err.data.message, "E");
      }
    } else if (err.data.status === 417) {
      if (err.data.isGeneric && err.data.isGeneric === true) {
        Toast.showToast("Generic error message for 417 error code", "E");
      } else {
        Toast.showToast(err.data.message, "E");
      }
    } else if (err.data.status === 418) {
      if (err.data.isGeneric && err.data.isGeneric === true) {
        Toast.showToast("Generic error message for 418 error code", "E");
      } else {
        Toast.showToast(err.data.message, "E");
      }
    } else if (err.data.status === 421) {
      if (err.data.isGeneric && err.data.isGeneric === true) {
        Toast.showToast("Generic error message for 421 error code", "E");
      } else {
        Toast.showToast(err.data.message, "E");
      }
    } else if (err.data.status === 422) {
      if (err.data.isGeneric && err.data.isGeneric === true) {
        Toast.showToast("Generic error message for 422 error code", "E");
      } else {
        Toast.showToast(err.data.message, "E");
      }
    } else if (err.data.status === 423) {
      if (err.data.isGeneric && err.data.isGeneric === true) {
        Toast.showToast("Generic error message for 423 error code", "E");
      } else {
        Toast.showToast(err.data.message, "E");
      }
    } else if (err.data.status === 424) {
      if (err.data.isGeneric && err.data.isGeneric === true) {
        Toast.showToast("Generic error message for 424 error code", "E");
      } else {
        Toast.showToast(err.data.message, "E");
      }
    } else if (err.data.status === 425) {
      if (err.data.isGeneric && err.data.isGeneric === true) {
        Toast.showToast("Generic error message for 425 error code", "E");
      } else {
        Toast.showToast(err.data.message, "E");
      }
    } else if (err.data.status === 426) {
      if (err.data.isGeneric && err.data.isGeneric === true) {
        Toast.showToast("Generic error message for 426 error code", "E");
      } else {
        Toast.showToast(err.data.message, "E");
      }
    } else if (err.data.status === 428) {
      if (err.data.isGeneric && err.data.isGeneric === true) {
        Toast.showToast("Generic error message for 428 error code", "E");
      } else {
        Toast.showToast(err.data.message, "E");
      }
    } else if (err.data.status === 429) {
      if (err.data.isGeneric && err.data.isGeneric === true) {
        Toast.showToast("Generic error message for 429 error code", "E");
      } else {
        Toast.showToast(err.data.message, "E");
      }
    } else if (err.data.status === 431) {
      if (err.data.isGeneric && err.data.isGeneric === true) {
        Toast.showToast("Generic error message for 431 error code", "E");
      } else {
        Toast.showToast(err.data.message, "E");
      }
    } else if (err.data.status === 451) {
      if (err.data.isGeneric && err.data.isGeneric === true) {
        Toast.showToast("Generic error message for 451 error code", "E");
      } else {
        Toast.showToast(err.data.message, "E");
      }
    } else if (err.status === 500) {
      if (
        (err.data.isGeneric && err.data.isGeneric === true) ||
        err.data.message
      ) {
        Toast.showToast(err.data.message, "E");
      } else {
        Toast.showToast("Generic error message for 500 error code", "E");
      }
    } else if (err.data.status === 501) {
      if (err.data.isGeneric && err.data.isGeneric === true) {
        Toast.showToast("Generic error message for 501 error code", "E");
      } else {
        Toast.showToast(err.data.message, "E");
      }
    } else if (err.data.status === 502) {
      if (err.data.isGeneric && err.data.isGeneric === true) {
        Toast.showToast("Generic error message for 502 error code", "E");
      } else {
        Toast.showToast(err.data.message, "E");
      }
    } else if (err.data.status === 503) {
      if (err.data.isGeneric && err.data.isGeneric === true) {
        Toast.showToast("Generic error message for 503 error code", "E");
      } else {
        Toast.showToast(err.data.message, "E");
      }
    } else if (err.data.status === 504) {
      if (err.data.isGeneric && err.data.isGeneric === true) {
        Toast.showToast("Generic error message for 504 error code", "E");
      } else {
        Toast.showToast(err.data.message, "E");
      }
    } else if (err.data.status === 505) {
      if (err.data.isGeneric && err.data.isGeneric === true) {
        Toast.showToast("Generic error message for 505 error code", "E");
      } else {
        Toast.showToast(err.data.message, "E");
      }
    } else if (err.data.status === 506) {
      if (err.data.isGeneric && err.data.isGeneric === true) {
        Toast.showToast("Generic error message for 506 error code", "E");
      } else {
        Toast.showToast(err.data.message, "E");
      }
    } else if (err.data.status === 507) {
      if (err.data.isGeneric && err.data.isGeneric === true) {
        Toast.showToast("Generic error message for 507 error code", "E");
      } else {
        Toast.showToast(err.data.message, "E");
      }
    } else if (err.data.status === 508) {
      if (err.data.isGeneric && err.data.isGeneric === true) {
        Toast.showToast("Generic error message for 508 error code", "E");
      } else {
        Toast.showToast(err.data.message, "E");
      }
    } else if (err.data.status === 510) {
      if (err.data.isGeneric && err.data.isGeneric === true) {
        Toast.showToast("Generic error message for 510 error code", "E");
      } else {
        Toast.showToast(err.data.message, "E");
      }
    } else if (err.data.status === 511) {
      if (err.data.isGeneric && err.data.isGeneric === true) {
        Toast.showToast("Generic error message for 511 error code", "E");
      } else {
        Toast.showToast(err.data.message, "E");
      }
    } else {
      Toast.showToast("Unknown Error Occured.", "E");
    }
    commit("setErrorMsg", err.data.response);
  },
};

export default {
  mutations,
  actions,
};
