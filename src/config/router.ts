/* eslint-disable no-unused-vars */
import { createRouter, createWebHistory } from 'vue-router';

// tslint:disable-next-line
const { default: generatedRoutes } = require('../../.rdvue/routes.js');

export enum Page {
  Hello = 'hello-world',
  NotFound = 'not-found',
}

const routes = [
  ...generatedRoutes,
  {
    path: '/',
    name: Page.Hello,
    meta: {
      layout: 'default',
    },
    component: () =>
      import(
        /* webpackChunkName: "hello-world" */
        '@/pages/hello-world'
      ),
  },
  {
    path: '/:pathMatch(.*)*',
    name: Page.NotFound,
    meta: {
      layout: 'default',
    },
    component: () =>
      import(
        /* webpackChunkName: "not-found" */
        '@/pages/not-found'
      ),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
