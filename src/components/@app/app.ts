import { Component, Vue, Setup, Model } from 'vue-facing-decorator';
import { useRouter, type Router } from 'vue-router';
import DefaultLayout from '@/layouts/default-layout';
import type { AppRouterMetadata } from '@/configs/router';
import { defineAsyncComponent, shallowRef } from 'vue';

// ----------------------------------------------------------------------------

// ----------------------------------------------------------------------------
// Constants
// ----------------------------------------------------------------------------

const DEFAULT_LAYOUT = 'default-layout';

@Component({
  components: { DefaultLayout },
})
export default class App extends Vue {
  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  @Setup((_props, _ctx) => useRouter())
  router!: Router;

  public layout = shallowRef(DefaultLayout);

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

  mounted() {
    this.router.beforeResolve((to, from, next) => {
      const meta = to.meta as AppRouterMetadata | undefined;

      if (meta !== undefined) {
        this.loadLayout(meta);
      }

      next();
    });
  }
}
