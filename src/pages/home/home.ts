import {useAppStore} from '@/stores/app';
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';

export default {
  setup () {
    const appStore = useAppStore();
    const {isReady, readyMessage} = storeToRefs(appStore);
    const {initialize} = appStore;

    return {isReady, readyMessage, initialize}
  }
}
