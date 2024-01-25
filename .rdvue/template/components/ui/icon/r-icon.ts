import { Prop, Component, toNative, Vue } from 'vue-facing-decorator';
import { Icon as IconifyIcon, } from '@iconify/vue'
import { cn } from '@/components/lib/utils';
export interface IconProps {
  name: string;
  strokeWidth?: number;
  defaultClass?: string;
}

@Component({
  name: 'icon',
  components: {
    IconifyIcon
  },
})
class Icon extends Vue implements IconProps {
  @Prop({ required: true }) readonly name!: string;

  public get icon() {
    return `ph:${this.name}-fill`;
  }

  public cn = cn;
}

const IconNative = toNative(Icon);
export { IconNative as default, IconNative };
