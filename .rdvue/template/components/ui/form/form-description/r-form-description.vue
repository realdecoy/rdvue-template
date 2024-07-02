
<script lang="ts" src="./r-form-description.ts"></script>
<template>
    <p
      :id="formDescriptionId"
      :class="cn('text-sm text-muted-foreground', className ?? '')"
      v-bind="rest"
    >
      <slot />
    </p>
  </template>