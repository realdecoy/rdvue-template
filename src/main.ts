// eslint-disable-next-line spaced-comment
/// <reference types="vite/client" />

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createFontAwesome, createI18n } from '@/modules/core';
import App from './components/@app';
import router from './configs/router';
import '@/assets/theme/@main.scss';
import '@/modules/rdvue/components/styles';
// eslint-disable-next-line Incase bamboo file is empty and not recognized as a module
import * as RdvueModules from '@/modules/rdvue';
// eslint-disable-next-line Incase bamboo file is empty and not recognized as a module
import * as RdvueComponents from '@/modules/rdvue/components';

export const app = createApp(App);

// Register Rdvue Modules and Components
for (const [key, component] of Object.entries(RdvueComponents)) {
    if(component) {
        app.component(key, component as any);
    }
}

for (const [key, module] of Object.entries(RdvueModules)) {
    if((module as any).hasCallableModule) {
        const functionName = Object.keys(module)[1];
        app.use((module as any)[functionName]());
    } else {
        app.use(module as any);
    }
}


app.use(router);
app.use(createPinia());
app.use(createI18n());
app.use(createFontAwesome());
app.mount('#app');
