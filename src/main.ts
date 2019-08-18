import Vue from 'vue';
import VueRouter from 'vue-router';
import router from './router/Routes';
import App from './App.vue';
import Product from './components/Product';

Vue.config.productionTip = false;

Vue.component('productview', Product);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
