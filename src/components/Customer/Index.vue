<template>
  <div
    v-if="
      JSON.parse(this.$store.state.Customer.activeCustomerDetails) &&
      JSON.parse(this.$store.state.Customer.inactiveCustomerDetails)
    "
    class="adjust_div ml-3"
    style="overflow: hidden"
  >
    <div class="border_div p-1">
      <div
        class="d-flex row shadow m-0 rounded"
        style="background-color: #daebfb !important"
      >
        <div class="p-3 row">
          <div class="col-sm">
            <a class="title-color" type="button">
              <button
                type="button"
                class="btn btn-primary"
                @click="addCustomer"
              >
                <b>
                  <i class="fa fa-plus-circle" aria-hidden="true"></i>
                  Add Customer</b
                >
              </button>
            </a>
          </div>
        </div>
        <div class="ml-auto p-3 mr-3">
          <select class="form-control col-sm" v-model="patientStatus">
            <option value="Active" class="text-primary" selected>
              Active Customer
            </option>
            <option value="Inactive" class="text-primary">
              Inactive Customer
            </option>
          </select>
        </div>
      </div>
    </div>
    <div v-if="this.patientStatus === 'Active'">
      <vue-good-table
        :columns="columnsActive"
        :rows="JSON.parse(this.$store.state.Customer.activeCustomerDetails)"
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
        <template slot="table-row" slot-scope="data">
          <span style="font-size: 16px;">
            {{ data.formattedRow[data.column.field] }}
          </span>
          <input
            type="button"
            value="View"
            @click="myfun(data)"
            class="btn btn-sm bg-dark text-light rounded"
            style="padding-left: 5px; padding-right: 5px"
            v-if="data.column.field === 'btn'"
          />
          <span v-if="data.column.field === 'customerEmiStatus'">
            <i
              v-if="data.row.customerEmiStatus === 'Yes'"
              class="fa fa-check-square fa-lg pl-1"
              title="Yes"
              style="color: red"
              aria-hidden="true"
            ></i>
            <i
              v-if="data.row.customerEmiStatus === 'No'"
              class="fa fa-times-circle fa-lg pl-2"
              title="No"
              style="color: (50, 235, 50)"
              aria-hidden="true"
            ></i>
          </span>
          <span v-if="data.column.field === 'customerDefaulter'">
            <i
              v-if="data.row.customerDefaulter === 'Yes'"
              class="fa fa-check-square fa-lg pl-1"
              title="Yes"
              style="color: red"
              aria-hidden="true"
            ></i>
            <i
              v-if="data.row.customerDefaulter === 'No'"
              class="fa fa-times-circle fa-lg pl-2"
              title="No"
              style="color: rgb(50, 235, 50)"
              aria-hidden="true"
            ></i>
          </span>
        </template>
      </vue-good-table>
    </div>
    <div v-else>
      <vue-good-table
        :columns="columnsActive"
        :rows="JSON.parse(this.$store.state.Customer.inactiveCustomerDetails)"
        :line-numbers="true"
        :rtl="false"
        :sort-options="{
          enabled: true,
        }"
        :search-options="{
          enabled: true,
          placeholder: 'Search this table',
        }"
        :pagination-options="{ enabled: true }"
        styleClass="vgt-table striped condensed bordered"
      >
        <template slot="table-row" slot-scope="data">
          <span style="font-size: 16px; color: #222222">
            {{ data.formattedRow[data.column.field] }}
          </span>
          <span style="font-size: 1px;">
            {{ data.formattedRow[data.column.label] }}
          </span>
          <input
            type="button"
            value="View"
            @click="myfun(data)"
            class="btn btn-sm btn-light bg-dark text-light rounded"
            style="padding-left: 5px; padding-right: 5px"
            v-if="data.column.field === 'btn'"
          />
          <span v-if="data.column.field === 'customerEmiStatus'">
            <i
              v-if="data.row.customerEmiStatus === 'Yes'"
              class="fa fa-check-square fa-lg pl-2"
              title="Yes"
              style="color: red"
              aria-hidden="true"
            ></i>
            <i
              v-if="data.row.customerEmiStatus === 'No'"
              class="fa fa-times-circle fa-lg pl-2 ml-1"
              title="No"
              style="color: rgb(50, 235, 50)"
              aria-hidden="true"
            ></i>
          </span>
          <span v-if="data.column.field === 'customerDefaulter'">
            <i
              v-if="data.row.customerDefaulter === 'Yes'"
              class="fa fa-check-square fa-lg pl-2"
              title="Yes"
              style="color: red"
              aria-hidden="true"
            ></i>
            <i
              v-if="data.row.customerDefaulter === 'No'"
              class="fa fa-times-circle fa-lg pl-2 ml-1"
              title="No"
              style="color: rgb(50, 235, 50)"
              aria-hidden="true"
            ></i>
          </span>
        </template>
      </vue-good-table>
    </div>
  </div>
  <div v-else>
    <Loading />
  </div>
