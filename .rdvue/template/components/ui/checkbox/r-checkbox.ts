import { Component, Setup, Vue, toNative } from "vue-facing-decorator";
import { cn } from "@/lib/utils";
import {CheckboxIndicator, CheckboxRoot, useForwardPropsEmits} from 'radix-vue'
import icon from "@/components/ui/icon";

@Component({
    name: "r-checkbox",
    components: {
        icon,
        CheckboxRoot,
        CheckboxIndicator,
    },
    emits: ["update:modelValue"],
})
class Checkbox extends Vue {
    @Setup((props, ctx) => {
        const forwarded = useForwardPropsEmits(props, ctx.emit);
        return forwarded;
    })
    public forwarded!: { [key: string]: any };

    public cn = cn;
}

export default toNative(Checkbox);