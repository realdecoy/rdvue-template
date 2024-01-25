import { Component, Setup, Vue, toNative } from 'vue-facing-decorator';
import { ErrorMessage } from 'vee-validate';
import { toValue } from 'vue';
import { useFormField } from '../useFormField';

@Component({
  name: 'r-form-message',
  components: {
    ErrorMessage,
  },
})
class FormMessage extends Vue {
  @Setup(() => {
    const { name, formMessageId } = useFormField();
    return {
      name,
      formMessageId,
    };
  })
  public formField!: ReturnType<typeof useFormField>;

  @Setup(() => toValue)
  public toValue!: typeof toValue;
}

export default toNative(FormMessage);