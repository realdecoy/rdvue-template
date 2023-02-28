import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createFontAwesome, createI18n} from '@/modules/core';
import App from './components/@app'
import router from './configs/router'
import '@/assets/theme/@main.scss'

const app = createApp(App)

app.use(router)
app.use(createPinia())
app.use(createI18n({}));
  // legacy: false,
  // allowComposition: true,
  // locale: 'en',
  // // tslint:disable-next-line: no-unsafe-any
  // fallbackLocale: 'en',
  // messages: {
  //   en: {
  //     "message": "Welcome to RDVue!"
  //   }
  // }
// }));
app.use(createFontAwesome())
app.mount('#app')
