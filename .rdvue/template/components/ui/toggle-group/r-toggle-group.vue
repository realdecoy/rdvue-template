<script lang="ts" src="./r-toggle-group"></script>
<template>
    <RadixToggleGroupRoot v-bind="{ ...forwarded, ...rest, }" :class="cn('r-toggle-group flex', className)">
        <slot />
    </RadixToggleGroupRoot>
</template>
