import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from 'vue-router';

import HelloWorld from '@/views/hello-world/hello-world.vue';
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
      component: HelloWorld,
    },
  ],
});

export default router;
