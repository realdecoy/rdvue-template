import {useAppStore} from '@/stores/app';
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';
import { useI18n } from 'vue-i18n';

export default {
  setup () {
    const appStore = useAppStore();
    const {isReady, readyMessage} = storeToRefs(appStore);
    const {initialize} = appStore;
    const { t } = useI18n();

    return {isReady, readyMessage, initialize, t}
  }
}
