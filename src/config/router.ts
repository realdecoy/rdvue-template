import Vue from 'vue';
import Router from 'vue-router';

/* eslint-disable-next-line @typescript-eslint/tslint/config,
   @typescript-eslint/no-unsafe-assignment,
   @typescript-eslint/no-var-requires,
   import/no-internal-modules
*/
const { default: generatedRoutes } = require('../../.rdvue/routes.js');

Vue.use(Router);

export enum Page {
  Hello = 'hello-world',
  NotFound = 'not-found',
}

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    ...generatedRoutes,
    {
      path: '/',
      name: Page.Hello,
      meta: {
        layout: 'default'
      },
      component: async () =>
        import(
          /* WebpackChunkName: "hello-world" */
          '@/pages/hello-world')
    },
    {
      path: '*',
      name: Page.NotFound,
      meta: {
        layout: 'default'
      },
      component: async () =>
        import(
          /* WebpackChunkName: "not-found" */
          '@/pages/not-found')
    }
  ]
});
