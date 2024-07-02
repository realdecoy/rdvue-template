<script lang="ts" src="./r-radio-group.ts"></script>
<template>
    <RadioGroupRoot :class="cn('grid gap-2', $attrs.class || '' )" v-bind="forwarded">
      <slot />
    </RadioGroupRoot>
  </template>
  