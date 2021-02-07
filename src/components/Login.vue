<template>
  <div
    class="container-fluid"
    style="margin: 0 auto; height: 100vh; padding-top: 50px"
  >
    <div
      class="col div-center login-div shadow"
      style="
        background-color: #e6eefa;
        opacity: 0.8;
        backdrop-filter: blur(6px);
      "
    >
      <div class="panel panel-default">
        <div style="font-size:30px;color:#1e90ff"><b>
         Grover Electronics</b>
        </div>

        <!-- <div class="panel-heading login-background-text-color">
            <img src="../assets/userpic.png" height="25" width="25" class="image-adjustment" />
            <h3 class="panel-title login-text-color left-adjustment-text">Login</h3>
        </div>-->
        <br />
        <div class="panel-body">
          <span
            v-if="this.username === '' || this.password === ''"
            style="color: red"
          >
            {{ validationMessage }}
          </span>
          <div class="form-group">
            <h4 class="left-adjustment-text"><b>Username</b></h4>
            <input
              class="form-control input-text-adjustment"
              placeholder="Enter your user name"
              v-model="username"
              type="text"
              required
            />
          </div>
          <div class="form-group mt-2">
            <h4 style="line-height: 0.2">
              <p class="left-adjustment-text">
                <b>Password</b>
              </p>
            </h4>
            <div class="input-icons">
              <input
                class="form-control"
                id="Pass"
                name="password"
                placeholder="your password"
                v-model="password"
                :type="passwordFieldType"
                required
              />
              <span>
                <i
                  @click="switchVisibility"
                  class="fa fa-fw fa-eye field-icon toggle-password"
                >
                </i
              ></span>
            </div>
          </div>
        </div>
        <div class="panel-heading">
          <div class="row">
            <div class="col-auto">
              <label class="left-adjustment-checkbox style-label-checkbox">
                <!-- <input
                  name="remember"
                  class="left-adjustment-checkbox"
                  type="checkbox"
                  value="Remember Me"
                  style="margin:3px;"
                />Remember Me? -->
                <!-- | -->
                <a @click="forgotPassword" style="cursor: pointer"
                  >Forgot your password?</a
                >
              </label>
            </div>
            <div class="col-md-12 mt-3" style="text-align: left">
              <button
                type="button"
                class="btn btn-primary login-cancel-text-size"
                @click="dologin"
              >
                <b>Login</b>
              </button>
            </div>
          </div>
          <!-- <div
            class="row"
            style="margin-top:10px;color:red;margin-left:5px"
            v-if="getMessage"
          >{{getMessage}}</div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Login",
  data: () => {
    return {
      username: "",
      password: "",
      validationMessage: "",
      passwordFieldType: "password",
    };
  },

  methods: {
    ...mapActions(["login"]),
    dologin() {
      if (this.username === "" || this.password === "") {
        this.validationMessage = "Please fill Username or password";
      } else {
        var req = {
          username: this.username,
          password: btoa(this.password),
        };
        this.login(req);
      }
    },
    switchVisibility: function () {
      this.passwordFieldType =
        this.passwordFieldType === "password" ? "text" : "password";
    },
    forgotPassword() {
      this.$emit("ForgotPassword", true);
    },
  },
};
</script>

<style scoped>
.div-center {
  margin-top: 60px;
  max-width: 500px;
  text-align: center;
}
.left-adjustment-text {
  text-align: left;
  font-size: 15pt;
  color: #222222;
}

.left-adjustment-checkbox {
  float: left;
}
.image-adjustment {
  float: left;
}
.right-adjustment-button {
  float: right;
}
.input-text-adjustment {
  width: 70;
  font-size: 11pt;
  background-color: lightblue;
}
.login-text-color {
  color: white;
}
.login-background-text-color {
  background-color: rgb(29, 105, 151);
}
.style-label-checkbox {
  font-size: 9pt;
}
.login-cancel-text-size {
  font-size: 12pt;
}
.login-div {
  margin: 0 auto;
  /* margin-top: 50px; */
  background-color: aliceblue;
  padding: 20px;
  border-radius: 5px;
  border: 2px solid #eff7ff;
}
a {
  color: #007bff !important;
  text-decoration: none;
  background-color: transparent;
}
.input-container {
  display: flex;
  width: 100%;
  margin-bottom: 15px;
}

/* Style the form icons */
.icon {
  padding: 10px;
  background: dodgerblue;
  color: white;
  min-width: 50px;
  text-align: center;
}

/* Style the input fields */
.input-field {
  width: 100%;
  padding: 10px;
  outline: none;
}

.input-field:focus {
  border: 2px solid dodgerblue;
}

/* Set a style for the submit button */
.btn {
  background-color: dodgerblue;
  color: white;
  padding: 15px 20px;
  border: none;
  cursor: pointer;
  width: 100%;
  opacity: 0.9;
}

.btn:hover {
  opacity: 1;
}

.field-icon {
  float: right;
  margin-left: -25px;
  margin-right: 5px;
  margin-top: -25px;
  position: relative;
  z-index: 2;
}
</style>
