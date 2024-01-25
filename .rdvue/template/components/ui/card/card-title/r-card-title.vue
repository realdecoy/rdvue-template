<script lang="ts" src="./r-card-title"></script>
<template>
  <div
    :class="
      cn(
        'r-card-title',
        'text-2xl font-semibold leading-none',
        $attrs.class ?? '',
      )
    "
  >
    <slot />
  </div>
</template>