import router, { type AppRouterMetadata } from '@/configs/router';
import { component, mounted, setup, unmounted } from '@/modules/component';
import { defineAsyncComponent, shallowRef } from 'vue';

// ----------------------------------------------------------------------------

// ----------------------------------------------------------------------------
// Constants
// ----------------------------------------------------------------------------
const DEFAULT_LAYOUT = 'default-layout';

// ----------------------------------------------------------------------------
// Component
// ----------------------------------------------------------------------------
@component({
  name: 'App',
  components: {},
})
export default class App {
  // --------------------------------------------------------------------------
  // Fields
  // --------------------------------------------------------------------------
  public layout = shallowRef(DEFAULT_LAYOUT);

  // --------------------------------------------------------------------------
  // Computed
  // --------------------------------------------------------------------------

  // --------------------------------------------------------------------------
  // Constructor
  // --------------------------------------------------------------------------
  constructor() {}

  // --------------------------------------------------------------------------
  // Methods
  // --------------------------------------------------------------------------
  private loadLayout(meta: AppRouterMetadata) {
    // Lookup the layout property defined on the route.
    // Fallback to 'default' to load the Default layout component otherwise.
    const { layout: newLayout = DEFAULT_LAYOUT } = meta ?? {};

    this.layout.value = defineAsyncComponent(
      // Disable warning by vite compiler for dynamic import below.
      // eslint-disable-next-line prefer-template
      () => import(/* @vite-ignore */ '../../layouts/' + newLayout)
    );
  }

  // --------------------------------------------------------------------------
  // Event Handlers
  // --------------------------------------------------------------------------
  @setup
  onComponentSetup() {
    // import('@/configs/router').then(({ default: router }) => {
    router.beforeResolve((to, from, next) => {
      const meta = to.meta as AppRouterMetadata | undefined;

      if (meta !== undefined) {
        this.loadLayout(meta);
      }

      next();
    });
  }

  @mounted
  onComponentMounted() {}

  @unmounted
  onComponentUnMounted() {}
}
