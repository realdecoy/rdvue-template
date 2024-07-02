import { Component, Vue, toNative, Setup } from "vue-facing-decorator";
import { cn } from "@/components/lib/utils";
import { AccordionRoot, useEmitAsProps } from "radix-vue";

@Component({
    name: "r-accordion",
    components: {
        AccordionRoot
    }
})
class Accordion extends Vue {
    @Setup((_props, ctx) => {
        const { emit } = ctx;
        const emitAsProps = useEmitAsProps(emit);
        return emitAsProps;
    }
    )
    public emitAsProps!: ReturnType<typeof useEmitAsProps>;

    public cn = cn;
}

export default toNative(Accordion);