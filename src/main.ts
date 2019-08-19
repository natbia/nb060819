import Vue from 'vue';
import VueRouter from 'vue-router';
import router from './router/Routes';
import App from './App.vue';
import store from './store';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
