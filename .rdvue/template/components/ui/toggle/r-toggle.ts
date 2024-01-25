import { Component, Emit, Prop, Setup, Vue, toNative } from 'vue-facing-decorator'
import { cn } from '@/components/lib/utils'
import { toggleVariants } from '.'
import type { VariantProps } from 'class-variance-authority'
import type { ToggleProps } from 'radix-vue'
import { Toggle as RadixToggle, useForwardPropsEmits } from 'radix-vue'
import { useAttrs } from 'vue'


interface ToggleVariantProps extends VariantProps<typeof toggleVariants> { }

interface Props extends ToggleProps {
    variant?: ToggleVariantProps['variant']
    size?: ToggleVariantProps['size']
    disabled?: boolean
}

@Component({
    name: 'r-toggle',
    emits: ['update:pressed'],
    inheritAttrs: false,
    components: {
        RadixToggle
    },
})
class Toggle extends Vue implements Props {
    @Prop({ default: 'default' }) variant!: ToggleVariantProps['variant']
    @Prop({ default: 'default' }) size!: ToggleVariantProps['size']
    @Prop({ default: false }) disabled!: boolean

    @Setup(() => cn)
    public cn = cn

    @Setup((props, ctx) => {
        const forwardPropsEmits = useForwardPropsEmits(props.value, ctx.emit)
        return forwardPropsEmits
    })
    public forwarded!: ReturnType<typeof useForwardPropsEmits>

    @Setup(() => toggleVariants)
    public toggleVariants!: typeof toggleVariants

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



    @Emit('update:pressed')
    public updatePressed(value: boolean) {
        return value
    }


}

export default toNative(Toggle)