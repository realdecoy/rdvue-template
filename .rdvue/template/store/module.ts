import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

// ----------------------------------------------------------------------------
// State
// ----------------------------------------------------------------------------
const isReady = ref(false);

// ----------------------------------------------------------------------------
// Getters
// ----------------------------------------------------------------------------
const readyMessage = computed(() => (isReady.value ? 'Ready' : 'Not Ready'));

// ----------------------------------------------------------------------------
// Actions
// ----------------------------------------------------------------------------
function initialize() {
  isReady.value = true;
}

// ----------------------------------------------------------------------------
// Configuration
// ----------------------------------------------------------------------------
export interface __STORE_MODULE__Instance
  extends ReturnType<typeof use__STORE_MODULE__> {}
export const use__STORE_MODULE__ = defineStore('__STORE__', () => {
  return {
    // Exports must be added here to be available on the Store.
    readyMessage,
    isReady,
    initialize,
  };
});
