import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export enum Page {
  Hello = 'hello-world',
  Proxy = 'proxy',
}

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: Page.Hello,
      meta: {
        layout: 'default',
      },
      component: () =>
        import(
          /* webpackChunkName: "hello-world" */
          '@/pages/hello-world'),
    },
  ],
});
