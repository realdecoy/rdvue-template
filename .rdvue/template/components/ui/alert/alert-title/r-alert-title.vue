<script lang="ts" src="./r-alert-title.ts"></script>
<template>
    <h5 :class="cn('mb-1 font-medium leading-none tracking-tight', $attrs.class ?? '')">
      <slot />
    </h5>
  </template>
  