<template>
  <div
    v-if="JSON.parse(this.$store.state.Customer.customerDetails)"
    class="m-3 ml-4 mr-4"
  >
    <div
      class="card p-3"
      style="background-color: #e6eefa; color: #4f8ff0"
    >
      <div class="row">
        <div class="form-group col-sm">
          <label for="exampleInputEmail1">Total Amount (to be Paid)</label>
          <h2>
            <span class="badge badge-dark ml-3 border"
              >&#x20b9;
              {{
                JSON.parse(this.$store.state.Customer.customerDetails)
                  .customerPaymentTotalPrice
              }}</span
            >
          </h2>
        </div>
        <div class="form-group col-sm">
          <label for="exampleInputEmail1">EMI Per Month</label>
          <h2>
            <span
              class="badge ml-3 border"
              style="background-color: grey; color: white"
              >&#x20b9;
              {{
                JSON.parse(this.$store.state.Customer.customerDetails)
                  .customerEmiPerMonth
              }}</span
            >
          </h2>
        </div>
        <div class="form-group col-sm">
          <label for="exampleInputEmail1">Down Payment</label>
          <h2>
            <span
              class="badge ml-3"
              style="background-color: #fc9043; color: white"
              >&#x20b9;
              {{
                JSON.parse(this.$store.state.Customer.customerDetails)
                  .customerPaymentDownPayment
              }}</span
            >
          </h2>
        </div>
        <div class="form-group col-sm">
          <label for="exampleInputEmail1">Total EMI Amount</label>
          <h2>
            <span class="badge badge-primary ml-3"
              >&#x20b9;
              {{
                JSON.parse(this.$store.state.Customer.customerDetails)
                  .totalEmiAmountPaid
              }}</span
            >
          </h2>
        </div>

        <div class="form-group col-sm">
          <label for="exampleInputEmail1">Down Payment + EMI</label>
          <h2>
            <span class="badge badge-success ml-3 border"
              >&#x20b9;
              {{
                JSON.parse(this.$store.state.Customer.customerDetails)
                  .totalAmountPaid
              }}</span
            >
          </h2>
        </div>

        <div class="form-group col-sm">
          <label for="exampleInputEmail1">Total Amount Left</label>
          <h2>
            <span class="badge badge-danger ml-3"
              >&#x20b9;
              {{
                JSON.parse(this.$store.state.Customer.customerDetails)
                  .totalAmountLeft
              }}</span
            >
          </h2>
        </div>
      </div>
      <div class="row">
        <div
          class="form-group col-sm"
          v-if="
            JSON.parse(this.$store.state.Customer.customerDetails)
              .totalAmountLeft > 0
          "
        >
          <label for="exampleInputEmail1"
            >EMI Amount <span style="color: red">*</span></label
          >
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter Amount"
            v-model="emiAmount"
            @keypress="isNumber($event)"
            maxlength="8"
          />
        </div>
        <div
          class="form-group col-sm"
          v-if="
            JSON.parse(this.$store.state.Customer.customerDetails)
              .totalAmountLeft > 0
          "
        >
          <label for="exampleInputEmail1"
            >EMI Amount <span style="color: red">*</span></label
          >
          <input
            type="date"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter Amount"
            v-model="emiDateModel"
          />
        </div>
        <div
          v-if="
            JSON.parse(this.$store.state.Customer.customerDetails)
              .totalAmountLeft > 0
          "
          class="form-group col-sm"
          style="margin-top: 33px"
        >
          <button type="button" class="btn btn-primary" @click="submitEMI">
            Submit
          </button>
        </div>
      </div>
      <div class="mt-3">
        <vue-good-table
          :columns="columnsActive"
          :rows="JSON.parse(this.$store.state.Customer.customerDetails).emiList"
          :line-numbers="true"
          :sort-options="{
            enabled: true,
          }"
          :search-options="{
            enabled: true,
            placeholder: 'Search this table',
          }"
          :pagination-options="{ enabled: true }"
          styleClass="vgt-table striped condensed bordered pl-3"
        >
        </vue-good-table>
      </div>
    </div>
    <div
      class="card p-3 mt-3"
      style="background-color: #e6eefa; color: #4f8ff0"
    >
      <div>
        <form @submit.prevent="">
          <vue-form-generator
            :schema="schema"
            :model="model"
            :options="formOptions"
            @validated="handleValidation"
          />
          <div class="mt-3" style="display: flex; justify-content: flex-end">
            <button
              type="button"
              class="btn btn-success btn-md"
              @click="doCreateCustomer"
              :disabled="this.isValidForm === false"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import CreateEditCustomerSchema from "../../forms/CreateEditCustomerSchema";
