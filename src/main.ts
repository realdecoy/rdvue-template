import '@/config/register-service-worker';
import router from '@/config/router';
import App from '@/pages/app/app.vue';
import store from '@/store';
import '@/theme/_all.scss';
import Vue from 'vue';
import { Lookup } from './modules/core';

// tslint:disable-next-line: no-var-requires
const { default: modules } = require('../.rdvue/modules.js') as Lookup<{}>;

Vue.config.productionTip = false;

new Vue({
  ...modules,
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
