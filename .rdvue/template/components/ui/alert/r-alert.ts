import { Component, Prop, Vue, Setup, toNative } from 'vue-facing-decorator';
import { alertVariants } from '.';
import { cn } from '@/lib/utils';

interface AlertProps {
  variant?: NonNullable<Parameters<typeof alertVariants>[0]>['variant'];
}

@Component({
  name: 'r-alert',
})
class Alert extends Vue implements AlertProps {
  @Prop({ default: 'default' }) readonly variant!: AlertProps['variant'];

  @Setup(() => alertVariants)
  public alertVariants!: typeof alertVariants;

  @Setup(() => cn)
  public cn!: typeof cn;

  public get currentVariant() {
    return this.variant;
  }
}

export default toNative(Alert);
