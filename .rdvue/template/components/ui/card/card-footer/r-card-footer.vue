<script lang="ts" src="./r-card-footer"></script>
<template>
  <div
    :class="
      cn(
        'r-card-footer',
        'p-6 pt-0',
        $attrs.class ?? '',
      )
    "
  >
    <slot />
  </div>
</template>