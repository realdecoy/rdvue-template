/* eslint-disable no-console */
import { Component, Watch, Vue } from 'vue-facing-decorator';
import ChildComponent from '../child-component';

@Component({
  components: {
    ChildComponent,
  },
  provide() {
    return {
      foo: 'bar',
    };
  },
})
export default class ParentComponent extends Vue {
  public msg = 'Hello World!';
  public checked = false;
  public counter = 0;

  // This method will be called when the component is created.
  created() {
    console.log('ParentComponent created');
  }

  // This method will be called when the component has been mounted.
  mounted() {
    console.log('ParentComponent mounted');
  }

  @Watch('checked')
  onCheckedChanged(newVal: boolean, oldVal: boolean) {
    console.log(`checked changed from ${oldVal} to ${newVal}`);
  }

  public handleCountChanged(n: number) {
    console.log(`ParentComponent's handleCountChanged called with ${n}`);
    this.counter += n;
  }
}
