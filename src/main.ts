// eslint-disable-next-line spaced-comment
/// <reference types="vite/client" />

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createFontAwesome, createI18n } from '@/modules/core';
import App from './components/@app';
import router from './config/router';
import '@/assets/theme/@main.scss';
import '@/modules/rdvue/components/styles';

export const app = createApp(App);

app.use(router);
app.use(createPinia());
app.use(createI18n());
app.use(createFontAwesome());
app.mount('#app');
