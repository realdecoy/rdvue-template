<script lang="ts" src="./r-carousel-content.ts"></script>
<template>
    <div ref="carouselRef" class="overflow-hidden r-carousel-container">
      <div
        :class="
          cn(
            'flex',
            'r-carousel-content',
            orientation === 'horizontal' ? '-ml-4' : '-mt-4 flex-col',
            $attrs.class ?? '',
          )"
      >
        <slot />
      </div>
    </div>
  </template>