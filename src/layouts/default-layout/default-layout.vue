<style scoped lang="scss" src="./default-layout.scss"></style>
<script lang="ts" src="./default-layout.ts"></script>
<template>
  <div class="[ default ][ flex flex-col ][ h-full w-full ]">
    <!-- Header -->

    <!-- Body -->
    <div class="[ grid ][ h-full ]">
      <router-view v-slot="{ Component }">
        <!-- <transition name="fade"> -->
        <component :is="Component" />
        <!-- </transition> -->
      </router-view>
    </div>

    <!-- Footer -->
    <div
      class="[ h-12 mt-auto ] [ text-start text-xs font-medium ] [ px-12 lg:px-24 ]"
    >
      💖 Developed by RD Engineering. The source code is available on
      <span class="underline-offset-1 underline"
        ><a href="https://github.com/realdecoy/rdvue-template" target="_blank"
          >Github</a
        ></span
      >
    </div>
  </div>
</template>
