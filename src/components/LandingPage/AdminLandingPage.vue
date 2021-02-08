<template>
  <div class="container-fluid">
    <div class="row">
      <div class="card col-sm m-3 border" style="background-color: white">
        <div class="p-1 row rounded bg-primary shadow text-white">
          <div class="col-sm mt-2">
            <div class="text">
              <h5><b>Expenditure</b></h5>
              <h4>
                <span class="badge badge-warning ml-3 border"
                  >&#x20b9; {{ this.expTotal }}</span
                >
              </h4>
            </div>
          </div>
          <div class="col-sm">
            Month
            <div>
              <input
                class="form-control mt-1"
                type="month"
                @change="onChangeMonthYear('Expenditure')"
                id="example-month-input"
                v-model="exp_MonthYear"
              />
            </div>
          </div>
        </div>

        <div class="row mb-3 mt-2">
          <div class="col-sm">
            <div style="background: white; margin-top: 5px; border-radius: 5px">
              <canvas
                id="chart-one"
                width="200"
                height="150"
                class="shadow"
              ></canvas>
            </div>
          </div>
        </div>
      </div>

      <div class="card col-sm m-3 border" style="background-color: white">
        <div class="p-1 row rounded bg-primary shadow text-white">
          <div class="col-sm mt-2">
            <div class="text">
              <h5><b>Product Count</b></h5>
              <h4>
                <span class="badge badge-warning ml-3 border">
                  {{ this.productsTotal }}</span
                >
              </h4>
            </div>
          </div>
          <div class="col-sm">
            Month
            <div>
              <input
                class="form-control mt-1"
                type="month"
                @change="onChangeMonthYear('Product Count')"
                id="example-month-input"
                v-model="product_MonthYear"
              />
            </div>
          </div>
        </div>

        <div class="row mb-3 mt-2">
          <div class="col-sm">
            <div style="background: white; margin-top: 5px; border-radius: 5px">
              <canvas
                id="chart-two"
                width="200"
                height="150"
                class="shadow"
              ></canvas>
            </div>
          </div>
        </div>
      </div>
      <div class="card col-sm m-3 border" style="background-color: white">
        <div class="p-1 row rounded bg-primary shadow text-white">
          <div class="col-sm mt-2">
            <div class="text">
              <h5><b>Sales / Collection</b></h5>
              <h4>
                <span class="badge badge-warning ml-3 border"
                  >&#x20b9; {{ this.totalEMI + this.totalDownPayment }}</span
                >
              </h4>
            </div>
          </div>
          <div class="col-sm">
            Month
            <div>
              <input
                class="form-control mt-1"
                type="month"
                @change="onChangeMonthYear('Collection')"
                id="example-month-input"
                v-model="collection_MonthYear"
              />
            </div>
          </div>
        </div>

        <div class="row mb-3 mt-2">
          <div class="col-sm">
            <div style="background: white; margin-top: 5px; border-radius: 5px">
              <canvas
                id="chart-three"
                width="200"
                height="150"
                class="shadow"
              ></canvas>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Chart from "chart.js";
import { mapActions } from "vuex";

