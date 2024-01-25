<script lang="ts" src="./r-accordion-item"></script>
<template>
    <RadixAccordionItem
      v-bind="$props"
      :class="cn('r-accordion-item border-b', $attrs.class || '')"
    >
      <slot />
    </RadixAccordionItem>
  </template>
  