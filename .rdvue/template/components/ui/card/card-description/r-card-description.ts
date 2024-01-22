import { Component,  Setup, Vue, toNative } from 'vue-facing-decorator';
import { cn } from '@/lib/utils';


@Component({
  name: 'r-card-description',
})
class CardDescription extends Vue {
  @Setup(() => cn)
  public cn!: typeof cn;
}

export default toNative(CardDescription);