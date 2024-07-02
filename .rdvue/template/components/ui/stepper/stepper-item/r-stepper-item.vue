<script lang="ts" src="./r-stepper-item.ts"></script>
<template>
    <div v-if="isCurrent" :class="cn(

        $attrs.class ?? 'r-stepper-item',
    )
        ">
        <slot v-bind="{ step, isCurrent, isComplete }" />


    </div>
</template>
