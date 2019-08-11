import Vue from 'vue';
import VueRouter from 'vue-router';
import router from './router/Routes';
import App from './App.vue';

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
