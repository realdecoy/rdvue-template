<script lang="ts" src="./r-alert-description.ts"></script>
<template>
  <div :class="cn('text-sm [&_p]:leading-relaxed', $attrs.class ?? '')">
    <slot />
  </div>
</template>