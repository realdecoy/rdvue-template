import router, { type AppRouterMetadata } from '@/configs/router';
import { component, mounted, setup, unmounted } from '@/modules/core';
import { ref, defineAsyncComponent, shallowRef } from 'vue';
import { useI18n } from 'vue-i18n';

// ----------------------------------------------------------------------------

// ----------------------------------------------------------------------------
// Constants
// ----------------------------------------------------------------------------
const DEFAULT_LAYOUT = 'default';

// ----------------------------------------------------------------------------
// Component
// ----------------------------------------------------------------------------
@component({
  name: 'App',
  components: {},
})
export default class App {
  public layout = shallowRef('default');
  public t = ref();

  constructor() {}

  loadLayout(meta: AppRouterMetadata) {
    // Lookup the layout property defined on the route.
    // Fallback to 'default' to load the Default layout component otherwise.
    const { layout: newLayout = DEFAULT_LAYOUT } = meta ?? {};

    this.layout.value = defineAsyncComponent(
      // Disable warning by vite compiler for dynamic import below.
      // eslint-disable-next-line prefer-template
      () => import(/* @vite-ignore */ '../../layouts/' + newLayout)
    );
  }

  @setup
  onComponentSetup() {
    const { t } = useI18n();
    this.t.value = t;

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

// ----------------------------------------------------------------------------
// Methods
// ----------------------------------------------------------------------------

// ----------------------------------------------------------------------------
// Event Handlers
// ----------------------------------------------------------------------------

// export async function onComponentMounted() {}

// export async function onComponentUnmounted() {}

// ----------------------------------------------------------------------------
// Component Export
// ----------------------------------------------------------------------------
// export default {
//   components: COMPONENTS,
//   setup: onSetup,
// };
