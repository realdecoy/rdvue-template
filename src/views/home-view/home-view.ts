import { component, mounted, setup, unmounted } from '@/modules/component';
import { useAppStore } from '@/stores/app';
import { storeToRefs } from 'pinia';
import { ref, computed } from 'vue';

// ----------------------------------------------------------------------------
// Constants
// ----------------------------------------------------------------------------
const defaultMessage = ref('Waiting for ready status...');
const appStore = useAppStore();

// ----------------------------------------------------------------------------
// Setup
// ----------------------------------------------------------------------------
@component({
  name: 'home-view',
  components: {
    SampleElement: () => import('@/components/sampleChild/sampleElement'),
  },
})
export default class Home {
  // --------------------------------------------------------------------------
  // Fields
  // --------------------------------------------------------------------------
  public isReady = storeToRefs(appStore).isReady;
  public readyMessage = storeToRefs(appStore).readyMessage;

  // --------------------------------------------------------------------------
  // Computed
  // --------------------------------------------------------------------------
  public message = computed(() =>
    this.isReady.value ? this.readyMessage : defaultMessage
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
