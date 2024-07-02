import { z } from 'zod';

const Step = z.object({
    title: z.string(),
    name: z.string(),
});

const StepProps = z.record(Step).refine(obj => {
    return Object.entries(obj).every(([key, value]) => key === value.name);
}, {
    message: "Key must match the name property",
});


export { Step, StepProps };