import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import './assets/css/base.css';
import './assets/css/craddetails.css';
// import Viser from 'viser-vue'
Vue.config.productionTip = false;
Vue.use(window.ViserVue.default);
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");