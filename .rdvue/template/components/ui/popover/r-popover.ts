import { Component, Emit, Vue, toNative, Setup } from "vue-facing-decorator";
import { useForwardPropsEmits, PopoverRoot } from "radix-vue";

@Component({
    name: "r-popover",
    components: {PopoverRoot},
    emits: ["update:open"],
})
class Popover extends Vue {

    @Setup((props, ctx) => {
        const forwarded = useForwardPropsEmits(props, ctx.emit);
        return forwarded;
    })
    public forwarded!: { [key: string]: any };

    @Emit("update:open")
    public updateOpen(value: boolean) {
        return value;
    }

}

export default toNative(Popover)