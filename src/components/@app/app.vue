import type { RouterView } from 'vue-router';

<script lang="ts" src="./app.ts" />
<style scoped src="./app.scss" />
<template>
  <div class="app">
    <Suspense>
      <component :is="layout">
        <RouterView></RouterView>
      </component>
    </Suspense>
  </div>
</template>
