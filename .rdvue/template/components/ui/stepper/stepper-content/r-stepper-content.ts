import { Component, toNative, Vue, Setup } from 'vue-facing-decorator';
import { useStepperState } from '../useStepperState';
import { cn } from '@/components/lib/utils';

@Component({
    name: 'r-stepper-content',
})
class StepperContent extends Vue {
    @Setup(() => cn)
    public cn!: typeof cn;

    @Setup(() => {
        const { current } = useStepperState();
        return current;
    })
    public activeStep!: ReturnType<typeof useStepperState>['current'];

    @Setup(() => {
        const { steps } = useStepperState();
        return steps;
    })
    public steps!: ReturnType<typeof useStepperState>['steps'];
}

export default toNative(StepperContent);