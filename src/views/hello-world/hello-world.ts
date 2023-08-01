import { Component, Setup, Vue } from 'vue-facing-decorator';
import { useAppStore, type AppStoreInstance } from '@/stores/app';
import { useI18n } from 'vue-i18n';

// ----------------------------------------------------------------------------
// Setup
// ----------------------------------------------------------------------------
@Component({
  components: {},
})
export default class HelloWorld extends Vue {
  // --------------------------------------------------------------------------
  // Fields
  // --------------------------------------------------------------------------
  @Setup(() => useAppStore())
  private AppStore!: AppStoreInstance;

  @Setup(() => useI18n())
  public i18n!: ReturnType<typeof useI18n>;

  // --------------------------------------------------------------------------
  // Computed
  // --------------------------------------------------------------------------

  // --------------------------------------------------------------------------
  // Methods
  // --------------------------------------------------------------------------

  async onButtonClick() {
    await this.AppStore.initialize();
  }
}
