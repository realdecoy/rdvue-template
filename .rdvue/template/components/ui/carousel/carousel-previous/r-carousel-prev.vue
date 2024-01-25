<script lang="ts" src="./r-carousel-prev.ts"></script>
<template>
  <r-btn
    :disabled="!carousel.canScrollPrev"
    :class="
      cn(
        'touch-manipulation absolute h-8 w-8 rounded-full p-0',
        carousel.orientation === 'horizontal'
          ? '-left-12 top-1/2 -translate-y-1/2'
          : '-top-12 left-1/2 -translate-x-1/2 rotate-90',
        $attrs.class || '',
      )
    "
    variant="outline"
    @click="carousel.scrollPrev"
  >
    <slot>
      <r-icon name="arrow-left" class="h-4 w-4 text-white" />
    </slot>
  </r-btn>
</template>
