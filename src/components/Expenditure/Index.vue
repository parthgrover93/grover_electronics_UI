<template>
  <div v-if="JSON.parse(this.$store.state.Expenditure.expenditureDetails)">
    <CreateExpenditure />
  </div>
  <div v-else>
    <Loading />
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Loading from "../common/Loading.vue";
import CreateExpenditure from "./CreateExpenditure";
export default {
  components: {
    CreateExpenditure,
    Loading,
  },
  methods: {
    ...mapActions(["fetchExpenditure"]),
  },
  created() {
    var expMonthYear =
      new Date().getFullYear() + "-" + (parseInt(new Date().getMonth()) + 1);
    if (expMonthYear.length < 7) {
      expMonthYear =
        expMonthYear.substring(0, 5) + "0" + expMonthYear.substring(5, 7);
    }
    this.fetchExpenditure(expMonthYear);
  },
};
</script>

<style scoped>
</style>