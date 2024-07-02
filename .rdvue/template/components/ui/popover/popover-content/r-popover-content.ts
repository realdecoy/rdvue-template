import { Component, Emit, Vue, toNative, Setup, Prop } from "vue-facing-decorator";
import {
    PopoverContent as RadixPopoverContent,
    type PopoverContentEmits,
    PopoverPortal,
    useForwardPropsEmits,
} from "radix-vue";
import { cn } from "@/components/lib/utils";



@Component({
    name: "r-popover-content",
    components: { RadixPopoverContent, PopoverPortal },
    emits: ['closeAutoFocus', 'openAutoFocus', 'escapeKeyDown', 'pointerDownOutside', 'focusOutside', 'interactOutside', 'dismiss'],
})
class PopoverContent extends Vue {
    @Setup((props, ctx) => {
        const forwarded = useForwardPropsEmits(props, ctx.emit);
        return forwarded;
    })
    public forwarded!: PopoverContentEmits;

    @Setup(() => cn)
    public cn = cn;

    @Prop({ type: Number, default: 4 })
    public sideOffset!: number;





}

export default toNative(PopoverContent);