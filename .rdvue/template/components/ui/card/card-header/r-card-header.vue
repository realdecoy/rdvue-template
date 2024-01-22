<script lang="ts" src="./r-card-header"></script>
<template>
  <div
    :class="
      cn(
        'r-card-header',
        'flex flex-col space-y-1.5 p-6',
        $attrs.class ?? '',
      )
    "
  >
    <slot />
  </div>
</template>