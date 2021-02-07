<template>
  <div
    id="app"
    style="max-width: 100%; overflow-x: hidden"
    class="container-fluid"
  >
    <div v-if="getLoginStatus">
      <TopBar></TopBar>
      <div class="row">
        <div class="col main-content">
          <router-view />
        </div>
      </div>
    </div>
    <div v-else>
      <Login />
    </div>
  </div>
</template>

<script>
import TopBar from "./components/Navigation-Fixed/TopBar";
import Login from "./components/Login";
import { mapGetters } from "vuex";

export default {
  name: "App",
  components: {
    TopBar,
    Login,
  },
  data() {
    return {
      hideSideBar: false,
    };
  },
  methods: {},
  computed: {
    ...mapGetters(["getLoginStatus"]),
  },
};
</script>

<style scoped>
.hidden {
  display: none;
  margin-right: 15px;
}
.fa2 {
  font-size: 2em;
}
.main-content {
  padding: 5px 0 5px 5px !important;
  margin: 0;
  max-width: 100%;
  overflow-x: hidden;
}
</style>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 0 !important;
  background-color: #8ec5fc;
  background-image: linear-gradient(180deg, #8ec5fc 0%, #ffffff 100%);
}
.vue-form-generator .field-switch input:checked ~ .label {
  background: #4f8ff0 !important;
}
.toast-text {
  padding: 15px 20px !important;
  font-size: 15px;
}

/* .vue-form-generator label {
  color: #222222;
} */
.vue-form-generator .field-wrap button,
.vue-form-generator .field-wrap input[type="submit"] {
  color: #222222;
  background-image: linear-gradient(#f7f7f7, #fff);
  border: 1px solid #9eccfb;
}
.form-control {
  background-image: linear-gradient(#f7f7f7, #fff);
  border: 1px solid #9eccfb;
}

.vue-form-generator legend {
  margin: 10px;
  width: fit-content;
  padding: 0 5px;
}

.vue-form-generator .field-select select {
  border: 1px solid #9eccfb;
  background-image: linear-gradient(#f7f7f7, #fff);
}

.vue-form-generator .field-input input {
  border: 1px solid #9eccfb;
  background-image: linear-gradient(#f7f7f7, #fff);
}

.vue-form-generator .field-checklist selected {
  border: 1px solid #9eccfb;
  background-image: linear-gradient(#f7f7f7, #fff);
}

.vgt-table thead th {
  color: #010101 !important;
  padding-left: 13px !important;
  background: #98cef0 !important;
}
table.vgt-table td {
  padding-left: 14px !important;
  vertical-align: middle;
  color:black !important
}
.title-color {
  color: #0275d8 !important;
}

</style>
