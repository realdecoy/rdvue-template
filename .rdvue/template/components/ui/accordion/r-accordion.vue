<script lang="ts" src="./r-accordion.ts"></script>
<style lang="scss" src="./r-accordion.scss"></style>
<template>
    <AccordionRoot v-bind="{ ...$props, ...emitAsProps }" :class="cn($attrs.props || '', 'r-accordion')">
        <slot />
    </AccordionRoot>
</template>