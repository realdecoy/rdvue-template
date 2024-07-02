<script lang="ts" src="./r-popover.ts"></script>
<style lang="scss" src="./r-popover.scss"></style>
<template>
    <PopoverRoot v-bind="forwarded">
        <slot />
    </PopoverRoot>
</template>