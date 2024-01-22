import { Component, Prop, Setup, Vue, toNative } from 'vue-facing-decorator'
import { ToggleGroupItem as RadixToggleGroupItem, useForwardPropsEmits } from 'radix-vue'
import { useAttrs, ref } from 'vue'
import { cn } from '@/lib/utils'

@Component({
    name: 'r-toggle-group-item',
    inheritAttrs: false,
    components: {
        RadixToggleGroupItem
    },
})
class ToggleGroupItem extends Vue {
    @Prop({ required: true }) value!: string
    @Prop({ default: false }) disabled!: boolean


    @Setup(() => cn)
    public cn = cn

    @Setup((props, ctx) => {
        const forwardPropsEmits = useForwardPropsEmits(props, ctx.emit)
        return forwardPropsEmits
    })
    @Setup(() => {
        const { class: className, ...rest } = useAttrs()
        return rest
    })
    public rest!: ReturnType<typeof useAttrs>

    @Setup(() => {
        const { class: className } = useAttrs()
        return className
    })
    public className!: ReturnType<typeof useAttrs>

    // Additional methods and data can be added here
}

export default toNative(ToggleGroupItem)