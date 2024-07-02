<script lang="ts" src="./r-form-item.ts"></script>
<template>
    <div :class="cn('space-y-2', className ?? '')" v-bind="rest">
      <slot />
    </div>
  </template>