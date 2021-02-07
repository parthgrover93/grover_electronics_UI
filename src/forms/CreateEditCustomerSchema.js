import Vue from "vue";
import moment from "moment";
import VueFormGenerator from "vue-form-generator";
import "vue-form-generator/dist/vfg.css";

Vue.use(VueFormGenerator, {
  validators: {
    phoneNoValidation: (value) => {
      let regex = /^[0-9-]{12,12}$/;
      if (value) {
        if (!regex.test(value)) {
          return ["PhoneNo should contain 10 digits"];
        } else {
          return [];
        }
      }
    },
    charValidations: (value) => {
      let regex = /^[a-zA-Z ]{1,}$/;
      if (!regex.test(value) && value) {
        return ["Cannot contain numbers or specials characters"];
      } else {
        return [];
      }
    },
    zipcodeValidation: (value) => {
      let regex = /^[0-9]{6,6}$/;
      if (value) {
        if (!regex.test(value)) {
          return ["ZipCode should contain 6 digits"];
        } else {
          return [];
        }
      }
    },
  },
});

export default {
  getSchemaData(disablePayment) {
    var limitDate = "";
    var year = new Date().getFullYear();
    var month = new Date().getMonth() + 2;
    if (month < 10) {
      if (new Date().getDate() < 10) {
        limitDate = year + "-" + "0" + month + "-" + "0" + new Date().getDate();
      } else {
        limitDate = year + "-" + "0" + month + "-" + new Date().getDate();
      }
    } else {
      if(month===13){
        month="01"
        year=year+1
      }
      if (new Date().getDate() < 10) {
        limitDate = year + "-" + month + "-" + "0" + new Date().getDate();
      } else {
        limitDate = year + "-" + month + "-" + new Date().getDate();

      }
    }

    return {
      groups: [
        {
          styleClasses: "border border-info rounded mb-3",
          legend: "Products",
          fields: [
            {
              type: "checklist",
              model: "customerProductsList",
              label: "Product",
              multiSelect: true,
              multi: true,
              required: true,
              styleClasses: "ml-4",
              validator: VueFormGenerator.validators.required,
              selectOptions: {
                noneSelectedText: "Select",
              },
              disabled() {
                if (disablePayment) {
                  return true;
                }
              },
              values: [
                "TV",
                "Fridge",
                "Washing Machine",
                "Speaker",
                "Fan",
                "Microwave",
                "Other",
              ],
            },
            {
              type: "select",
              model: "customerTvCount",
              label: "No of TV",
              styleClasses: "col-md-2",
              required: true,
              visible(model) {
                if (model.customerProductsList) {
                  var arr = [];
                  Object.keys(model.customerProductsList).map(function(key) {
                    arr.push({ [key]: model.customerProductsList[key] });
                    return arr;
                  });
                  for (var i = 0; i < arr.length; i++)
                    if (model.customerProductsList[i] == "TV") {
                      return true;
                    }
                }
              },
              disabled() {
                if (disablePayment) {
                  return true;
                }
              },
              onChanged: function(value, model) {
                this.model.customerProductTotalCount =
                  parseInt(model) +
                  parseInt(this.model.customerFridgeCount) +
                  parseInt(this.model.customerWashingMachineCount) +
                  parseInt(this.model.customerSpeakerCount) +
                  parseInt(this.model.customerFanCount) +
                  parseInt(this.model.customerMicrowaveCount) +
                  parseInt(this.model.customerOtherCount);
              },
              selectOptions: {
                noneSelectedText: "Select",
              },
              values: ["1", "2", "3", "4", "5"],
            },

            {
              type: "select",
              model: "customerFridgeCount",
              label: "No of Fridge",
              styleClasses: "col-md-2",
              required: true,
              visible(model) {
                if (model.customerProductsList) {
                  var arr = [];
                  Object.keys(model.customerProductsList).map(function(key) {
                    arr.push({ [key]: model.customerProductsList[key] });
                    return arr;
                  });
                  for (var i = 0; i < arr.length; i++)
                    if (model.customerProductsList[i] == "Fridge") {
                      return true;
                    }
                }
              },
              onChanged: function(value, model) {
                this.model.customerProductTotalCount =
                  parseInt(this.model.customerTvCount) +
                  parseInt(model) +
                  parseInt(this.model.customerWashingMachineCount) +
                  parseInt(this.model.customerSpeakerCount) +
                  parseInt(this.model.customerFanCount) +
                  parseInt(this.model.customerMicrowaveCount) +
                  parseInt(this.model.customerOtherCount);
              },
              disabled() {
                if (disablePayment) {
                  return true;
                }
              },
              selectOptions: {
                noneSelectedText: "Select",
              },
              values: ["1", "2", "3", "4", "5"],
            },
            {
              type: "select",
              model: "customerWashingMachineCount",
              label: "No of Washing Machine",
              styleClasses: "col-md-2",
              required: true,
              visible(model) {
                if (model.customerProductsList) {
                  var arr = [];
                  Object.keys(model.customerProductsList).map(function(key) {
                    arr.push({ [key]: model.customerProductsList[key] });
                    return arr;
                  });
                  for (var i = 0; i < arr.length; i++)
                    if (model.customerProductsList[i] == "Washing Machine") {
                      return true;
                    }
                }
              },
              disabled() {
                if (disablePayment) {
                  return true;
                }
              },
              onChanged: function(value, model) {
                this.model.customerProductTotalCount =
                  parseInt(this.model.customerTvCount) +
                  parseInt(this.model.customerFridgeCount) +
                  parseInt(model) +
                  parseInt(this.model.customerSpeakerCount) +
                  parseInt(this.model.customerFanCount) +
                  parseInt(this.model.customerMicrowaveCount) +
                  parseInt(this.model.customerOtherCount);
              },
              selectOptions: {
                noneSelectedText: "Select",
              },
              values: ["1", "2", "3", "4", "5"],
            },
            {
              type: "select",
              model: "customerSpeakerCount",
              label: "No of Speaker",
              styleClasses: "col-md-2",
              required: true,
              visible(model) {
                if (model.customerProductsList) {
                  var arr = [];
                  Object.keys(model.customerProductsList).map(function(key) {
                    arr.push({ [key]: model.customerProductsList[key] });
                    return arr;
                  });
                  for (var i = 0; i < arr.length; i++)
                    if (model.customerProductsList[i] == "Speaker") {
                      return true;
                    }
                }
              },
              disabled() {
                if (disablePayment) {
                  return true;
                }
              },
              onChanged: function(value, model) {
                this.model.customerProductTotalCount =
                  parseInt(this.model.customerTvCount) +
                  parseInt(this.model.customerFridgeCount) +
                  parseInt(this.model.customerWashingMachineCount) +
                  parseInt(model) +
                  parseInt(this.model.customerFanCount) +
                  parseInt(this.model.customerMicrowaveCount) +
                  parseInt(this.model.customerOtherCount);
              },
              selectOptions: {
                noneSelectedText: "Select",
              },
              values: ["1", "2", "3", "4", "5"],
            },
            {
              type: "select",
              model: "customerFanCount",
              label: "No of Fan",
              styleClasses: "col-md-2",
              required: true,
              visible(model) {
                if (model.customerProductsList) {
                  var arr = [];
                  Object.keys(model.customerProductsList).map(function(key) {
                    arr.push({ [key]: model.customerProductsList[key] });
                    return arr;
                  });
                  for (var i = 0; i < arr.length; i++)
                    if (model.customerProductsList[i] == "Fan") {
                      return true;
                    }
                }
              },
              disabled() {
                if (disablePayment) {
                  return true;
                }
              },
              onChanged: function(value, model) {
                this.model.customerProductTotalCount =
                  parseInt(this.model.customerTvCount) +
                  parseInt(this.model.customerFridgeCount) +
                  parseInt(this.model.customerWashingMachineCount) +
                  parseInt(this.model.customerSpeakerCount) +
                  parseInt(model) +
                  parseInt(this.model.customerMicrowaveCount) +
                  parseInt(this.model.customerOtherCount);
              },
              selectOptions: {
                noneSelectedText: "Select",
              },
              values: ["1", "2", "3", "4", "5"],
            },

            {
              type: "select",
              model: "customerMicrowaveCount",
              label: "No of Microwave",
              styleClasses: "col-md-2",
              required: true,
              visible(model) {
                if (model.customerProductsList) {
                  var arr = [];
                  Object.keys(model.customerProductsList).map(function(key) {
                    arr.push({ [key]: model.customerProductsList[key] });
                    return arr;
                  });
                  for (var i = 0; i < arr.length; i++)
                    if (model.customerProductsList[i] == "Microwave") {
                      return true;
                    }
                }
              },
              disabled() {
                if (disablePayment) {
                  return true;
                }
              },
              onChanged: function(value, model) {
                this.model.customerProductTotalCount =
                  parseInt(this.model.customerTvCount) +
                  parseInt(this.model.customerFridgeCount) +
                  parseInt(this.model.customerWashingMachineCount) +
                  parseInt(this.model.customerSpeakerCount) +
                  parseInt(this.model.customerFanCount) +
                  parseInt(model) +
                  parseInt(this.model.customerOtherCount);
              },
              selectOptions: {
                noneSelectedText: "Select",
              },
              values: ["1", "2", "3", "4", "5"],
            },
            {
              type: "select",
              model: "customerOtherCount",
              label: "Other Items",
              styleClasses: "col-md-2",
              required: true,
              visible(model) {
                if (model.customerProductsList) {
                  var arr = [];
                  Object.keys(model.customerProductsList).map(function(key) {
                    arr.push({ [key]: model.customerProductsList[key] });
                    return arr;
                  });
                  for (var i = 0; i < arr.length; i++)
                    if (model.customerProductsList[i] == "Other") {
                      return true;
                    }
                }
              },
              disabled() {
                if (disablePayment) {
                  return true;
                }
              },
              onChanged: function(value, model) {
                this.model.customerProductTotalCount =
                  parseInt(this.model.customerTvCount) +
                  parseInt(this.model.customerFridgeCount) +
                  parseInt(this.model.customerWashingMachineCount) +
                  parseInt(this.model.customerSpeakerCount) +
                  parseInt(this.model.customerFanCount) +
                  parseInt(this.model.customerMicrowaveCount) +
                  parseInt(model);
              },
              selectOptions: {
                noneSelectedText: "Select",
              },
              values: ["1", "2", "3", "4", "5"],
            },

            {
              type: "input",
              inputType: "text",
              model: "customerProductTotalCount",
              label: "Total Count",
              styleClasses: "col-md-2",
              required: true,
              disabled: true,
              visible(model) {
                if (model.customerProductsList) {
                  if (model.customerProductsList.length > 0) {
                    return true;
                  }
                }
              },
            },
          ],
        },
        {
          styleClasses: "border border-info rounded mb-3",
          legend: "Payment",
          fields: [
            {
              type: "label",
              styleClasses: "col-md-2 mt-4 ",
              label: "Details related to amount",
            },
            {
              type: "input",
              inputType: "text",
              label: "Selling Price",
              model: "customerPaymentSellingPrice",
              placeholder: "Enter Selling Price",
              required: true,
              styleClasses: "col-md-3",
              maxlength: 8,
              onChanged: function(value, model) {
                if (model === this.model.customerPaymentDownPayment) {
                  this.model.customerPaymentTotalPrice = model;
                  this.model.customerEmiStatus = false;
                } else {
                  this.model.customerPaymentTotalPrice = "";
                }

                if (
                  model &&
                  this.model.customerEmiMonths &&
                  this.model.customerPaymentDownPayment
                ) {
                  var diff = model - this.model.customerPaymentDownPayment;
                  var emiperMonth =
                    diff / this.model.customerEmiMonths + 0.02 * diff;
                  emiperMonth = Math.round(emiperMonth);
                  this.model.customerEmiPerMonth = emiperMonth;
                  this.model.customerEmiTotal =
                    emiperMonth * this.model.customerEmiMonths;
                  this.model.customerPaymentTotalPrice =
                    parseInt(this.model.customerEmiTotal) +
                    parseInt(this.model.customerPaymentDownPayment);
                }
                var s = model;
                var res = s.replace(/\D+/g, "").replace(/^(\d{8}).*/, "$1");
                this.model.customerPaymentSellingPrice = res;
              },
              disabled() {
                if (disablePayment) {
                  return true;
                }
              },
            },
            {
              type: "input",
              inputType: "text",
              label: "Down Payment",
              model: "customerPaymentDownPayment",
              placeholder: "Enter Down Payment",
              required: true,
              styleClasses: "col-md-3 rows",
              maxlength: 8,
              onChanged: function(value, model) {
                if (model === this.model.customerPaymentSellingPrice) {
                  this.model.customerPaymentTotalPrice = parseInt(
                    this.model.customerPaymentSellingPrice
                  );
                  this.model.customerEmiStatus = false;
                } else {
                  this.model.customerPaymentTotalPrice = "";
                }
                if (
                  model &&
                  this.model.customerEmiMonths &&
                  this.model.customerPaymentSellingPrice
                ) {
                  var diff = this.model.customerPaymentSellingPrice - model;
                  var emiperMonth =
                    diff / this.model.customerEmiMonths + 0.02 * diff;
                  emiperMonth = Math.round(emiperMonth);
                  this.model.customerEmiPerMonth = emiperMonth;
                  this.model.customerEmiTotal =
                    emiperMonth * this.model.customerEmiMonths;
                  this.model.customerPaymentTotalPrice =
                    parseInt(this.model.customerEmiTotal) + parseInt(model);
                }
                var s = model;
                var res = s.replace(/\D+/g, "").replace(/^(\d{8}).*/, "$1");
                this.model.customerPaymentDownPayment = res;
              },
              disabled() {
                if (disablePayment) {
                  return true;
                }
              },
            },

            {
              type: "input",
              inputType: "number",
              label: "Total Price",
              model: "customerPaymentTotalPrice",
              placeholder: "Enter Total Price",
              required: true,
              disabled: true,
              styleClasses: "col-md-3",
              maxlength: 25,
              visible(model) {
                if (
                  !model.customerEmiStatus &&
                  this.model.customerPaymentSellingPrice &&
                  this.model.customerPaymentDownPayment &&
                  this.model.customerPaymentSellingPrice ===
                    this.model.customerPaymentDownPayment
                ) {
                  return true;
                }
              },
            },
            {
              type: "input",
              inputType: "number",
              label: "Total Price(with EMI)",
              model: "customerPaymentTotalPrice",
              required: true,
              disabled: true,
              styleClasses: "col-md-3",
              maxlength: 25,
              visible(model) {
                if (
                  model.customerEmiStatus &&
                  this.model.customerPaymentSellingPrice &&
                  this.model.customerPaymentDownPayment &&
                  model.customerEmiMonths
                ) {
                  return true;
                }
              },
            },
          ],
        },
        {
          styleClasses: "border border-info rounded mb-3",
          legend: "EMI Option",
          fields: [
            {
              type: "switch",
              label: "EMI",
              model: "customerEmiStatus",
              textOn: "Yes",
              valueOn: true,
              textOff: "No",
              valueOff: false,
              //validator: VueFormGenerator.validators.RPMCCMrequired,
              hint: "toggle to change status",
              required: true,
              styleClasses: "col-md-2 ",
              disabled(model) {
                if (
                  !model.customerPaymentDownPayment ||
                  model.customerPaymentSellingPrice ===
                    model.customerPaymentDownPayment ||
                  disablePayment
                ) {
                  return true;
                }
              },
            },

            {
              type: "input",
              inputType: "text",
              label: "Months",
              model: "customerEmiMonths",
              placeholder: "Months",
              required: true,
              styleClasses: "col-md-2",
              maxlength: 25,
              onChanged: function(value, model) {
                this.model.customerEmiStartDate = limitDate;
                var endDate = new Date(
                  moment(this.model.customerEmiStartDate).add(model, "months")
                );
                this.model.customerEmiEndDate =
                  endDate.getFullYear() +
                  "-" +
                  endDate.getMonth() +
                  "-" +
                  endDate.getDate();
                if (
                  model &&
                  this.model.customerPaymentSellingPrice &&
                  this.model.customerPaymentDownPayment
                ) {
                  var diff =
                    parseInt(this.model.customerPaymentSellingPrice) -
                    parseInt(this.model.customerPaymentDownPayment);
                  var emiperMonth = diff / model + 0.02 * diff;
                  emiperMonth = Math.round(emiperMonth);
                  this.model.customerEmiPerMonth = emiperMonth;
                  this.model.customerEmiTotal = emiperMonth * model;
                  this.model.customerPaymentTotalPrice =
                    parseInt(this.model.customerEmiTotal) +
                    parseInt(this.model.customerPaymentDownPayment);
                }
                var s = model;
                var res = s.replace(/\D+/g, "").replace(/^(\d{2}).*/, "$1");
                this.model.customerEmiMonths = res;
              },
              visible(model) {
                if (model.customerEmiStatus) {
                  return true;
                }
              },
              disabled() {
                if (disablePayment) {
                  return true;
                }
              },
            },

            {
              type: "input",
              inputType: "date",
              label: "Start Date ",
              name: "startDate",
              model: "customerEmiStartDate",
              required: true,
              styleClasses: "col-md-2",
              max: "2100-12-31",
              min: limitDate,

              visible(model) {
                if (model.customerEmiStatus) {
                  return true;
                }
              },
              disabled(model) {
                if (!model.customerEmiMonths || disablePayment) {
                  return true;
                }
              },
              onChanged: function(value, model) {
                var endDate = new Date(
                  moment(model).add(this.model.customerEmiMonths, "months")
                );
                this.model.customerEmiEndDate =
                  endDate.getFullYear() +
                  "-" +
                  endDate.getMonth() +
                  "-" +
                  endDate.getDate();
              },
            },

            {
              type: "input",
              inputType: "date",
              label: "End Date ",
              name: "customer",
              model: "customerEmiEndDate",
              styleClasses: "col-md-2",
              max: "2100-12-31",
              min: limitDate,
              required: true,
              visible(model) {
                if (model.customerEmiStatus) {
                  return true;
                }
              },
              disabled(model) {
                if (
                  (!model.customerEmiMonths && !model.customerEmiStartDate) ||
                  disablePayment
                ) {
                  return true;
                }
              },
            },
            {
              type: "input",
              inputType: "number",
              label: "Per Month EMI",
              model: "customerEmiPerMonth",
              placeholder: "",
              required: true,
              styleClasses: "col-md-2 ",
              maxlength: 25,
              disabled: true,
              visible(model) {
                if (model.customerEmiStatus) {
                  return true;
                }
              },
            },
            {
              type: "input",
              inputType: "number",
              label: "Total EMI",
              model: "customerEmiTotal",
              placeholder: "",
              required: true,
              styleClasses: "col-md-2 ",
              maxlength: 25,
              disabled: true,
              visible(model) {
                if (model.customerEmiStatus) {
                  return true;
                }
              },
            },
          ],
        },
        {
          fields: [
            {
              type: "input",
              inputType: "text",
              label: "Customer Name",
              model: "customerName",
              placeholder: "Enter Customer Name",
              required: true,
              styleClasses: "col-md-3",
              maxlength: 50,
              pattern: "[A-za-z ]{1,50}",
              validator: VueFormGenerator.validators.charValidations,
            },
            {
              type: "textArea",
              label: "Customer Address",
              model: "customerAddress",
              placeholder: "Enter Customer Name",
              required: true,
              rows: 1,
              styleClasses: "col-md-3",
              maxlength: 200,
            },
            {
              type: "input",
              inputType: "text",
              label: "Zipcode",
              model: "customerZipcode",
              placeholder: "Enter ZipCode",
              required: true,
              styleClasses: "col-md-2",
              maxlength: 6,
              validator: VueFormGenerator.validators.zipcodeValidation,

              onChanged: function(value, model) {
                var s = model;
                var res = s
                  .replace(/\D+/g, "")
                  .replace(/^(\d{3})(\d{3})(\d{4}).*/, "$1-$2-$3");
                this.model.customerZipcode = res;
              },
            },
            {
              type: "input",
              inputType: "text",
              label: "Customer Mobile No",
              model: "customerMobileNo",
              placeholder: "Enter Customer Mobile No",
              required: true,
              styleClasses: "col-md-2",
              maxlength: 10,
              onChanged: function(value, model) {
                var s = model;
                var res = s
                  .replace(/\D+/g, "")
                  .replace(/^(\d{3})(\d{3})(\d{4}).*/, "$1-$2-$3");
                this.model.customerMobileNo = res;
              },
              validator: VueFormGenerator.validators.phoneNoValidation,
            },
            {
              type: "input",
              inputType: "text",
              label: "Customer Alternate No",
              model: "customerAlternateNo",
              placeholder: "Enter Customer Alternate No",
              styleClasses: "col-md-2",
              maxlength: 10,
              onChanged: function(value, model) {
                var s = model;
                var res = s
                  .replace(/\D+/g, "")
                  .replace(/^(\d{3})(\d{3})(\d{4}).*/, "$1-$2-$3");
                this.model.customerAlternateNo = res;
              },
              validator: VueFormGenerator.validators.phoneNoValidation,
            },
            {
              type: "input",
              inputType: "text",
              label: "Gurantor Name",
              model: "customerGuarantorName",
              placeholder: "Enter Gurantor Name",
              required: true,
              styleClasses: "col-md-3",
              maxlength: 25,
              pattern: "[A-za-z ]{1,50}",
              validator: VueFormGenerator.validators.charValidations,
            },
            {
              type: "textArea",
              label: "Gurantor Address",
              model: "customerGurantorAddress",
              placeholder: "Enter Gurantor Address",
              required: true,
              rows: 1,
              styleClasses: "col-md-3",
              maxlength: 200,
            },
            {
              type: "input",
              inputType: "text",
              label: "Zipcode",
              model: "customerGurantorZipcode",
              placeholder: "Enter Gurantor ZipCode",
              required: true,
              styleClasses: "col-md-2",
              maxlength: 6,
              validator: VueFormGenerator.validators.zipcodeValidation,
              onChanged: function(value, model) {
                var s = model;
                var res = s
                  .replace(/\D+/g, "")
                  .replace(/^(\d{3})(\d{3})(\d{4}).*/, "$1-$2-$3");
                this.model.customerGurantorZipcode = res;
              },
            },
            {
              type: "input",
              inputType: "text",
              label: "Guraantor Mobile No",
              model: "customerGurantorMobileNo",
              placeholder: "Enter Gurantor Mobile No",
              required: true,
              styleClasses: "col-md-2",
              maxlength: 10,
              onChanged: function(value, model) {
                var s = model;
                var res = s
                  .replace(/\D+/g, "")
                  .replace(/^(\d{3})(\d{3})(\d{4}).*/, "$1-$2-$3");
                this.model.customerGurantorMobileNo = res;
              },
              validator: VueFormGenerator.validators.phoneNoValidation,
            },
            {
              type: "input",
              inputType: "text",
              label: "Gurantor Alternate No",
              model: "customerGurantorAlternateNo",
              placeholder: "Enter Gurantor Alternate No",
              styleClasses: "col-md-2",
              maxlength: 10,
              onChanged: function(value, model) {
                var s = model;
                var res = s
                  .replace(/\D+/g, "")
                  .replace(/^(\d{3})(\d{3})(\d{4}).*/, "$1-$2-$3");
                this.model.customerGurantorAlternateNo = res;
              },
              validator: VueFormGenerator.validators.phoneNoValidation,
            },
          ],
        },
      ],
    };
  },
};
