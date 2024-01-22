import { Component, Prop, Setup, Vue, toNative } from 'vue-facing-decorator';
import { cn } from '@/lib/utils';

@Component({
  name: 'r-card',
})
class Card extends Vue {
  @Setup(() => cn)
  public cn!: typeof cn;
}

export default toNative(Card);
