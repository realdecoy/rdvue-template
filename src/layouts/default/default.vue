<style scoped lang="scss" src="./default.scss"></style>
<script lang="ts" src="./default.ts">
</script>
<template>
  <div class="[ default ][ grid ]">
    <!-- Header -->
    <div class="[ h-12 ]">
      
    </div>

    <!-- Body -->
    <div class="[ grid ]">
      <transition name="fade">
        <router-view />
      </transition>
    </div>

    <!-- Footer -->
    <div class="[ h-12 ]">
      
    </div>
  </div>
</template>