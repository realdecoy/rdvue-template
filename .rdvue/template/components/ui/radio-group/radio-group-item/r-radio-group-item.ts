import { Component, Vue, toNative } from "vue-facing-decorator";
import {RadioGroupIndicator, RadioGroupItem as RadixGroupItem} from 'radix-vue'
import { cn } from "@/lib/utils";
import icon from "../../icon";

@Component({
    name: "r-radio-group-indicator",
    components: {
        RadioGroupIndicator,
        RadixGroupItem,
        icon,
    },
})
class RadioGroupItem extends Vue {
    public cn = cn;
}

export default toNative(RadioGroupItem);