import {
    Component,
    Vue,
    toNative,
    Setup,
    Prop,
    Emit,
} from 'vue-facing-decorator';
import { useProvideStepper } from './useStepperState';
import { cn } from '@/lib/utils';
import { StepProps } from './interface';
import * as z from 'zod';


@Component({
    name: 'r-stepper',
    emits: ['init-api'],
})
class Stepper extends Vue {

    @Prop({ required: true })
    public steps!: z.infer<typeof StepProps>;

    @Setup((props, ctx) => {
        const stepperArgs = useProvideStepper(ctx.emit, props.steps);
        return stepperArgs;
    })
    public stepperArgs!: ReturnType<typeof useProvideStepper>;

    @Setup(() => cn)
    public cn!: typeof cn;

    @Emit('init-api')
    public initApi(api: any) {
        return api;
    }
}


export default toNative(Stepper);