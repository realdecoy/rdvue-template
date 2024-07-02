import { Component,  Setup, Vue, toNative } from 'vue-facing-decorator';
import { cn } from '@/components/lib/utils';


@Component({
  name: 'r-card-content',
})
class CardContent extends Vue {
  @Setup(() => cn)
  public cn!: typeof cn;
}

export default toNative(CardContent);