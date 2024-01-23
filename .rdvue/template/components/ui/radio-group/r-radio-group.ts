import { Component, Vue, Setup, toNative } from "vue-facing-decorator";
import { cn } from "@/components/lib/utils";
import { RadioGroupRoot, useForwardPropsEmits } from "radix-vue";


@Component({
    name: 'r-radio-group',
    emits: ['update:modelValue', 'change'],
    components: {
        RadioGroupRoot
    },
})
class RadioGroup extends Vue {
    @Setup((props, ctx) => {
        const forwarded = useForwardPropsEmits(props, ctx.emit);
        return forwarded;
    })
    public forwarded!: { [key: string]: any };
    public cn = cn;
}

export default toNative(RadioGroup)