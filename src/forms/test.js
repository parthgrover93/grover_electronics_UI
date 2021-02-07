import Vue from "vue";
import moment from "moment";
import VueFormGenerator from "vue-form-generator";
import "vue-form-generator/dist/vfg.css";

Vue.use(VueFormGenerator, {
  validators: {
    //   RPMdate: (value, model, field) => {
    //     if (field.patientRpmEndDate) {
    //       if (new Date(field.patientRpmStartDate).getTime() > new Date(field.patientRpmEndDate).getTime()) {
    //         return ["RPM end date cannot be before start date"];
    //       }
    //     }
    //   },
    //   RPMstartDate: (value, model, field) => {
    //     let x =
    //       (new Date().getHours() * 3600 +
    //         new Date().getMinutes() * 60 +
    //         new Date().getSeconds()) *
    //       1000;
    //     let y = new Date().getTime() - x;
    //     if ((new Date(field.patientRpmStartDate).getTime() + 3000) < y) {
    //       return ["RPM start date cannot be before today's date"]
    //     }
    //   },
    //   CCMdate: (value, model, field) => {
    //     if (field.patientCcmEndDate) {
    //       if (new Date(field.patientCcmStartDate).getTime() > new Date(field.patientCcmEndDate).getTime()) {
    //         return ["CCM end date cannot be before start date"];
    //       }
    //     }
    //   },
    //   CCMstartDate: (value, model, field) => {
    //     let x =
    //       (new Date().getHours() * 3600 +
    //         new Date().getMinutes() * 60 +
    //         new Date().getSeconds()) *
    //       1000;
    //     let y = new Date().getTime() - x;
    //     if ((new Date(field.patientCcmStartDate).getTime() + 3000) < y) {
    //       return ["CCM start date cannot be before today's date"]
    //     }
    //   },
    //   DOBdate: (value, model, field) => {
    //     let x =
    //       (new Date().getHours() * 3600 +
    //         new Date().getMinutes() * 60 +
    //         new Date().getSeconds()) *
    //       1000;
    //     let y = new Date().getTime() - x;
    //     if (new Date(field.patientDateOfBirth).getTime() > y) {
    //       return ["Date of birth cannot exceed today's date"];
    //     }
    //   },
    //   charValidations: value => {
    //     let regex = /^[a-zA-Z ]{1,}$/;
    //     if (!regex.test(value) && value) {
    //       return ["Cannot contain numbers or specials characters"];
    //     } else {
    //       return [];
    //     }
    //   },
    //   zipcodeValidation: value => {
    //     let regex = /^[0-9]{6,6}$/;
    //     if (!regex.test(value)) {
    //       return ["Zipcode should contain 6 digits"];
    //     } else {
    //       return [];
    //     }
    //   },
    //   phoneNoValidation: (value, model, field) => {
    //     let regex = /^[0-9-]{12,12}$/;
    //     if (value) {
    //       if (!regex.test(value)) {
    //         return ["PhoneNo should contain 10 digits"];
    //       } else {
    //         return [];
    //       }
    //     }
    //   },
    //   extNoValidation: (value, model, field) => {
    //     let regex = /^[0-9-]{4,4}$/;
    //     if (value) {
    //       if (!regex.test(value)) {
    //         return ["ExtNo should contain 4 digits"];
    //       } else {
    //         return [];
    //       }
    //     }
    //   },
    // ssnNoValidation: (value, model, field) => {
    //     let regex = /^[0-9-]{11,11}$/;
    //     if (value) {
    //       if (!regex.test(value)) {
    //         return ["SsnNo should contain 9 digits"];
    //       } else {
    //         return [];
    //       }
    //     }
    //   }
  },
});

