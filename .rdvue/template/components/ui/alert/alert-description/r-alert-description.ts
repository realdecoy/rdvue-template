import { Component, Vue, toNative, Setup } from 'vue-facing-decorator';
import { cn } from '@/components/lib/utils';

@Component({
  name: 'r-alert-description',
})
class AlertDescription extends Vue {
    @Setup(() => cn)
    public cn!: typeof cn;
}

export default toNative(AlertDescription);