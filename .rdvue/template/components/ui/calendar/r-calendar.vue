<script lang="ts" src="./r-calendar.ts"></script>
<style lang="scss" src="./r-calendar.scss"></style>
<template>
    <div class="relative w-full">
      <div class="absolute flex justify-between w-full px-4 top-3">
        <button :class="cn(buttonVariants({ variant: 'outline' }), 'h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 z-20')" @click="handleNav('prev')">
          <icon name="chevronLeft" class="w-4 h-4" />
        </button>
        <button :class="cn(buttonVariants({ variant: 'outline' }), 'h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 z-20')" @click="handleNav('next')">
          <icon name="chevronRight" class="w-4 h-4" />
        </button>   
      </div>
      <DatePicker
        ref="datePicker"
        v-model="value"
        v-bind="$attrs"
        :mode="mode"
        :model-modifiers="modelModifiers"
        class="calendar"
        trim-weeks
        :columns="columns"
      />
    </div>
  </template>


