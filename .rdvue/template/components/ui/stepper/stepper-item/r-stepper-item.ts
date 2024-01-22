import { Component, toNative, Vue, Setup, Prop } from 'vue-facing-decorator';
import { useStepperState } from '../useStepperState';
import { cn } from '@/lib/utils';
import { Step } from '../interface';

@Component({
    name: 'r-stepper-item',
})
class StepperItem extends Vue {
    @Prop({ type: String, default: '' })
    public name!: string;

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

    public get step(){
        return this.stepperApi.steps.value[this.name];
    }
}

export default toNative(StepperItem);