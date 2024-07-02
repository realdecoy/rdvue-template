import { Component, toNative, Vue } from "vue-facing-decorator";
import { AccordionItem as RadixAccordionItem } from "radix-vue";
import { cn } from "@/components/lib/utils";

@Component({
    name: "r-accordion-item",
    components: {
        RadixAccordionItem,
    }
})
class AccordionItem extends Vue {
    public cn = cn;
}

export default toNative(AccordionItem);