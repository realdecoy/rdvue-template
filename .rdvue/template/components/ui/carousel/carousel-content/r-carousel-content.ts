import { Component, toNative, Vue, Prop, Setup, Ref } from 'vue-facing-decorator';
import { useCarousel } from '../useCarousel';
import { cn } from '@/components/lib/utils';
@Component({
  name: 'r-carousel-content',
})
class CarouselContent extends Vue {
  @Setup(() => cn)
  public cn!: typeof cn;

  @Setup(() => {
    const { carouselRef } = useCarousel();
    return carouselRef;
  })
  public carouselRef!: ReturnType<typeof useCarousel>['carouselRef'];

  @Setup(() => {
    const { orientation } = useCarousel();
    return orientation ;
  }
  )
  public orientation!: ReturnType<typeof useCarousel>['orientation'];

 

  created() {

  }

  mounted() {

  }
}

export default toNative(CarouselContent);
