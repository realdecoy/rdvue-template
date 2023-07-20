<style scoped lang="scss" src="./parent-component.scss"></style>

<script lang="ts" src="./parent-component.ts"></script>

<template>
  <div class="parent">
    <h1>Parent Component</h1>
    <p>Total count: {{ counter }}</p>
    <p>Checked: {{ checked }}</p>
    <p>Below Is The Child Component</p>
    <ChildComponent
      :msg="msg"
      @addToCount="handleCountChanged"
      v-model="checked"
      ref="child"
    />
  </div>
</template>
