<script lang="ts" src="./r-stepper-content.ts"></script>
<template>
    <div :class="cn('r-stepper-content', $attrs.class ?? '')">
        <slot />

    </div>
</template>