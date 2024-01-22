<script lang="ts" src="./r-card.ts"></script>
<template>
  <div
    :class="
      cn(
        'r-card',
        'rounded-sm border bg-card text-card-foreground shadow-sm',
        $attrs.class ?? '',
      )
    "
  >
    <slot />
  </div>
</template>
