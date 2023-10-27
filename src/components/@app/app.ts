import { Component, Vue, Setup } from 'vue-facing-decorator';
import { type RouteLocationNormalized, useRouter } from 'vue-router';
import { defineAsyncComponent, shallowRef } from 'vue';
import DefaultLayout from '@/layouts/default-layout/default-layout.vue';
import { useMeta } from 'vue-meta';

const DEFAULT_LAYOUT = 'default-layout';

@Component({
  name: 'App',
  components: { DefaultLayout },
  setup() {
    return useMeta({
      title: '',
      htmlAttrs: { lang: 'en', amp: true },
    });
  },
})
export default class AppView extends Vue {
  // --------------------------------------------------------------------------
  // [Public] Fields
  // --------------------------------------------------------------------------

  public layout = shallowRef(DefaultLayout);

  // --------------------------------------------------------------------------
  // [Private] Fields
  // --------------------------------------------------------------------------

  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  @Setup((_props, _ctx) => useRouter())
  private router!: ReturnType<typeof useRouter>;

  // --------------------------------------------------------------------------
  // [Public] Accessors
  // --------------------------------------------------------------------------
  public loadLayout(route: RouteLocationNormalized) {
    const meta = route.meta as { layout?: string } | undefined;
    const { layout: newLayout = DEFAULT_LAYOUT } = meta ?? {};
    const layoutFolder = newLayout;

    return defineAsyncComponent(
      // Disable warning by vite compiler for dynamic import below.
      // eslint-disable-next-line prefer-template
      () => import(/* @vite-ignore */ '@/layouts/' + layoutFolder + newLayout + '.vue')
    );
  }

  // --------------------------------------------------------------------------
  // [Public] Methods
  // --------------------------------------------------------------------------

  public navigateTo(path: string) {
    this.router.push({ path });
  }

  // --------------------------------------------------------------------------
  // [Private] Event Handlers
  // --------------------------------------------------------------------------

  // Feel free to add any event handlers you might need here.

  // --------------------------------------------------------------------------
  // [Private] Methods
  // --------------------------------------------------------------------------

  private updateLayout(route: RouteLocationNormalized) {
    this.layout.value = this.loadLayout(route);
  }

  // --------------------------------------------------------------------------
  // [Private] Lifecycle Hooks
  // --------------------------------------------------------------------------

  private mounted() {
    this.updateLayout(this.router.currentRoute.value);

    this.router.beforeResolve(async (to, _from, next) => {
      await this.updateLayout(to);
      next();
    });
  }
}
