import { Component, toNative, Setup, Vue, Watch } from 'vue-facing-decorator';
import { EmblaCarouselType as CarouselApi } from 'embla-carousel';
import { useCarousel } from '../useCarousel';
import { cn } from '@/components/lib/utils';

@Component({
  name: 'r-carousel-item',
})
class CarouselItem extends Vue {
    
  @Setup(() => cn)
  public cn!: typeof cn;

  @Setup(() => {
    const { orientation } = useCarousel();
    return orientation;
  })
  public orientation!: String;

  @Setup(() => {
    const { carouselApi } = useCarousel();
    return carouselApi;
  })
  public carouselApi!: CarouselApi;


}

export default toNative(CarouselItem);
