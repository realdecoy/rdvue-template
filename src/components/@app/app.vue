import type { RouterView } from 'vue-router';

<script lang="ts" src="./app.ts" />
<!-- <script lang="ts" setup>
import { defineAsyncComponent } from 'vue';

const DefaultLayout = defineAsyncComponent(
  () => import(`../../layouts/default/default.vue`)
);
</script> -->
<style scoped src="./app.scss" />
<template>
  <div class="app">
    <Suspense>
      <component :is="activeLayoutName">
        <RouterView></RouterView>
      </component>
    </Suspense>
  </div>
</template>
