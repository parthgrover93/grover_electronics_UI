import axios from "axios";
//const ROOT_URL = "http://localhost:8080/ge/api";
const ROOT_URL = "https://ge-backend-deploy.herokuapp.com";

export default {
  login: function(request) {
    return axios.post(`${ROOT_URL}/dashboard/auth/login`, request);
  },

  createCustomer: function(request, token) {
    return axios.post(`${ROOT_URL}/dashboard/customer/create`, request, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },

  updateCustomer: function(request, token) {
    return axios.post(`${ROOT_URL}/dashboard/customer/update`, request, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },

  fetchAllActiveCustomer: function(token) {
    return axios.get(`${ROOT_URL}/dashboard/customer/getAllActiveCustomer`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },

  fetchAllInActiveCustomer: function(token) {
    return axios.get(`${ROOT_URL}/dashboard/customer/getAllInActiveCustomer`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },

  fetchCustomer: function(customerId, token) {
    return axios.get(`${ROOT_URL}/dashboard/customer/getCustomer`, {
      params: { customerId: customerId },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },

  deleteCustomer: function(token, customerId) {
    return axios.get(`${ROOT_URL}/dashboard/customer/deleteCustomer`, {
      params: { customerId: customerId },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },

  fetchAllDeletedCustomer: function(token) {
    return axios.get(`${ROOT_URL}/dashboard/customer/getAllDeletedCustomer`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },

  createEMI: function(request, token) {
    return axios.post(`${ROOT_URL}/dashboard/emi/createEmi`, request, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },

  customerDefaulter: function(token) {
    return axios.get(`${ROOT_URL}/dashboard/customer/customerDefaulter`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },

  createExpenditure: function(request, token) {
    return axios.post(`${ROOT_URL}/dashboard/expenditure/create`, request, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },

  fetchExpenditure: function(request, token) {
    return axios.get(`${ROOT_URL}/dashboard/expenditure/fetchExpenditure`, {
      params: { expMonthYear: request },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
  fetchCustomerByMonth: function(request, token) {
    return axios.get(`${ROOT_URL}/dashboard/customer/fetchCustomerByMonth`, {
      params: { productMonthYear: new Date(request) },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
};
