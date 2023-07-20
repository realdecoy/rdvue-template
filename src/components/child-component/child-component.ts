/* eslint-disable no-console */
// Import necessary decorators and components from vue-property-decorator
import {
  Component,
  Emit,
  Inject,
  Model,
  Prop,
  Watch,
  Vue,
} from 'vue-facing-decorator';

@Component
export default class ChildComponent extends Vue {
  public count = 0;
  @Inject() foo!: string;

  @Prop() public msg!: string;

  @Watch('msg')
  onMsgChanged(newMsg: string, oldMsg: string) {
    console.log(`msg changed from ${oldMsg} to ${newMsg}`);
  }

  // This method will be called when the component is created.
  created() {
    console.log('ChildComponent created');
  }

  // This method will be called when the component has been mounted.
  mounted() {
    console.log('ChildComponent mounted');
  }

  @Emit()
  addToCount(n: number) {
    console.log("child component's addToCount called");

    return n;
  }

  @Model({ type: Boolean, default: false }) checked!: boolean;
}
