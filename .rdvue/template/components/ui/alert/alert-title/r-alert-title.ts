import { Component, Vue, toNative, Setup } from 'vue-facing-decorator';
import { cn } from '@/lib/utils';

@Component({
  name: 'r-alert-title',
})
class AlertTitle extends Vue {
    @Setup(() => cn)
    public cn!: typeof cn;
}

export default toNative(AlertTitle);