</template>
<script>
import "vue-good-table/dist/vue-good-table.css";
import { VueGoodTable } from "vue-good-table";
import Loading from "../common/Loading";
import { mapActions } from "vuex";
// add to component

export default {
  name: "HomePage",
  components: {
    VueGoodTable,
    Loading,
  },

  methods: {
    ...mapActions([
      "fetchAllActiveCustomer",
      "fetchCustomer",
      "fetchAllInActiveCustomer",
      "customerDefaulter",
    ]),
    myfun(data) {
      var uid = data.row.customerId;
      this.fetchCustomer(uid);
    },

    addCustomer() {
      this.$router.push("/createcustomer");
    },
  },
  created() {
    this.fetchAllActiveCustomer();
    this.fetchAllInActiveCustomer();
  },
  data() {
    return {
      tab_value: "",
      patientStatus: "Active",
      table_data: [],
      columnsActive: [
        {
          label: "Customer Name",
          field: "customerName",
          sortable: true,
          tdClass: "text-left px-md-2",
        },
        {
          label: "Customer Address",
          field: "customerAddress",
          sortable: true,
          tdClass: "text-left px-md-2",
        },
        {
          label: "Customer Mobile",
          field: "customerMobileNo",
          sortable: true,
          tdClass: "text-left px-md-2",
        },
        {
          label: "Product List - ( Total Count )",
          field: "customerProductsList",
          sortable: true,
          tdClass: "text-left px-md-2",
        },
        {
          label: "Emi Status",
          field: "customerEmiStatus",
          sortable: true,
          tdClass: "text-left px-md-2",
        },
        {
          label: "Start Date",
          field: "customerEmiStartDate",
          sortable: true,
          tdClass: "text-left px-md-2",
        },
        {
          label: "End Date",
          field: "customerEmiEndDate",
          sortable: true,
          tdClass: "text-left px-md-2",
        },
        {
          label: "Buyed On",
          field: "createdDate",
          sortable: true,
          tdClass: "text-left px-md-2",
        },
        {
          label: "Defaultor",
          field: "customerDefaulter",
          sortable: true,
          html: true,
          tdClass: "text-left px-md-2",
        },

        {
          label: "View",
          field: "btn",
          html: true,
          sortable: false,
          thClass: "text-center",
          tdClass: "text-left px-md-2",
        },
      ],
    };
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
  margin-top: 10px;
  padding-right: 10px;
  justify-content: space-between;
}
.adjust_div {
  margin-left: -8px;
  margin-right: 20px;
}
.text {
  padding: 8px;
}
.row_p {
  background-color: #e6eefa;
  display: flex;
  margin-bottom: 10px;
  height: 35px;
  padding-left: 10px;
  padding-right: 10px;
  justify-content: space-between;
}

</style>
