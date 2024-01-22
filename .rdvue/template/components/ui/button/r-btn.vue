<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    class="transition-all duration-75 ease-linear"
    :class="cn(buttonVariants({ variant: currentVariant, size }), $attrs.class ?? '')"
  >
    <Transition v-if="currentIcon"  name="fade">
      <r-icon class="text-white" :class="{'animate-spin': loading}" :name="currentIcon"  />
    </Transition>
    <slot v-else />
  </Primitive>
</template>

<style lang="scss" src="./r-btn.scss"></style>
<script lang="ts" src="./r-btn.ts"></script>
