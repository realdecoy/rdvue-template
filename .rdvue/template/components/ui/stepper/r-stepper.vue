<script lang="ts" src="./r-stepper"></script>
<template>
    <div
        :class="cn('r-stepper-content', $attrs.class ?? '')"
    >
        <slot v-bind="stepperArgs" />
    </div>
</template>