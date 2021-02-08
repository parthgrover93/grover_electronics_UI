<template>
  <nav
    class="navbar navbar-expand-lg navbar-light bg-light shadow increase-fontsize"
    id="nav-bar"
  >
    <!-- <i class="fa fa-bars fa1" aria-hidden="true" @click="toggleSideBar" style="margin-left:5px"></i> -->
    <!-- <router-link
      to="/"
      class="nav-link"
      active-class="active"
      style="padding-left: 0;font-size:20px"
    >
      <b style="color:#7CFC00"> Grover </b>
      <b style="color:orange ">Electronics </b>
    </router-link> -->
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse bg-light" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link class="nav-link" active-class="active" to="/" rout exact
            ><b>Home</b></router-link
          >
        </li>
        <li class="nav-item">
          <router-link
            class="nav-link"
            active-class="active"
            to="/customerList"
            rout
            exact
            ><b>Customer</b></router-link
          >
        </li>
        <li class="nav-item">
          <router-link
            class="nav-link"
            active-class="active"
            to="/createExpenditure"
            rout
            exact
            ><b>Expenditure</b></router-link
          >
        </li>
 
          <a
              class="dropdown-item mt-1"
              @click="doLogout"
              style="cursor: pointer; color: #007bff"
            >
              <i
                class="fa fa-sign-out fa2"
                aria-hidden="true"
                style="padding-right: 5px"
              ></i
              ><b>Logout</b>
            </a>
      </ul>
      <form class="form-inline p-2">
        <li class="nav-item dropdown" style="list-style: none">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <b>
              <i class="fa fa-user-circle fa-lg" aria-hidden="true"></i>
              {{ JSON.parse(this.$store.state.Login.userDetails).userFullName }}
            </b>
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item">
              <router-link
                to="/"
                active-class="active"
                style="text-decoration: none"
                ><i
                  class="fa fa-user fa2"
                  aria-hidden="true"
                  style="padding-right: 8px"
                ></i
                >Profile
              </router-link>
            </a>
            <a
              class="dropdown-item"
              @click="changePassword"
              style="cursor: pointer"
            >
              <i class="fa fa-pencil-square-o mr-1" aria-hidden="true"></i
              >Change Password
            </a>
            <!-- <a
              class="dropdown-item"
              @click="doLogout"
              style="cursor: pointer; color: #007bff"
            >
              <i
                class="fa fa-sign-out fa2"
                aria-hidden="true"
                style="padding-right: 5px"
              ></i
              >Logout
            </a> -->
          </div>
        </li>
      </form>
    </div>
  </nav>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "NavBar",
  components: {},
  data() {
    return { notification: false };
  },
  created: function () {},
  methods: {
    ...mapActions(["logout"]),
    toggleSideBar: function (event) {
      this.$emit("toggleSideBar", event);
    },
    doLogout: function () {
      this.$router.push("/");
      this.logout();
      location.reload();
    },
    routetoadminprofile: function () {
      this.$route.push({ name: "IndexAdminProfilePages" });
    },
    showNotification() {
      this.notification = true;
    },
    hideNotification() {
      this.notification = false;
    },
    changePassword() {
      this.$router.push({ name: "ChangePassword", params: { index: true } });
    },
  },
};
</script>

<style scoped>
#nav-bar {
  padding: 0 10px;
}
.fa1 {
  font-size: 1.5em;
  margin-right: 15px;
}
</style>
<style>
.logo {
  height: 40px;
}
.label-div {
  color: white;
  padding-top: 5px;
}
.value-div {
  color: black;
  width: 30px;
  text-align: center;
  max-width: 30px;
  padding-top: 5px;
}

.stat-div {
  margin: 0 10px;
  display: flex;
  min-width: 170px;
  height: 38px;
  border-radius: 5px;
  margin-bottom: 5px;
}
a {
  color: #007bff !important;
  text-decoration: none;
  background-color: transparent;
}
</style>
