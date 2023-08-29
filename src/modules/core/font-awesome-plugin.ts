import type { App } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import '@/config/font-awesome';

export const createFontAwesome = () => ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
  install(app: App, ...options: []) {
    app.component('font-awesome', FontAwesomeIcon);
  },
});
