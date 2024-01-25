import { Component, toNative, Setup, Vue } from 'vue-facing-decorator';
import { Slot } from 'radix-vue';
import { useFormField } from '../useFormField';

@Component({
  name: 'r-form-control',
  components: {
    Slot,
  },
})
class FormControl extends Vue {
  @Setup(() => {
    const { error, formItemId, formDescriptionId, formMessageId } =
      useFormField();
    return {
      error,
      formItemId,
      formDescriptionId,
      formMessageId,
    };
  })
  public formApi!: ReturnType<typeof useFormField>;

}

export default toNative(FormControl);
