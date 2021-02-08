<template>
  <div
    v-if="
      JSON.parse(this.$store.state.Expenditure.expenditureDetails) &&
      JSON.parse(this.$store.state.Customer.customerDetailsProduct) &&
      JSON.parse(this.$store.state.Customer.customerDetailsSales)
    "
  >
    <AdminLandingPage />
  </div>
  <div v-else>
    <Loading />
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Loading from "../common/Loading.vue";
import AdminLandingPage from "../LandingPage/AdminLandingPage";
export default {
  components: {
    AdminLandingPage,
    Loading,
  },
  methods: {
    ...mapActions([
      "fetchExpenditure",
      "fetchCustomerByMonth",
      "fetchCustomerByMonthSales",
    ]),
  },
  created() {
    var MonthYear =
      new Date().getFullYear() + "-" + (parseInt(new Date().getMonth()) + 1);
    if (MonthYear.length < 7) {
      MonthYear = MonthYear.substring(0, 5) + "0" + MonthYear.substring(5, 7);
    }
    this.fetchExpenditure(MonthYear);
    this.fetchCustomerByMonth(MonthYear);
    this.fetchCustomerByMonthSales(MonthYear);
  },
};
</script>


<style scoped>
</style>