<style scoped lang="scss" src="./not-found.scss"></style>
<script lang="ts" src="./not-found.ts"></script>
<template>
  <div class="[ not-found grid justify-items-center items-center ]">
    <div class="[ text-center max-w-sm text-typography-light ]">
      <p class="[ text-8xl font-thin leading-snug ]">404</p>
      <h2 class="[ opacity-25 ]">Page Not Found</h2>
      <p class="[ mt-5 ]">The page you are looking for doesn't exists<br>or other errors occured.
      <span @click="$router.go(-1)" class="[ cursor-pointer underline ]">Go back</span></p>
    </div>
  </div>
</template>