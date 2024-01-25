import { Component, toNative, Setup, Vue } from 'vue-facing-decorator';
import { provide, useAttrs } from 'vue'
import { useId } from 'radix-vue'
import { cn } from '@/components/lib/utils'
import { FORM_ITEM_INJECTION_KEY } from '../interface';

@Component({
  name: 'r-form-item',
  options: {
    inheritAttrs: false,
  },
})
class FormItem extends Vue {
    @Setup(() => {
        const formItemId = useId()
        provide(FORM_ITEM_INJECTION_KEY, formItemId)
        return formItemId
    })
    public formItemId!: string;


  @Setup(() => cn)
  public cn!: typeof cn;

  @Setup(() => {
    const { class: className, ...rest } = useAttrs();
    return rest;
  })
  public rest!: Record<string, any>;

  @Setup(() => {
    const { class: className } = useAttrs();

    return className;
  })
  public className!: string;


  
}


export default toNative(FormItem);