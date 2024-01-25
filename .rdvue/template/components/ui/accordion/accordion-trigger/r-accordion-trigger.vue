<script lang="ts" src="./r-accordion-trigger"></script>
<template>
  <AccordionHeader class="flex" as="div">
    <RadixAccordionTrigger
      v-bind="$props"
      :class="
        cn(
          'r-accordion-trigger flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180',
          $attrs.class || '',
        )
      "
    >
      <slot />
    </RadixAccordionTrigger>
  </AccordionHeader>
</template>
