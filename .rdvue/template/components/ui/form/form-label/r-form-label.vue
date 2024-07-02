<script lang="ts" src="./r-form-label.ts"></script>
<template>
  <Label
    :class="
      cn(
        'block text-sm font-medium text-foreground text-left',
        formField.error && 'text-destructive',
        className ?? '',
      )
    "
    :for="formField.formItemId"
    v-bind="rest"
  >
    <slot />
  </Label>
</template>
