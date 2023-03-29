import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from 'vue-router';

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
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/home-view'),
    },
  ],
});

export default router;
