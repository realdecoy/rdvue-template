import { Component, toNative, Setup, Vue } from 'vue-facing-decorator';
import { useFormField } from '../useFormField';
import { cn } from '@/lib/utils';
import { useAttrs } from 'vue';

@Component({
  name: 'r-form-control',
  options: {
    inheritAttrs: false,
  },
})
class FormDescription extends Vue {
  @Setup(() => {
    const { formDescriptionId } = useFormField();

    return formDescriptionId;
  })
  public formDescriptionId!: string;

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

export default toNative(FormDescription);
