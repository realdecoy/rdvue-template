import { Component, Setup, Vue } from 'vue-facing-decorator';
import { useAppStore, type AppStoreInstance } from '@/stores/app';
import { useI18n } from 'vue-i18n';

// ----------------------------------------------------------------------------
// Setup
// ----------------------------------------------------------------------------
@Component({})
export default class Home extends Vue {
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

  public get ready() {
    return this.AppStore.isReady;
  }

  public get readyMessage() {
    return this.AppStore.readyMessage;
  }

  public get message() {
    return this.ready ? this.readyMessage : 'Waiting for ready status...';
  }

  // --------------------------------------------------------------------------
  // Methods
  // --------------------------------------------------------------------------

  async onButtonClick() {
    await this.AppStore.initialize();
  }
}