import "vue-form-generator/dist/vfg.css";
import { VueGoodTable } from "vue-good-table";
import { mapActions } from "vuex";
import Toast from "../common/Toast";

export default {
  components: {
    VueGoodTable,
  },
  data() {
    return {
      emiAmount: "",
      totalAmountPaid: 0,
      totalAmountLeft: 0,
      isValidForm: false,
      columnsActive: [
        {
          label: "Created Date",
          field: "createdDate",
          sortable: true,
          tdClass: "text-left px-md-2",
        },
        {
          label: "Emi Date",
          field: "emiDate",
          sortable: true,
          tdClass: "text-left px-md-2",
        },
        {
          label: "EMI amount",
          field: "emiAmount",
          sortable: true,
          tdClass: "text-left px-md-2",
        },
      ],
      rowsActive: [],
      model: {},
      schema: CreateEditCustomerSchema.getSchemaData(true),
      formOptions: {
        validateAfterChanged: true,
      },
    };
  },
  methods: {
    ...mapActions(["createCustomer", "createEMI"]),

    handleValidation(isValid) {
      this.isValidForm = isValid;
    },

    doCreateCustomer: function (e) {
      e.preventDefault();
      this.model.customerProductsList = this.model.customerProductsList.toString();
      this.createCustomer(this.model);
      this.$router.push("/");
    },
    submitEMI() {
      if (this.emiAmount && this.emiDateModel) {
        var req = {
          emiAmount: this.emiAmount,
          emiDate: this.emiDateModel,
          customerId: JSON.parse(this.$store.state.Customer.customerDetails)
            .customerId,
        };
        this.createEMI(req);
      } else {
        Toast.showToast("Please fill EMI amount", "E");
      }
    },
    isNumber: function (evt) {
      evt = evt ? evt : window.event;
      var charCode = evt.which ? evt.which : evt.keyCode;
      if (
        charCode > 31 &&
        (charCode < 48 || charCode > 57) &&
        charCode !== 46
      ) {
        evt.preventDefault();
      } else {
        return true;
      }
    },
  },
  created() {
    this.model = JSON.parse(this.$store.state.Customer.customerDetails);
    var limitDate = "";
    var year = new Date().getFullYear();
    var month = new Date().getMonth() + 1;
    if (month < 10) {
      if (new Date().getDate() < 10) {
        limitDate = year + "-" + "0" + month + "-" + "0" + new Date().getDate();
      } else {
        limitDate = year + "-" + "0" + month + "-" + new Date().getDate();
      }
    } else {
      if (new Date().getDate() < 10) {
        limitDate = year + "-" + month + "-" + "0" + new Date().getDate();
      } else {
        limitDate = year + "-" + month + "-" + new Date().getDate();
      }
    }
    this.emiDateModel = limitDate;
  },
};
</script>

<style scoped>
.rows {
  background-color: #e6eefa;
  color: #4f8ff0;
  display: flex;
  height: 35px;
  margin-bottom: 20px;
  margin-top: 1px;
  padding-right: 10px;
  justify-content: space-between;
  color: aqua;
}
</style>