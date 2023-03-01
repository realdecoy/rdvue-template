import '@/config/register-service-worker';
import Vue from 'vue';
import router from '@/config/router';
import App from '@/pages/app/app.vue';
import store from '@/store';
import '@/theme/_all.scss';
// eslint-disable-next-line import/no-internal-modules
import 'tailwindcss/tailwind.css';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app');
