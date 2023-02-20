import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

// ----------------------------------------------------------------------------
// State
// ----------------------------------------------------------------------------
const isReady = ref(false);

// ----------------------------------------------------------------------------
// Getters
// ----------------------------------------------------------------------------
const readyMessage = computed(() => isReady.value ? 'Ready' : 'Not Ready');

// ----------------------------------------------------------------------------
// Actions
// ----------------------------------------------------------------------------
async function initialize() {
  isReady.value = true;
}

// ----------------------------------------------------------------------------
// Configuration
// ----------------------------------------------------------------------------
export const useAppStore = defineStore('app', () => {
  return { // Exports must be added here to be available on the Store.
    readyMessage, 
    isReady, 
    initialize 
  }
});
