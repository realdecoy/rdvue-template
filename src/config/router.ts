import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from 'vue-router';

import Home from '@/views/home-view/home-view.vue';
export type AppRouterMetadata = {
  layout?: string;
};

type AppRouteRecordRaw = RouteRecordRaw & {
  meta: AppRouterMetadata;
};

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: <[AppRouteRecordRaw]>[
    {
      path: '/',
      name: 'home',
      meta: {
        layout: 'default-layout',
      },
      component: Home,
    },
  ],
});

export default router;
