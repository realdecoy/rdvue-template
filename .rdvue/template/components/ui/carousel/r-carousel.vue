<script lang="ts" src="./r-carousel.ts"></script>
<template>
  <div
    :class="cn('r-carousel-content', $attrs.class ?? '')"
    role="region"
    aria-roledescription="carousel"
    tabindex="0"
  >
    <slot v-bind="carouselArgs" />
  </div>
</template>
