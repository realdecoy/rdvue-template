import { Component, toNative, Vue } from 'vue-facing-decorator';
import {
  AccordionHeader,
  AccordionTrigger as RadixAccordionTrigger,
} from 'radix-vue';
import { cn } from '@/components/lib/utils';



@Component({
  name: 'r-accordion-trigger',
  components: {
    AccordionHeader,
    RadixAccordionTrigger,
  },
})
class AccordionTrigger extends Vue {
  public cn = cn;
}

export default toNative(AccordionTrigger);