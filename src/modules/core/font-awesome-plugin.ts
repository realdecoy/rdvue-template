import type { App } from "vue";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import '@/configs/font-awesome';

export const createFontAwesome = () => ({
  install(app: App, ...options: []) {
    app.component('font-awesome', FontAwesomeIcon);
  }
});
