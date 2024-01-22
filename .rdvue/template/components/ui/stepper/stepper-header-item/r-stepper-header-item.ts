import { Component, toNative, Vue, Setup, Prop } from 'vue-facing-decorator';
import { useStepperState } from '../useStepperState';
import { cn } from '@/lib/utils';

@Component({
    name: 'r-stepper-item',
})
class StepperHeaderItem extends Vue {
    @Prop() public name!: string;
    @Prop() public title!: string;

    @Setup(() => cn)
    public cn!: typeof cn;


    @Setup(() => {
        const stepperAPI = useStepperState();
        return stepperAPI;
    })
    public stepperApi!: ReturnType<typeof useStepperState>;


    public get isCurrent() {
        return this.stepperApi.isCurrent(this.name);
    }

    public get isComplete() {
        const isComplete = this.stepperApi.stepNames.value.indexOf(this.name) < this.stepperApi.index.value;
        return isComplete;
    }

    public get step() {
        return this.stepperApi.steps.value[this.name];
    }

}

export default toNative(StepperHeaderItem);