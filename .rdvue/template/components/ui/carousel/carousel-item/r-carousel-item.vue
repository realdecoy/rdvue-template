<script lang="ts" src="./r-carousel-item.ts"></script>
<template>
  <div
    role="group"
    aria-roledescription="slide"
    :class="
      cn(
        'min-w-0 shrink-0 grow-0 basis-full r-carousel-item',
       
        $attrs.class ?? '',
      )
    "
  >
    <slot />


  </div>
</template>