export default {
  data() {
    return {
      exp_MonthYear: "",
      product_MonthYear: "",
      expSalary: 0,
      expPayment: 0,
      expBill: 0,
      expOthers: 0,
      expTotal: 0,
      tvCount: 0,
      fridgeCount: 0,
      washingMachineCount: 0,
      fanCount: 0,
      microwaveCount: 0,
      speakerCount: 0,
      otherCount: 0,
      productsTotal: 0,
      totalSellingprice: 0,
      totalPrice: 0,
      totalDownPayment: 0,
      totalEMI: 0,
      collection_MonthYear: "",
    };
  },
  mounted() {
    new Chart(document.getElementById("chart-one"), {
      type: "horizontalBar",
      options: {
        legend: {
          display: false,
        },
        title: {
          display: true,
          fontSize: 12,
          text: "Total Expenditure - " + this.expTotal,
        },

        responsive: true,
        scales: {
          xAxes: [
            {
              ticks: {
                beginAtZero: true,
                fontStyle: "bold",
                callback: function (value) {
                  if (Math.floor(value) === value) {
                    return value;
                  }
                },
              },
            },
          ],
          yAxes: [
            {
              ticks: {
                fontStyle: "bold",
              },
            },
          ],
        },
      },
      data: {
        labels: ["Salary", "Payment", "Bills", "Others"],

        datasets: [
          {
            data: [
              this.expSalary,
              this.expPayment,
              this.expBill,
              this.expOthers,
            ],
            label: "Total Expenditure - " + this.expTotal,
            barThickness: 20,
            borderWidth: 2,
            backgroundColor: ["pink", "#befa6b", "#f3c87a", "#8edbf5"],
          },
        ],
      },
    });
    new Chart(document.getElementById("chart-two"), {
      type: "pie",
      data: {
        labels: [
          "TV",
          "Fridge",
          "Washing Machine",
          "Microwave",
          "Fan",
          "Speaker",
          "Others",
        ],

        datasets: [
          {
            data: [
              this.tvCount,
              this.fridgeCount,
              this.washingMachineCount,
              this.microwaveCount,
              this.fanCount,
              this.speakerCount,
              this.otherCount,
            ],
            backgroundColor: [
              "#f3c87a",
              "#FFFF66",
              "#8edbf5",
              "#befa6b",
              "#f08a80",
              "pink",
              "#b290f3",
            ],
            borderWidth: 2,
          },
        ],
      },
    });

    new Chart(document.getElementById("chart-three"), {
      type: "bar",
      options: {
        legend: {
          display: false,
        },
        title: {
          display: true,
          text: "Total Sales",
        },

        scales: {
          xAxes: [
            {
              display: true,
              ticks: {
                fontStyle: "bold",
              },
              gridLines: {
                lineWidth: 0.5,
              },
            },
          ],
          yAxes: [
            {
              display: true,
              gridLines: {
                lineWidth: 0.5,
              },
              ticks: {
                beginAtZero: true,
                display: true,
                fontStyle: "bold",
                callback: function (value) {
                  if (Math.floor(value) === value) {
                    return value;
                  }
                },
              },
            },
          ],
        },
      },

      data: {
        labels: [
          "Selling Price",
          "Total Price",
          "DownPayment",
          "EMI",
          "Collected",
          "Left",
        ],
        datasets: [
          {
            label: "Total Sales",
            borderWidth: 2,
            barThickness: 30,
            data: [
              this.totalSellingprice,
              this.totalPrice,
              this.totalDownPayment,
              this.totalEMI,
              this.totalDownPayment + this.totalEMI,
              this.totalPrice - (this.totalDownPayment + this.totalEMI),
            ],
            backgroundColor: [
              "pink",
              "#f3c87a",
              "#FFFF66",
              "#8edbf5",
              "#befa6b",
              "#f08a80",
            ],
            fill: false,
          },
        ],
        ticks: {
          beginAtZero: true,
          display: true,
        },
      },
    });
  },
  created() {
    // ========= Expenditure=================
    this.exp_MonthYear = this.$store.state.Expenditure.expenditureDate;
    if (this.exp_MonthYear.length < 7) {
      this.exp_MonthYear =
        this.exp_MonthYear.substring(0, 5) +
        "0" +
        this.exp_MonthYear.substring(5, 7);
    }
    var expenditure = [];
    expenditure = JSON.parse(this.$store.state.Expenditure.expenditureDetails);

    if (expenditure.length > 0) {
      for (var i = 0; i < expenditure.length; i++) {
        if (expenditure[i].expType === "Salary") {
          this.expSalary += expenditure[i].expAmount;
        }
        if (expenditure[i].expType === "Payment") {
          this.expPayment += expenditure[i].expAmount;
        }
        if (expenditure[i].expType === "Bill") {
          this.expBill += expenditure[i].expAmount;
        }
        if (expenditure[i].expType === "Other") {
          this.expOthers += expenditure[i].expAmount;
        }
        this.expTotal += expenditure[i].expAmount;
      }
    }
    //=============== Product Count=======================
    this.product_MonthYear = this.$store.state.Customer.productDate;
    if (this.product_MonthYear.length < 7) {
      this.product_MonthYear =
        this.product_MonthYear.substring(0, 5) +
        "0" +
        this.product_MonthYear.substring(5, 7);
    }
    var productList = [];
    productList = JSON.parse(this.$store.state.Customer.customerDetailsProduct);

    if (productList && productList.length > 0) {
      for (var j = 0; j < productList.length; j++) {
        this.tvCount += productList[j].customerTvCount;
        this.fridgeCount += productList[j].customerFridgeCount;
        this.washingMachineCount += productList[j].customerWashingMachineCount;
        this.microwaveCount += productList[j].customerMicrowaveCount;
        this.fanCount += productList[j].customerFanCount;
        this.speakerCount += productList[j].customerSpeakerCount;
        this.otherCount += productList[j].customerOtherCount;
        this.productsTotal += productList[j].customerProductTotalCount;
      }
    }

    //===========Total Collection===================
    this.collection_MonthYear = this.$store.state.Customer.salesDate;
    if (this.collection_MonthYear.length < 7) {
      this.collection_MonthYear =
        this.collection_MonthYear.substring(0, 5) +
        "0" +
        this.collection_MonthYear.substring(5, 7);
    }
    var customerList = [];
    customerList = JSON.parse(this.$store.state.Customer.customerDetailsSales);
    if (customerList && customerList.length > 0) {
      for (var m = 0; m < customerList.length; m++) {
        this.totalSellingprice += parseInt(
          customerList[m].customerPaymentSellingPrice
        );
        this.totalPrice += parseInt(customerList[m].customerPaymentTotalPrice);
        this.totalDownPayment += parseInt(
          customerList[m].customerPaymentDownPayment
        );
        if (customerList[m].emiList && customerList[m].emiList.length > 0) {
          for (var k = 0; k < customerList[m].emiList.length; k++) {
            this.totalEMI += parseInt(customerList[m].emiList[k].emiAmount);
          }
        }
      }
    }

  },

  methods: {
    ...mapActions([
      "fetchExpenditure",
      "fetchCustomerByMonth",
      "fetchCustomerByMonthSales",
    ]),

    onChangeMonthYear(data) {
      if (data === "Expenditure") {
        this.fetchExpenditure(this.exp_MonthYear);
      }
      if (data === "Product Count") {
        this.fetchCustomerByMonth(this.product_MonthYear);
      }

      if (data === "Collection") {
        this.fetchCustomerByMonthSales(this.collection_MonthYear);
      }
    },
  },
};
</script>


<style scoped>
</style>