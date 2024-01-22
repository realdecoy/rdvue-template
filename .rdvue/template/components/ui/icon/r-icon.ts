import { Prop, Component, toNative, Vue } from 'vue-facing-decorator';
import {
  Facebook,
  Instagram,
  Youtube,
  Twitter,
  Eye,
  EyeOff,
  Loader2,
  CheckCircle,
  XCircle,
  AlertTriangle,
  ArrowBigUpDash,
  CheckCircle2,
  Circle,
  ChevronLeft,
  ChevronRight,
  Calendar,
  Check

} from 'lucide-vue-next';

const icons = {
  facebook: Facebook,
  instagram: Instagram,
  youtube: Youtube,
  twitter: Twitter,
  eye: Eye,
  eyeOff: EyeOff,
  spinner: Loader2,
  checkCircle: CheckCircle,
  xCircle: XCircle,
  alertTriangle: AlertTriangle,
  arrowBigUpDash: ArrowBigUpDash,
  checkCircle2: CheckCircle2,
  circle: Circle,
  chevronLeft: ChevronLeft,
  chevronRight: ChevronRight,
  calendar: Calendar,
  check: Check
};

enum IconNames {
  Facebook = 'facebook',
  Instagram = 'instagram',
  Youtube = 'youtube',
  Twitter = 'twitter',
  Eye = 'eye',
  EyeOff = 'eyeOff',
  Spinner = 'spinner',
  CheckCircle = 'checkCircle',
  XCircle = 'xCircle',
  AlertTriangle = 'alertTriangle',
  ArrowBigUpDash = 'arrowBigUpDash',
  CheckCircle2 = 'checkCircle2',
  Circle = 'circle',
  ChevronLeft = 'chevronLeft',
  ChevronRight = 'chevronRight',
  Calendar = 'calendar',
  Check = 'check'
}

export interface IconProps {
  name: string;
  strokeWidth?: number;
  defaultClass?: string;
}

@Component({
  name: 'icon',
  components: {
    Facebook,
    Instagram,
    Youtube,
    Twitter,
    Eye,
    EyeOff,
    Loader2,
    CheckCircle,
    XCircle,
    AlertTriangle,
    ArrowBigUpDash,
    CheckCircle2,
    Circle,
    ChevronLeft,
    ChevronRight,
    Calendar,
    Check
  },
})
class Icon extends Vue implements IconProps {
  @Prop({ default: 1 }) readonly strokeWidth!: number;
  @Prop({ default: '' }) readonly defaultClass!: string;
  @Prop({ required: true }) readonly name!: IconNames;

  public get icon() {
    return icons[this.name] as any;
  }
}

const IconNative = toNative(Icon);
export { IconNative as default, IconNative };
