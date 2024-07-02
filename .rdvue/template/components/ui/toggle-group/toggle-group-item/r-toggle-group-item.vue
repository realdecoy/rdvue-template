<script lang="ts" src="./r-toggle-group-item"></script>
<template>
    <RadixToggleGroupItem
        :class="cn(className)"
        :value="value" :disabled="disabled">
        <slot />
    </RadixToggleGroupItem>
</template>
    