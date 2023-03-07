import { useAppStore } from '@/stores/app';
import { storeToRefs } from 'pinia';
import {
  onMounted as addMountedHook,
  onUnmounted as addUnmountedHook,
  ref,
  computed,
} from 'vue';
import { useI18n } from 'vue-i18n';

// ----------------------------------------------------------------------------
// Constants
// ----------------------------------------------------------------------------
const defaultMessage = ref('Waiting for ready status...');
const appStore = useAppStore();
const { isReady, readyMessage } = storeToRefs(appStore);

// ----------------------------------------------------------------------------
// Computed
// ----------------------------------------------------------------------------
const message = computed(() => (isReady.value ? readyMessage : defaultMessage));

// ----------------------------------------------------------------------------
// Setup
// ----------------------------------------------------------------------------
export default {
  setup() {
    const { t } = useI18n();
    addMountedHook(onMounted);
    addUnmountedHook(onUnmounted);

    return { t, readyMessage, isReady, message, getTime, onButtonClick };
  },
};

// ----------------------------------------------------------------------------
// Methods
// ----------------------------------------------------------------------------
function getTime() {
  return Date.now();
}

// ----------------------------------------------------------------------------
// Event Handlers
// ----------------------------------------------------------------------------
export function onMounted() {
  console.log('Mounted!');
}

export function onUnmounted() {
  console.log('Unmounted!');
}

export async function onButtonClick() {
  await appStore.initialize();
}
