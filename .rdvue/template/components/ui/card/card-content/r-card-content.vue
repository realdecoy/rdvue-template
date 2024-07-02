<script lang="ts" src="./r-card-content"></script>
<template>
  <div
    :class="
      cn(
        'r-card-content',
        'p-6 pt-0',
        $attrs.class ?? '',
      )
    "
  >
    <slot />
  </div>
</template>