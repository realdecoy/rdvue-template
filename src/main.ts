// eslint-disable-next-line spaced-comment
/// <reference types="vite/client" />

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createFontAwesome } from '@/modules/core';
import { createMetaManager } from 'vue-meta';
import App from './components/@app';
import router from './config/router';
import '@/modules/rdvue/components/styles';
import 'tailwindcss/tailwind.css';
import '@/theme/_all.scss';
import * as Sentry from "@sentry/vue";
import { SENTRY_DSN } from '@/config/env';

export const app = createApp(App);

Sentry.init({
  app,
  dsn: SENTRY_DSN,
});

app.use(router);
app.use(createPinia());
app.use(createFontAwesome());
app.use(createMetaManager());

app.mount('#app');
