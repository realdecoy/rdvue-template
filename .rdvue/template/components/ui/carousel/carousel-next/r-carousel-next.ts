import { Component, toNative, Vue, Prop, Setup, Ref } from 'vue-facing-decorator';
import { cn } from '@/components/lib/utils';
import Icon from '../../icon';
import Button from '../../button';
import { useCarousel } from '../useCarousel';

@Component({
    name: 'r-carousel',
    components: {
        'r-icon': Icon,
        'r-btn': Button,
    },
})
class CarouselNext extends Vue {
    @Setup(() => {
        const { canScrollNext, orientation, scrollNext } = useCarousel();
        return {
            canScrollNext,
            orientation,
            scrollNext,
        };
    })
    public carousel!: ReturnType<typeof useCarousel>;
    public cn = cn;


}

export default toNative(CarouselNext);