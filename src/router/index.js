import Vue from "vue";
import VueRouter from "vue-router";
import CustomerList from "../components/Customer/Index";
import LandingPage from "../components/LandingPage/Index";
import CreateCustomer from "../components/Customer/CreateCustomer"
import UpdateCustomer from "../components/Customer/UpdateCustomer"
import CreateExpenditure from "../components/Expenditure/Index"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "LandingPage",
    component: LandingPage
  },
  {
      path: "/customerList",
      name: "CustomerList",
      component: CustomerList
    },

    {
      path: "/createcustomer",
      name: "CreateCustomer",
      component: CreateCustomer
    },

    {
      path: "/createExpenditure",
      name: "CreateExpenditure",
      component: CreateExpenditure
    },

    {
      path: "/updateCustomer",
      name: "UpdateCustomer",
      component: UpdateCustomer
    },
  
]
const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
  });
  
  export default router;