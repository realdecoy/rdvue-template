// useStepperState.js
import { createInjectionState } from '@vueuse/core';
import { useStepper } from '@vueuse/core'; // Import useStepper
import * as z from 'zod';
import { StepProps } from './interface';
const [useProvideStepper, useInjectStepper] = createInjectionState((emits, steps) => {
    const stepperAPI = useStepper<z.infer<typeof StepProps>>(steps);
    emits('init-api', stepperAPI);
    return stepperAPI

});


function useStepperState() {
    const stepperState = useInjectStepper();

    if (!stepperState)
        throw new Error('useStepperState must be used within a <Stepper />');

    return stepperState;
}


export { useProvideStepper, useStepperState };