export default {
  getSchemaData() {
    var limitDate = "";
    if (new Date().getMonth() + 1 < 10) {
      if (new Date().getDate() < 10) {
        limitDate =
          new Date().getFullYear() +
          "-" +
          "0" +
          (new Date().getMonth() + 1) +
          "-" +
          "0" +
          new Date().getDate();
      } else {
        limitDate =
          new Date().getFullYear() +
          "-" +
          "0" +
          (new Date().getMonth() + 1) +
          "-" +
          new Date().getDate();
      }
    } else {
      if (new Date().getDate() < 10) {
        limitDate =
          new Date().getFullYear() +
          "-" +
          (new Date().getMonth() + 1) +
          "-" +
          "0" +
          new Date().getDate();
      } else {
        limitDate =
          new Date().getFullYear() +
          "-" +
          (new Date().getMonth() + 1) +
          "-" +
          new Date().getDate();
      }
    }

    return {
      groups: [
        {
          styleClasses: "border border-info rounded mb-3",
          legend: "Payment",

          fields: [
            {
              type: "select",
              model: "productCode",
              label: "Product",
              required: true,
              styleClasses: "col-md-3",
              validator: VueFormGenerator.validators.required,
              selectOptions: {
                noneSelectedText: "Select",
              },
              values: [
                { name: "TV", id: "1" },
                { name: "Fridge", id: "2" },
              ],
            },

            {
              type: "input",
              inputType: "number",
              label: "Selling Price",
              model: "sellingPrice",
              placeholder: "Enter Selling ",
              required: true,
              styleClasses: "col-md-3",
              maxlength: 25,
              onChanged: function(value, model) {
                if (model === this.model.downPayment) {
                  this.model.totalPrice = model;
                  this.model.emiStatus=false
                } else {
                  this.model.totalPrice = "";
                }
              },
            },
            {
              type: "input",
              inputType: "number",
              label: "Down Payment",
              model: "downPayment",
              placeholder: "Enter DownPayment",
              required: true,
              styleClasses: "col-md-3",
              maxlength: 25,
              onChanged: function(value, model) {
                if (model === this.model.sellingPrice) {
                  this.model.totalPrice = this.model.sellingPrice;
                  this.model.emiStatus=false;
                } else {
                  this.model.totalPrice = "";
                }
              },
            },

            {
              type: "input",
              inputType: "number",
              label: "Total Price(without EMI)",
              model: "totalPrice",
              placeholder: "Enter DownPayment",
              required: true,
              disabled: true,
              styleClasses: "col-md-3",
              maxlength: 25,
              visible(model) {
                if (!model.emiStatus) {
                  return true;
                }
              },
            },
            {
              type: "input",
              inputType: "number",
              label: "Total Price(with EMI)",
              model: "totalPrice",
              placeholder: "Enter DownPayment",
              required: true,
              disabled: true,
              styleClasses: "col-md-3",
              maxlength: 25,
              visible(model) {
                if (model.emiStatus) {
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
              model: "emiStatus",
              textOn: "Yes",
              valueOn: true,
              textOff: "No",
              valueOff: false,
              //validator: VueFormGenerator.validators.RPMCCMrequired,
              hint: "toggle to change status",
              required: true,
              styleClasses: "col-md-2 ",
              disabled(model) {
                if (!model.downPayment || (model.sellingPrice===model.downPayment)) {
                  return true;
                }
              },
            },

            {
              type: "input",
              inputType: "number",
              label: "Months",
              model: "customerEmiMonths",
              placeholder: "Months",
              required: true,
              styleClasses: "col-md-1",
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
              },
              visible(model) {
                if (model.emiStatus) {
                  return true;
                }
              },
            },
            {
              type: "input",
              inputType: "number",
              label: "%",
              model: "customerEmiPercentage",
              placeholder: "EMI %",
              required: true,
              styleClasses: "col-md-1",
              maxlength: 25,
              visible(model) {
                if (model.emiStatus) {
                  return true;
                }
              },
              disabled(model) {
                if (!model.customerEmiMonths) {
                  return true;
                }
              },
              onChanged: function(value, model) {
                var emi = parseInt(this.model.sellingPrice) - parseInt(this.model.downPayment);
                this.model.customerEmiPerMonth = emi * model ;

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
                if (model.emiStatus) {
                  return true;
                }
              },
              disabled(model) {
                if (!model.customerEmiMonths) {
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
                if (model.emiStatus) {
                  return true;
                }
              },
              disabled(model) {
                if (!model.customerEmiMonths && !model.customerEmiStartDate) {
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
                if (model.emiStatus) {
                  return true;
                }
              },
            },
            {
              type: "input",
              inputType: "number",
              label: "Total EMI",
              model: "customerTotalEmi",
              placeholder: "",
              required: true,
              styleClasses: "col-md-2 ",
              maxlength: 25,
              disabled: true,
              visible(model) {
                if (model.emiStatus) {
                  return true;
                }
              },
            },
          ],

            //     {
            //       type: "switch",
            //       label: "CCM Status",
            //       model: "ccm_status",
            //       textOn: "Active",
            //       valueOn: "Active",
            //       textOff: "Inactive",
            //       valueOff: "Inactive",
            //       hint: "toggle to change status",
            //       required: true,
            //       styleClasses: "col-md-2 mt-3",
            //       //validator: VueFormGenerator.validators.RPMCCMrequired,
            //       disabled(model) {
            //         if (
            //           enabledisable === 1 &&
            //           new Date(model.patientCcmStartDate) < new Date()
            //         ) {
            //           return true;
            //         } else {
            //           return false;
            //         }
            //       }
            //     },

            //     {
            //       type: "input",
            //       inputType: "date",
            //       label: "CCM Start Date ",
            //       name: "patientCcmStartDate",
            //       model: "patientCcmStartDate",
            //       max: "2100-12-31",
            //       min: limitDate,
            //       required: true,
            //       styleClasses: "col-md-2 mt-3",

            //       validator: ['CCMdate','CCMstartDate'],
            //       visible(model) {
            //         return model && model.ccm_status == "Active";
            //       },
            //       disabled(model) {
            //         if (
            //           enabledisable === 1 &&
            //           new Date(model.patientCcmStartDate) < new Date()
            //         ) {
            //           if (
            //             new Date(model.patientCcmStartDate).getDate() ===
            //             new Date().getDate()
            //           ) {
            //             return false;
            //           } else {
            //             return true;
            //           }
            //         } else {
            //           return false;
            //         }
            //       }
            //     },

            //     {
            //       type: "input",
            //       inputType: "date",
            //       label: "CCM End Date ",
            //       name: "patientCcmEndDate",
            //       model: "patientCcmEndDate",
            //       max: "2100-12-31",
            //       min: limitDate,
            //       styleClasses: "col-md-2 mt-3",
            //       validator: VueFormGenerator.validators.CCMdate,

            //       visible(model) {
            //         return model && model.ccm_status == "Active";
            //       },
            //       disabled(model) {
            //         return model && model.patientCcmStartDate == null;
            //       }
            //     }
            //   ]
            // },
            // {
            //   fields: [
            // {
            //   type: "select",
            //   inputType:"select",
            //   model: "patientTimezone",
            //   label: "Time Zone",
            //   placeholder: "Select Time Zone",
            //   required: true,
            //   styleClasses: "col-md-3",
            //   validator: VueFormGenerator.validators.required,
            //   selectOptions: {
            //     noneSelectedText: "Select"
            //   },
            // }

            //       values: patientDatails['TimeZone']
            //     },
            //     {
            //       type: "select",
            //       model: "patientPrimaryCarePhysician",
            //       label: "Primary Care Physician",
            //       placeholder: "Primary Care Physician",
            //       required: true,
            //       styleClasses: "col-md-3",
            //       validator: VueFormGenerator.validators.required,
            //       selectOptions: {
            //         noneSelectedText: "Select"
            //       },
            //       values: pcpList,
            //       buttons: [
            //         {
            //           classes: "btn btn-primary openPcpModel",
            //           label: "ADD",
            //           onclick: function(pcpList) {
            //             document
            //               .querySelector(".openPcpModel")
            //               .setAttribute("data-toggle", "modal");
            //             document
            //               .querySelector(".openPcpModel")
            //               .setAttribute("data-target", "#addPcp");
            //           }
            //         }
            //       ]
            //     },
            //     {
            //       type: "input",
            //       inputType: "text",
            //       label: "First Name",
            //       model: "patientFirstName",
            //       pattern: "[A-za-z ]{1,25}",
            //       placeholder: "Enter First Name",
            //       required: true,
            //       styleClasses: "col-md-3",
            //       maxlength: 25,
            //       validator: VueFormGenerator.validators.charValidations
            //     },

            //     {
            //       type: "input",
            //       inputType: "text",
            //       label: "Middle Name",
            //       name: "middle_name",
            //       model: "patientMiddleName",
            //       //pattern: "[A-za-z]{1,25}",
            //       required: false,
            //       placeholder: "Enter Middle Name",
            //       styleClasses: "col-md-3",
            //       maxlength: 25,
            //       validator: VueFormGenerator.validators.alpha
            //     },

            //     {
            //       type: "input",
            //       inputType: "text",
            //       label: "Last Name",
            //       name: "last_name",
            //       model: "patientLastName",
            //       required: true,
            //       pattern: "[A-za-z]{1,25}",
            //       styleClasses: "col-md-3 ",
            //       placeholder: "Enter Last Name",
            //       maxlength: 25,
            //       validator: VueFormGenerator.validators.alpha
            //     },

            //     {
            //       type: "input",
            //       inputType: "text",
            //       label: "Nick Name",
            //       model: "patientNickName",
            //       placeholder: "Enter Nick Name",
            //       required: false,
            //       pattern: "[A-za-z ]{1,25}",
            //       validator: "string",
            //       styleClasses: "col-md-3",
            //       validator: VueFormGenerator.validators.charValidations
            //     },

            //     {
            //       type: "input",
            //       inputType: "date",
            //       label: "Date of Birth ",
            //       name: "date_of_birth",
            //       model: "patientDateOfBirth",
            //       required: true,
            //       min: "1900-01-01",
            //       max: limitDate,
            //       styleClasses: "col-md-3 ",
            //       validator: VueFormGenerator.validators.DOBdate,

            //       onChanged: function(value, model) {
            //         if (model < new Date().getTime()) {
            //           this.model.age = ~~(
            //             (Date.now() - model) /
            //             (365.25 * 24 * 60 * 60 * 1000)
            //           );
            //         }
            //       }
            //     },

            //     {
            //       type: "input",
            //       inputType: "number",
            //       label: "Age",
            //       readonly: true,
            //       name: "age",
            //       model: "age",
            //       styleClasses: "col-md-3 ",
            //       placeholder: "Age",
            //       max: 120,
            //       validator: VueFormGenerator.validators.number
            //     },

            //     {
            //       type: "radios",
            //       inputType: "text",
            //       label: "Gender",
            //       name: "gender",
            //       model: "patientGender",
            //       required: true,
            //       styleClasses: "col-md-3 display-inline ",
            //       values: patientDatails["Gender"],
            //       validator: VueFormGenerator.validators.required
            //     },
            //     {
            //       type: "select",
            //       model: "patientMaritalStatus",
            //       label: "Marital Status",
            //       placeholder: "Select Marital Status",
            //       required: true,
            //       styleClasses: "col-md-3",
            //       validator: VueFormGenerator.validators.required,
            //       selectOptions: {
            //         noneSelectedText: "Select"
            //       },

            //       values: patientDatails["Marital Status"]
            //     },
            //     {
            //       type: "input",
            //       inputType: "text",
            //       label: "Spouse Name",
            //       name: "patientSpouseName",
            //       placeholder: "Enter Spouse Name",
            //       model: "patientSpouseName",
            //       pattern: "[A-za-z ]{1,}",
            //       required: false,
            //       styleClasses: "col-md-3 ",
            //       validator: VueFormGenerator.validators.charValidations
            //     },

            //     {
            //       type: "input",
            //       inputType: "tel",
            //       label: "SSN ",
            //       name: "ssn",
            //       model: "patientSsn",
            //       required: true,
            //       pattern: "[0-9]{3}-[0-9]{2}-[0-9]{4}",
            //       styleClasses: "col-md-3 ",
            //       placeholder: "Enter SSN#",
            //       minlength: 9,
            //       maxlength: 9,
            //       hint: "Required:Number(9); format:111-11-1111",
            //       validator: VueFormGenerator.validators.ssnNoValidation,

            //       onChanged: function(value, model) {
            //         var s = model;
            //         var res = s
            //           .replace(/\D+/g, "")
            //           .replace(/^(\d{3})(\d{2})(\d{4}).*/, "$1-$2-$3");
            //         this.model.patientSsn = res;
            //       }
            //     },

            //     {
            //       type: "select",
            //       model: "patientEthinicity",
            //       label: "Ethnicity",
            //       placeholder: "Select Ethnicity",
            //       styleClasses: "col-md-3",
            //       validator: VueFormGenerator.validators.required,
            //       selectOptions: {
            //         noneSelectedText: "Select"
            //       },

            //       values: patientDatails["Ethinicity"]
            //     },
            //     {
            //       type: "select",
            //       model: "patientRace",
            //       label: "Race",
            //       placeholder: "Select Race",
            //       //required: true,
            //       styleClasses: "col-md-3",
            //       validator: VueFormGenerator.validators.required,
            //       selectOptions: {
            //         noneSelectedText: "Select"
            //       },

            //       values: patientDatails["Race"]
            //     },
            //     {
            //       type: "select",
            //       model: "patientBloodType",
            //       label: "Blood Type",
            //       placeholder: "Select Blood Type",
            //       //required: true,
            //       styleClasses: "col-md-3",
            //       validator: VueFormGenerator.validators.required,
            //       selectOptions: {
            //         noneSelectedText: "Select"
            //       },
            //       values: patientDatails["Blood Type"]
            //     },

            //     {
            //       type: "input",
            //       inputType: "email",
            //       label: "Email",
            //       model: "patientEmailAddress",
            //       placeholder: "Enter Email",
            //       styleClasses: "col-md-3 ",
            //       validator: VueFormGenerator.validators.email
            //     },

            //     {
            //       type: "input",
            //       inputType: "email",
            //       label: "Alternate Email",
            //       model: "patientAlternateEmailAddress",
            //       required: false,
            //       styleClasses: "col-md-3 ",
            //       placeholder: "Enter your Alternate email",
            //       validator: VueFormGenerator.validators.email
            //     },

            //     {
            //       type: "input",
            //       inputType: "tel",
            //       label: "Work Phone ",
            //       name: "work_phone",
            //       model: "patientWorkPhone",
            //       //required: true,
            //       pattern: "[0-9]{3}-[0-9]{3}-[0-9]{4}",
            //       styleClasses: "col-md-3 ",
            //       placeholder: "Enter Work Phone #",
            //       minlength: 10,
            //       maxlength: 10,
            //       hint: "Required:Number(10)",
            //       validator: VueFormGenerator.validators.phoneNoValidation,

            //       onChanged: function(value, model) {
            //         var s = model;
            //         var res = s
            //           .replace(/\D+/g, "")
            //           .replace(/^(\d{3})(\d{3})(\d{4}).*/, "$1-$2-$3");
            //         this.model.patientWorkPhone = res;
            //       }
            //     },

            //     {
            //       type: "input",
            //       inputType: "tel",
            //       label: "Extension",
            //       model: "patientWorkPhoneExtenion",
            //       //required: true,
            //       placeholder: "Enter your Extension",
            //       styleClasses: "col-md-3",
            //       minlength: 4,
            //       maxlength: 4,
            //       pattern: "[0-9]{4}",
            //       hint: "Required:Number(4)",
            //       validator: VueFormGenerator.validators.extNoValidation,
            //       onChanged: function(value, model) {
            //         var s = model;
            //         var res = s.replace(/\D+/g, "").replace(/^(\d{4}).*/, "$1");
            //         this.model.patientWorkPhoneExtenion = res;
            //       }
            //     },

            //     {
            //       type: "input",
            //       inputType: "tel",
            //       label: "Phone # ",
            //       name: "phone",
            //       model: "patientPhone",
            //       //required: true,
            //       pattern: "[0-9]{3}-[0-9]{3}-[0-9]{4}",
            //       styleClasses: "col-md-3 ",
            //       placeholder: "Enter Phone #",
            //       minlength: 10,
            //       hint: "Required:Number(10)",
            //       validator: VueFormGenerator.validators.phoneNoValidation,

            //       onChanged: function(value, model) {
            //         var s = model;
            //         var res = s
            //           .replace(/\D+/g, "")
            //           .replace(/^(\d{3})(\d{3})(\d{4}).*/, "$1-$2-$3");
            //         this.model.patientPhone = res;
            //       }
            //     },

            //     {
            //       type: "input",
            //       inputType: "tel",
            //       label: "Mobile # ",
            //       name: "mobile",
            //       model: "patientMobile",
            //       //required: true,
            //       pattern: "[0-9]{3}-[0-9]{3}-[0-9]{4}",
            //       styleClasses: "col-md-3 ",
            //       placeholder: "Enter Mobile #",
            //       minlength: 10,
            //       hint: "Required:Number(10)",
            //       validator: VueFormGenerator.validators.phoneNoValidation,

            //       onChanged: function(value, model) {
            //         var s = model;
            //         var res = s
            //           .replace(/\D+/g, "")
            //           .replace(/^(\d{3})(\d{3})(\d{4}).*/, "$1-$2-$3");
            //         this.model.patientMobile = res;
            //       }
            //     },

            //     {
            //       type: "input",
            //       inputType: "address",
            //       rows: 3,
            //       cols: 6,
            //       label: "Address",
            //       model: "patientAddress",
            //       required: false,
            //       placeholder: "Enter Address",
            //       styleClasses: "col-md-3 ",
            //       validator: VueFormGenerator.validators.string
            //     },

            //     {
            //       type: "select",
            //       model: "patientCountry",
            //       label: "Country",
            //       placeholder: "Select Country",
            //       //required: true,
            //       hint: "Select country to show states",
            //       styleClasses: "col-md-3",
            //       validator: VueFormGenerator.validators.required,

            //       selectOptions: {
            //         noneSelectedText: "Select"
            //       },
            //       values: patientDatails["Country"]
            //       //   onChanged: function (value, model) {
            //       //   x=this.model.patientCountry
            //       // }
            //     },

            //     {
            //       type: "select",
            //       label: "State",
            //       model: "patientState",
            //       styleClasses: "col-md-3 ",
            //       //required: true,
            //       //pattern: "[A-za-z ]{25}",
            //       selectOptions: {
            //         noneSelectedText: "Select"
            //       },
            //       visible(model) {
            //         // y="'"+'State:'+x+"'"
            //         // alert(y)
            //         return (
            //           model && model.patientCountry == "United States Of America"
            //         );
            //       },
            //       // values:patientDatails[y],
            //       values: patientDatails["State:United States Of America"],
            //       validator: VueFormGenerator.validators.required
            //     },

            //     {
            //       type: "select",
            //       label: "State",
            //       model: "patientState",
            //       styleClasses: "col-md-3 ",
            //       //required: true,
            //       values: patientDatails["State:United Kingdom"],
            //       selectOptions: {
            //         noneSelectedText: "Select"
            //       },
            //       visible(model) {
            //         return model && model.patientCountry == "United Kingdom";
            //       },
            //       validator: VueFormGenerator.validators.required
            //     },

            //     {
            //       type: "select",
            //       label: "State",
            //       model: "patientState",
            //       styleClasses: "col-md-3 ",
            //       //required: true,
            //       values: patientDatails["State:India"],
            //       selectOptions: {
            //         noneSelectedText: "Select"
            //       },
            //       visible(model) {
            //         return model && model.patientCountry == "India";
            //       },
            //       validator: VueFormGenerator.validators.required
            //     },

            //     {
            //       type: "input",
            //       inputType: "text",
            //       label: "City",
            //       model: "patientCity",
            //       required: false,
            //       placeholder: "Enter City",
            //       pattern: "[A-za-z ]{1,25}",
            //       styleClasses: "col-md-3 ",
            //       validator: VueFormGenerator.validators.charValidations
            //     },

            //     {
            //       type: "input",
            //       inputType: "text",
            //       label: "ZipCode",
            //       model: "patientZipcode",
            //       pattern: "[0-9]{6}",
            //       maxlength: 6,
            //       minlength: 6,
            //       hint: "Required:6 Digits",
            //       required: false,
            //       placeholder: "Enter your ZipCode",
            //       styleClasses: "col-md-3 ",
            //       validator: VueFormGenerator.validators.zipcodeValidation
            //     },

            //     {
            //       type: "select",
            //       label: "Preferred Contact Method",
            //       model: "patientPreferredContactMethod",
            //       styleClasses: "col-md-3 ",
            //       values: [
            //         { id: "work_phone", name: "Work Phone" },
            //         { id: "phone #", name: "Phone #" },
            //         { id: "mobiie #", name: "Mobile #" }
            //       ],
            //       selectOptions: {
            //         noneSelectedText: "Select"
            //       },
            //       // required: true,
            //       validator: VueFormGenerator.validators.required
            //     },

            //     {
            //       type: "checklist",
            //       inputType: "input",
            //       styleClasses: "col-md-3",
            //       label: "Preferred Time",
            //       name: "preferred_time",
            //       model: "preferred_time",
            //       required: false,
            //       placeholder: "Preferred Time",
            //       values: [" AM", " PM"]
            //     },

            //     {
            //       type: "input",
            //       inputType: "text",
            //       label: "Prefix",
            //       model: "patientPrefix",
            //       placeholder: "Prefix",
            //       maxlength: 3,
            //       pattern: "[A-za-z]{1,3}",
            //       styleClasses: "col-md-3 ",
            //       required: false,
            //       validator: VueFormGenerator.validators.alpha
            //     },
            //     {
            //       type: "input",
            //       inputType: "text",
            //       label: "Suffix",
            //       model: "patientSuffix",
            //       pattern: "[A-za-z]{1,5}",
            //       // required: true,
            //       maxlength: 5,
            //       placeholder: "Suffix",
            //       styleClasses: "col-md-3 ",
            //       validator: VueFormGenerator.validators.alpha
            //     },

            //     {
            //       type: "input",
            //       inputType: "text",
            //       label: "Previous Name",
            //       name: "previous_name",
            //       model: "patientPreviousName",
            //       pattern: "[A-za-z ]{1,25}",
            //       required: false,
            //       placeholder: "Previous Name",
            //       styleClasses: "col-md-3 ",
            //       validator: VueFormGenerator.validators.charValidations
            //     },
            //     {
            //       type: "select",
            //       label: "Language",
            //       model: "patientLanguage",
            //       styleClasses: "col-md-3 ",
            //       values: patientDatails["Language"],
            //       selectOptions: {
            //         noneSelectedText: "Select"
            //       },
            //       required: false
            //     },

            //     {
            //       type: "checklist",
            //       label: "Chronic",
            //       model: "Chronic",
            //       styleClasses: "col-md-3 form-group-lg",
            //       multiSelect: true,
            //       multi: true,
            //       values: patientDatails["Chronic"],
            //       selectOptions: {
            //         noneSelectedText: "Select Any/All"
            //       },
            //       // required: true,
            //       validator: VueFormGenerator.validators.required
            //     }
        },
      ],
    };
  },
};
