import { Component,  Setup, Vue, toNative } from 'vue-facing-decorator';
import { cn } from '@/components/lib/utils';


@Component({
  name: 'r-card-footer',
})
class CardFooter extends Vue {
  @Setup(() => cn)
  public cn!: typeof cn;
}

export default toNative(CardFooter);