<style scoped lang="scss" src="./default-layout.scss"></style>
<script lang="ts" src="./default-layout.ts"></script>
<template>
  <div class="[ default ][ grid ][ h-screen ]">
    <!-- Header -->

    <!-- Body -->
    <div class="[ grid ]">
      <router-view v-slot="{ Component }">
        <!-- <transition name="fade"> -->
        <component :is="Component" />
        <!-- </transition> -->
      </router-view>
    </div>

    <!-- Footer -->
    <div class="[ h-12 mt-auto ] [ text-center ]">
      Copyright {{ new Date().getFullYear() }}
    </div>
  </div>
</template>
