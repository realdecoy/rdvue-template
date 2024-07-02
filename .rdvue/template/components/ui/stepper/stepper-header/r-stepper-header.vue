<script lang="ts" src="./r-stepper-header.ts"></script>
<template>
    <div :class="cn('r-stepper-header', $attrs.class ?? '')">
        <slot />

    </div>
</template>