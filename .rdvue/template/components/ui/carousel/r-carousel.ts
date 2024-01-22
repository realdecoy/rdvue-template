import {
  Prop,
  Component,
  Vue,
  toNative,
  Setup,
  Emit,
  Watch,
} from 'vue-facing-decorator';
import { useProvideCarousel } from './useCarousel';
import type { CarouselEmits, CarouselProps } from './interface';
import type { EmblaCarouselType as CarouselApi } from 'embla-carousel';
import { cn } from '@/lib/utils';

@Component({
  name: 'r-carousel',
  emits: ['init-api'],
})
class Carousel extends Vue implements CarouselProps {
  @Prop({ default: 'horizontal' }) orientation!: 'horizontal' | 'vertical';
  @Prop() opts?: any;
  @Prop() plugins?: any;

  @Setup((props, ctx) => {
    const carouselArgs = useProvideCarousel(props, ctx.emit as CarouselEmits);
    return carouselArgs;
  })
  public carouselArgs!: ReturnType<typeof useProvideCarousel>;
  
  @Setup(() => cn)
  public cn!: typeof cn;

  @Emit('init-api')
  public initApi(api: CarouselApi) {
    return api;
  }


}

export default toNative(Carousel);
