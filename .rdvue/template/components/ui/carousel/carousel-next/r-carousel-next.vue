<script lang="ts" src="./r-carousel-next.ts"></script>
<template>
  <r-btn
    :disabled="!carousel.canScrollNext"
    :class="
      cn(
        'touch-manipulation absolute h-8 w-8 rounded-full p-0 text-white',
        carousel.orientation === 'horizontal'
          ? '-right-12 top-1/2 -translate-y-1/2'
          : '-bottom-12 left-1/2 -translate-x-1/2 rotate-90',
        $attrs.class || '',
      )
    "
    variant="outline"
    @click="carousel.scrollNext"
  >
    <slot>
      <r-icon name="arrow-right" class="h-4 w-4 text-inherit" />
    </slot>
  </r-btn>
</template>
