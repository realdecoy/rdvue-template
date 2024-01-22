import { Component,  Setup, Vue, toNative } from 'vue-facing-decorator';
import { cn } from '@/lib/utils';


@Component({
  name: 'r-card-header',
})
class CardHeader extends Vue {
  @Setup(() => cn)
  public cn!: typeof cn;
}

export default toNative(CardHeader);