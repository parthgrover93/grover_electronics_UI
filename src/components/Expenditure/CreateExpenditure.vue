<template>
  <div
    class="container-fluid"
    v-if="JSON.parse(this.$store.state.Expenditure.expenditureDetails)"
  >
    <div class="p-3 mt-2 mr-1 rounded bg-primary shadow text-white">
      <div class="form-row">
        <div class="col-sm mt-2">
          <div class="text">
            <h5><b>Create Expenditure</b></h5>
          </div>
        </div>
        <div class="col-sm row">
          <label class="mt-2" style="font-size: 18px" for="exampleInputEmail1"
            ><b>Total Expenditure ({{ this.exp_MonthYear }})</b></label
          >
          <h2>
            <span class="badge badge-warning ml-3 border"
              >&#x20b9; {{ this.total_expenditure }}</span
            >
          </h2>
        </div>

        <div class="ml-auto d-flex flex-row-reverse mt-2">
          <i>Required fields are marked with an asterisk ( * )</i>
        </div>
      </div>
    </div>

    <div
      class="card p-3 mt-2 mr-1"
      style="background-color: #e6eefa; color: #4f8ff0"
    >
      <div class="row">
        <div class="col-sm">
          <label for="example-month-input" class="col-form-label"
            >Month <span style="color: red"> * </span></label
          >
          <div>
            <input
              class="form-control"
              type="month"
              @change="onChangeMonthYear()"
              id="example-month-input"
              v-model="exp_MonthYear"
            />
          </div>
        </div>
        <div class="col-sm">
          <label for="example-month-input" class="col-form-label"
            >Type <span style="color: red"> * </span></label
          >
          <select
            class="custom-select"
            v-model="exp_type"
            @change="onChangeType()"
          >
            <option value disabled selected>Select one</option>
            <option value="Salary">Salary</option>
            <option value="Payment">Payment</option>
            <option value="Bill">Bill</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div v-if="this.exp_type === 'Salary'" class="col-sm">
          <label for="example-month-input" class="col-form-label"
            >Description <span style="color: red"> * </span></label
          >
          <select class="custom-select" v-model="exp_desc" required>
            <option value disabled selected>Select One</option>
            <option value="Neshi" selected>Neshi</option>
            <option value="Parmeshwar">Parmeshwar</option>
            <option value="Rakesh">Rakesh</option>
            <option value="Aggarwal">Aggarwal</option>
          </select>
        </div>
        <div
          v-if="this.exp_type != '' && this.exp_type != 'Salary'"
          class="form-group col-sm mt-1"
        >
          <label for="exampleInputPassword1"
            >Description <span style="color: red"> * </span></label
          >
          <textarea
            type="text"
            rows="1"
            class="form-control"
            placeholder="Enter here"
            v-model="exp_desc"
          />
        </div>
        <div class="form-group col-sm" style="margin-top: 5px">
          <label for="exampleInputPassword1"
            >Amount <span style="color: red"> * </span></label
          >
          <input
            type="text"
            class="form-control"
            placeholder="Enter here"
            v-model="exp_amount"
            @keypress="isNumber($event)"
            maxlength="7"
          />
        </div>
        <div class="form-group col-sm-1" style="margin-top: 36px">
          <button type="button" class="btn btn-primary" @click="submit">
            Submit
          </button>
        </div>
      </div>
      <div class="mt-1">
        <vue-good-table
          class="border"
          :columns="columns"
          :rows="JSON.parse(this.$store.state.Expenditure.expenditureDetails)"
          :line-numbers="true"
          :sort-options="{
            enabled: true,
          }"
          :search-options="{
            enabled: true,
            placeholder: 'Search this table',
          }"
          :pagination-options="{ enabled: true }"
          styleClass="vgt-table bordered pl-3 "
        >
          <template slot="table-row" slot-scope="data">
            <span style="font-size: 16px; color: #222222">
              {{ data.formattedRow[data.column.field] }}
            </span>
          </template>
        </vue-good-table>
      </div>
    </div>
  </div>
  <div v-else>
    <Loading />
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { VueGoodTable } from "vue-good-table";
import Loading from "../common/Loading";
import Toast from "../common/Toast";

export default {
  name: "CreateExpenditure",
  components: { VueGoodTable, Loading },
  data() {
    return {
      exp_type: "",
      exp_desc: "",
      exp_amount: 0,
      exp_MonthYear: "",
      total_expenditure: 0,
      columns: [
        {
          label: "Month-Year",
          field: "expMonthYear",
          sortable: true,
          tdClass: "text-left px-md-2",
        },
        {
          label: "Expenditure Type",
          field: "expType",
          sortable: true,
          tdClass: "text-left px-md-2",
        },
        {
          label: "Expenditure Description",
          field: "expDesc",
          sortable: true,
          tdClass: "text-left px-md-2",
        },
        {
          label: "Expenditure amount",
          field: "expAmount",
          sortable: true,
          tdClass: "text-left px-md-2",
        },
      ],
      rows: [],
    };
  },

  created() {
    this.exp_MonthYear = this.$store.state.Expenditure.expenditureDate;
    
    if (this.exp_MonthYear.length < 7) {
      this.exp_MonthYear =
        this.exp_MonthYear.substring(0, 5) +
        "0" +
        this.exp_MonthYear.substring(5, 7);
    }
    if (
      JSON.parse(this.$store.state.Expenditure.expenditureDetails).length > 0
    ) {
      for (
        var i = 0;
        i < JSON.parse(this.$store.state.Expenditure.expenditureDetails).length;
        i++
      ) {
        this.total_expenditure += JSON.parse(
          this.$store.state.Expenditure.expenditureDetails
        )[i].expAmount;
      }
    }
  },
  methods: {
    ...mapActions(["createExpenditure", "fetchExpenditure"]),
    onChangeType() {
      this.exp_desc = "";
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

    onChangeMonthYear() {
      this.fetchExpenditure(this.exp_MonthYear);
      this.total_expenditure = 0;
      if (JSON.parse(this.$store.state.Expenditure.expenditureDetails)) {
        for (
          var i = 0;
          i <
          JSON.parse(this.$store.state.Expenditure.expenditureDetails).length;
          i++
        ) {
          this.total_expenditure += JSON.parse(
            this.$store.state.Expenditure.expenditureDetails
          )[i].expAmount;
        }
      }
    },

    submit() {
      if (
        this.exp_MonthYear &&
        this.exp_type &&
        this.exp_desc &&
        this.exp_amount
      ) {
        var req = {
          expMonthYear: this.exp_MonthYear,
          expType: this.exp_type,
          expDesc: this.exp_desc,
          expAmount: this.exp_amount,
        };
        this.createExpenditure(req);
      } else {
        Toast.showToast("Please fill all the sections", "E");
      }
    },
    myfun(data) {
      alert(data);
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