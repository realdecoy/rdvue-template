import Vue, { VNode } from 'vue';

declare global {
  namespace JSX {
    // eslint-disable-next-line
    type Elem = VNode;
    // eslint-disable-next-line
    type ElemClass = Vue;
    interface IntrinsicElements {
      [elem: string]: any;
    }
  }
}
