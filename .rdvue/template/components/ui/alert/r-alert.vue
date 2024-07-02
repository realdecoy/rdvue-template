<script lang="ts" src="./r-alert.ts"></script>
<template>
    <div :class="cn(alertVariants({ variant: currentVariant }), $attrs.class ?? '')">
      <slot />
    </div>
  </template>
  