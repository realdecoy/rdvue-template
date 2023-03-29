import { component, mounted, setup, unmounted } from '@/modules/core';
import { useAppStore } from '@/stores/app';
import { storeToRefs } from 'pinia';
import { ref, computed } from 'vue';

// ----------------------------------------------------------------------------
// Constants
// ----------------------------------------------------------------------------
const defaultMessage = ref('Waiting for ready status...');
const appStore = useAppStore();
const { isReady, readyMessage } = storeToRefs(appStore);

// ----------------------------------------------------------------------------
// Setup
// ----------------------------------------------------------------------------
@component({
  name: 'home-view',
  components: {},
})
export default class Home {
  // --------------------------------------------------------------------------
  // Fields
  // --------------------------------------------------------------------------
  public isReady = storeToRefs(useAppStore()).isReady;

  // --------------------------------------------------------------------------
  // Computed
  // --------------------------------------------------------------------------
  public message = computed(() =>
    isReady.value ? readyMessage : defaultMessage
  );

  // --------------------------------------------------------------------------
  // Constructor
  // --------------------------------------------------------------------------
  constructor() {}

  // --------------------------------------------------------------------------
  // Methods
  // --------------------------------------------------------------------------

  // --------------------------------------------------------------------------
  // Event Handlers
  // --------------------------------------------------------------------------
  @setup
  onComponentSetup() {}

  @mounted
  onComponentMounted() {}

  @unmounted
  onComponentUnMounted() {}

  async onButtonClick() {
    await appStore.initialize();
  }
}
