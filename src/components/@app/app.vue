import type { RouterView } from 'vue-router';

<script lang="ts" src="./app.ts" />
<style scoped src="./app.scss" />
<template>
  <metainfo>
    <template v-slot:title="{ content }">{{
      content ? `${content}` : `RDVue Template`
    }}</template>
  </metainfo>
  <div class="[ app ][ grid ][ h-full w-full ]">
    <Suspense>
      <component :is="layout">
        <RouterView></RouterView>
      </component>
    </Suspense>
  </div>
</template>
