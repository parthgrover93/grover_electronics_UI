<template>
  <div class="container-fluid">
    <div class="p-3 mt-2 mr-1 rounded bg-primary shadow text-white">
      <div class="form-row">
        <div class="col-md-5">
          <div class="text">
            <h5><b>Create Customer</b></h5>
          </div>
        </div>
        <div class="col-md-7 d-flex flex-row-reverse">
          <i>Required fields are marked with an asterisk ( * ) </i>
        </div>
      </div>
    </div>

    <div
      class="card mr-1 p-3 mt-2"
      style="background-color: #e6eefa; color: #4f8ff0"
    >
      <div>
        <form @submit.prevent="">
          <vue-form-generator
            :schema="schema"
            :model="model"
            :options="formOptions"
          />
          <div class="mt-3" style="display: flex; justify-content: flex-end">
            <button
              type="button"
              class="btn btn-success btn-md"
              @click="doCreateCustomer"
            >
              Submit
            </button>
            <button type="button" class="btn btn-danger ml-3 mr-3 btn-md">
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import CreateEditCustomerSchema from "../../forms/CreateEditCustomerSchema";
import { mapActions } from "vuex";
import Toast from "../common/Toast";

export default {
  name: "CreateCustomer",
  components: {},
  data() {
    return {
      model: {
        customerEmiStatus: false,
        customerEmiEndDate: null,
        customerEmiStartDate: null,
        customerPaymentTotalPrice: "",
        customerEmiPerMonth: "",
        customerEmiTotal: "",
        customerPaymentDownPayment: "",
        customerPaymentSellingPrice: "",
        customerProductTotalCount: 0,
        customerFridgeCount: 0,
        customerTvCount: 0,
        customerWashingMachineCount: 0,
        customerSpeakerCount: 0,
        customerMicrowaveCount: 0,
        customerOtherCount: 0,
        customerFanCount: 0,
        customerStatus: true,
      },
      schema: CreateEditCustomerSchema.getSchemaData(false),
      formOptions: {
        validateAfterChanged: true,
      },
    };
  },
  methods: {
    ...mapActions(["createCustomer"]),
    doCreateCustomer: function (e) {
      e.preventDefault();
      if (
        this.model.customerProductsList &&
        this.model.customerProductTotalCount &&
        this.model.customerPaymentSellingPrice &&
        this.model.customerPaymentDownPayment &&
        this.model.customerName &&
        this.model.customerAddress &&
        this.model.customerZipcode &&
        this.model.customerMobileNo &&
        this.model.customerGuarantorName &&
        this.model.customerGurantorAddress &&
        this.model.customerGurantorZipcode &&
        this.model.customerGurantorMobileNo
      ) {
        if (
          !this.model.customerEmiStatus &&
          parseInt(this.model.customerPaymentSellingPrice) ===
            parseInt(this.model.customerPaymentDownPayment)
        ) {
          this.model.customerProductsList = this.model.customerProductsList.toString();
          this.model.customerDefaulter = false;
          this.model.customerStatus=false
          this.createCustomer(this.model);
          this.$router.push("/");
        } else if (
          this.model.customerEmiStatus &&
          this.model.customerEmiMonths
        ) {
          if (
            parseInt(this.model.customerPaymentSellingPrice) >
            parseInt(this.model.customerPaymentDownPayment)
          ) {
            this.model.customerProductsList = this.model.customerProductsList.toString();
            this.model.customerDefaulter = false;
            this.createCustomer(this.model);
            this.$router.push("/");
          } else {
            Toast.showToast(
              "Selling price cannot be greater than Down Payment",
              "E"
            );
          }
        } else if (
          !this.model.customerEmiStatus &&
          parseInt(this.model.customerPaymentSellingPrice) >
            parseInt(this.model.customerPaymentDownPayment)
        ) {
          Toast.showToast(
            "If no EMI, down payment should be equal to Selling Price",
            "E"
          );
        } else {
          Toast.showToast(
            "Selling price cannot be greater than Down Payment",
            "E"
          );
        }
      } else {
        Toast.showToast(
          "All fields marked with asterisk (*) are necessary",
          "E"
        );
      }
    },
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
}
/* /deep/ .vue-form-generator .form-control {
  background-image: linear-gradient(#f7f7f7, #fff);
  border: 1px solid #9eccfb;
}

/deep/ .vue-form-generator .field-wrap button,
.vue-form-generator .field-wrap input[type="submit"] {
  background-image: linear-gradient(#f7f7f7, #fff);
  border: 1px solid #9eccfb;
} */
.form-control {
  background-image: linear-gradient(#f7f7f7, #fff);
  border: 1px solid #9eccfb;
}
</style>