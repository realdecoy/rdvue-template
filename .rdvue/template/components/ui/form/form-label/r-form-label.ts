import { Component, toNative, Setup, Vue } from 'vue-facing-decorator';
import { Label, type LabelProps } from 'radix-vue';
import { useFormField } from '../useFormField';
import { cn } from '@/components/lib/utils';
import { useAttrs } from 'vue';

@Component({
  name: 'r-form-label',
  components: {
    Label,
  },
  options: {
    inheritAttrs: false,
  },
})
class FormLabel extends Vue {
  @Setup(() => {
    const { error, formItemId } = useFormField();
    return {
      error,
      formItemId,
    };
  })
  public formField!: ReturnType<typeof useFormField>;

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

export default toNative(FormLabel);