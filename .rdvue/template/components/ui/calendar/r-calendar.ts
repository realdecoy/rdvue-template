import {
    Component, Prop, Vue, toNative, Setup, Emit, Model, Ref, Watch
} from 'vue-facing-decorator'
import { DatePicker } from 'v-calendar'
import icon from '../icon'
import { buttonVariants } from '../button'
import { cn } from '@/components/lib/utils'
import { z } from 'zod'

const simpleDatePartsSchema = z.object({
    year: z.number().int(),
    month: z.number().int(),
    day: z.number().int(),
    hours: z.number().int().optional(),
    minutes: z.number().int().optional(),
    seconds: z.number().int().optional(),
    milliseconds: z.number().int().optional(),
})

type DatePickerModel = DatePickerDate | DatePickerRangeObject
type DateSource = Date | string | number
type DatePickerDate = DateSource | Partial<z.infer<typeof simpleDatePartsSchema>> | null
interface DatePickerRangeObject {
    start: Exclude<DatePickerDate, null>
    end: Exclude<DatePickerDate, null>
}


@Component({
    name: 'r-date-picker',
    emits: ['update:model-value'],
    inheritAttrs: false,
    components: {
        DatePicker,
        icon,

    }
})
class Calendar extends Vue {
    @Setup(() => cn)
    public cn!: typeof cn

    @Setup(() => buttonVariants)
    public buttonVariants!: typeof buttonVariants

    @Prop({ required: false })
    modelModifiers!: object

    @Prop({ required: false, default: 1 })
    columns!: number

    @Prop({ required: false, default: 'date' })
    mode!: 'date' | 'dateTime' | 'time'

    @Model
    value!: string | number | Date | DatePickerModel


    @Ref('datePicker')
    public datePicker: InstanceType<typeof DatePicker> | null = null




    public handleNav(direction: 'next' | 'prev') {
        if (!this.datePicker) return

        if (direction === 'prev') {
            this.datePicker.calendarRef?.movePrev()
        }
        if (direction === 'next') {
            this.datePicker.calendarRef?.moveNext()
        }
    }

    public mounted() {
        this.$nextTick(
            () => {
                if (this.value instanceof Date && this.datePicker?.calendarRef) {
                    this.datePicker.calendarRef?.focusDate(this.value)
                }
            }
        )

    }

}


export default toNative(Calendar)