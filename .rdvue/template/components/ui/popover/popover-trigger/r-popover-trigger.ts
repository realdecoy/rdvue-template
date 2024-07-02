import {Component, Vue, toNative} from 'vue-facing-decorator'
import { PopoverTrigger as RadixPopoverTrigger } from 'radix-vue'

@Component({
    name: 'r-popover-trigger',
    components: { RadixPopoverTrigger }
})
class PopoverTrigger extends Vue {

}

export default toNative(PopoverTrigger)