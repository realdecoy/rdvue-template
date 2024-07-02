import { Component, Emit, Prop, Setup, Vue, toNative } from 'vue-facing-decorator'
import { ToggleGroupRoot as RadixToggleGroupRoot, useForwardPropsEmits } from 'radix-vue'
import type { ToggleGroupRootEmits } from 'radix-vue'
import { useAttrs } from 'vue'
import { cn } from '@/components/lib/utils'

@Component({
    name: 'r-toggle-group-root',
    emits: ['update:model-value'],
    inheritAttrs: false,
    components: {
        RadixToggleGroupRoot
    },
})
class ToggleGroupRoot extends Vue {
    @Prop({ default: false }) disabled!: boolean
    @Prop() modelValue!: string | string[]
    
    @Setup(() => cn)
    public cn = cn

    @Setup((props, ctx) => {
        const forwardPropsEmits = useForwardPropsEmits(props, ctx.emit)
        return forwardPropsEmits
    })
    public forwarded!: ReturnType<typeof useForwardPropsEmits>

    @Setup(() => {
        const { class: className, ...rest } = useAttrs()
        return rest
    })
    public rest!: ReturnType<typeof useAttrs>

    @Setup(() => {
        const { class: className} = useAttrs()
        return className
    })
    public className!: ReturnType<typeof useAttrs>


    @Emit('update:modelValue')
    public updateModelValue(value: string | string[]) {
        return value
    }

}

export default toNative(ToggleGroupRoot)