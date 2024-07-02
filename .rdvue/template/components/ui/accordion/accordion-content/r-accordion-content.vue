<script lang="ts" src="./r-accordion-content"></script>
<template>
  <RadixAccordionContent v-bind="$props" :class="cn(
    'r-accordion-content overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down',
    $attrs.class || '',
  )
    ">
    <slot />
  </RadixAccordionContent>
</template>