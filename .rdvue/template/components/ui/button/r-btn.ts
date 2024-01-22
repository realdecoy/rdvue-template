// Vue component with block button as a boolean prop
import { Component, Prop, Setup, Vue, toNative } from 'vue-facing-decorator';
import { defineComponent } from 'vue';
import { Primitive, type PrimitiveProps } from 'radix-vue';
import { buttonVariants } from '.';
import { cn } from '@/lib/utils';
import icon from '../icon';
export interface ButtonProps extends PrimitiveProps {
  variant?: NonNullable<Parameters<typeof buttonVariants>[0]>['variant'];
  size?: NonNullable<Parameters<typeof buttonVariants>[0]>['size'];
  block?: boolean;
  asChild?: boolean;
  as?: string;
}

defineComponent({
  name: 'RBtn',
  components: { Primitive },
  props: {
    variant: { type: String, default: 'defaultVariant' },
    size: { type: String, default: 'defaultSize' },
    block: { type: Boolean, default: false },
    asChild: { type: Boolean, default: false },
    as: { type: String, default: 'button' },
  },
});

@Component({
  components: { Primitive, 'r-icon': icon },
  name: 'r-btn',
})
class Button extends Vue implements ButtonProps {
  @Prop({ default: 'default' }) readonly variant!: ButtonProps['variant'];
  @Prop({ default: 'default' }) readonly size!: ButtonProps['size'];
  @Prop({ default: false }) readonly asChild!: boolean;
  @Prop({ default: 'button' }) readonly as!: ButtonProps['as'];
  @Prop({ default: false }) loading!: boolean;
  @Prop({ default: false }) success!: boolean;
  @Prop({ default: false }) error!: boolean;

  @Setup(() => buttonVariants)
  public buttonVariants!: typeof buttonVariants;

  @Setup(() => cn)
  public cn!: typeof cn;

  public get currentVariant() {
    if (this.success) return 'success';
    if (this.error) return 'destructive';
    return this.variant;
  }

  public get currentIcon() {
    if (this.loading) return 'spinner';
    if (this.success) return 'checkCircle';
    if (this.error) return 'xCircle';
    return null; // Default icon or no icon
  }
}

const ButtonNative = toNative(Button);
export { ButtonNative as default, ButtonNative };
