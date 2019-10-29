import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import VueRouter from "vue-router";

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
  created() {
    console.log("Start");
    this.$store.dispatch("loaddrinks");
    this.$store.dispatch("alldrinks")
  }
}).$mount("#app");
