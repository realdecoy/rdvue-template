<script lang="ts" src="./r-stepper-header-item.ts"></script>
<template>
    <div :class="cn(


        $attrs.class ?? 'r-stepper-header-item',
    )
        ">
        <slot v-bind="{ isCurrent, isComplete, step }" />


    </div>
</template>
