<template>
  <div
    v-if="
      JSON.parse(this.$store.state.Customer.activeCustomerDetails) &&
      JSON.parse(this.$store.state.Customer.inactiveCustomerDetails)
    "
  ><CustomerList/>
  </div>
  <div v-else>
    <Loading />
  </div>
</template>

<script>
import Loading from "../common/Loading";
import CustomerList from "../Customer/CustomerList"
import { mapActions } from "vuex";

export default {
  components: {
    Loading,
    CustomerList,
  },

  methods: {
    ...mapActions(["fetchAllActiveCustomer", "fetchAllInActiveCustomer"]),
  },
  created() {
    this.fetchAllActiveCustomer();
    this.fetchAllInActiveCustomer();
  },
};
</script>

<style scoped>
</style>