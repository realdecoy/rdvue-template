<script lang="ts" src="./r-card-description.ts"></script>
<template>
  <p
    :class="
      cn(
        'r-card-description',
        'text-sm text-muted-foreground',
        $attrs.class ?? '',
      )
    "
  >
    <slot />
  </p>
</template>
