<script lang="ts" src="./r-radio-group-item"></script>
<template>
  <RadixGroupItem
    v-bind="$props"
    :class="
      cn(
        'aspect-square h-4 w-4 rounded-full cursor-pointer flex justify-center items-center border border-primary disabled:cursor-not-allowed disabled:opacity-50',
        $attrs.class || '',
      )
    "
  >
    <RadioGroupIndicator
      :class="cn('flex items-center justify-center', $attrs.class || '')"
    >
      <div class="w-2.5 h-2.5 bg-primary rounded-full" />
    </RadioGroupIndicator>
  </RadixGroupItem>
</template>
