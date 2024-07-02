import { Component, toNative, Vue } from "vue-facing-decorator";
import { AccordionContent as RadixAccordionContent } from "radix-vue";
import { cn } from "@/components/lib/utils";

@Component({
    name: "r-accordion-content",
    components: {
        RadixAccordionContent,
    }
})
class AccordionContent extends Vue {
    public cn = cn;
}

export default toNative(AccordionContent);