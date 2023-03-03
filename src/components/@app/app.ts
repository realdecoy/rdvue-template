import { useAppStore } from '@/stores/app';
import { storeToRefs } from 'pinia';

export default {
  setup() {
    const appStore = useAppStore();
    const { isReady } = storeToRefs(appStore);
    return { isReady };
  },
};
