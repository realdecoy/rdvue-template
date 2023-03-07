import router, { type AppRouterMetadata } from '@/configs/router';
import {
  onMounted,
  onUnmounted,
  ref,
  defineAsyncComponent,
  computed,
} from 'vue';

import { useI18n } from 'vue-i18n';

// ----------------------------------------------------------------------------
// Vars
// ----------------------------------------------------------------------------
const COMPONENTS = {};
const DEFAULT_LAYOUT = 'default';
const activeLayoutName = ref('div');

// ----------------------------------------------------------------------------
// Methods
// ----------------------------------------------------------------------------
async function loadLayout(meta: AppRouterMetadata) {
  const { app } = await import('@/main');

  // Lookup the layout property defined on the route.
  // Fallback to 'default' to load the Default layout component otherwise.
  const { layout: newLayout = DEFAULT_LAYOUT } = meta ?? {};

  // Register layout component globally.
  app.component(
    newLayout,
    defineAsyncComponent(
      // Disable warning by vite compiler for dynamic import below.
      // eslint-disable-next-line prefer-template
      () => import(/* @vite-ignore */ '../../layouts/' + newLayout)
    )
  );

  activeLayoutName.value = newLayout;
}

// ----------------------------------------------------------------------------
// Event Handlers
// ----------------------------------------------------------------------------
function onSetup(props: Props, context) {
  const { t } = useI18n();
  onMounted(onComponentMounted);
  onUnmounted(onComponentMounted);

  // import('@/configs/router').then(({ default: router }) => {
  router.beforeResolve(async (to, from, next) => {
    const meta = to.meta as AppRouterMetadata | undefined;

    if (meta !== undefined) {
      await loadLayout(meta);
    }

    next();
  });

  return { t, activeLayoutName };
}

export async function onComponentMounted() {}

export async function onComponentUnmounted() {}

// ----------------------------------------------------------------------------
// Component Export
// ----------------------------------------------------------------------------
export default {
  components: COMPONENTS,
  setup: onSetup,
};
