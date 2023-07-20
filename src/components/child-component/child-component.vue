<style lang="scss" scoped src="./child-component.scss"></style>
<script lang="ts" src="./child-component.ts"></script>
<template>
  <div class="child">
    <h2>Child Component</h2>
    <p>{{ msg }}</p>
    <p>{{ foo }}</p>
    <input type="checkbox" v-model="checked" />
    <button @click="addToCount(1)">Add to Count</button>
  </div>
</template>
