import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export enum Page {
  Login = 'login',
  Proxy = 'proxy',
}

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      name: Page.Login,
      meta: {
        layout: 'blank',
      },
      component: () =>
        import(
          /* webpackChunkName: "hello-world" */
          '@/pages/login'),
    },
    {
      path: '/proxy',
      name: Page.Proxy,
      meta: {
        layout: 'default',
      },
      component: () =>
        import(
          /* webpackChunkName: "hello-world" */
          '@/pages/proxy'),
    },
  ],
});
