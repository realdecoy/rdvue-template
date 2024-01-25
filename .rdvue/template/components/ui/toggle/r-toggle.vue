<script lang="ts" src="./r-toggle"></script>
<template>
    <Toggle v-bind="{
        ...forwarded,
        ...rest,
    }" :class="cn(toggleVariants({ variant, size }), className ?? '')" :disabled="disabled">
        <slot />
    </Toggle>
</template>
  