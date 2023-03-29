<style lang="scss" src="./home-view.scss" />
<script lang="ts" src="./home-view.ts" />
<template>
  {{ t('message') }}
  <br />
  IsReady: {{ isReady }}
  <br />
  Ready Message: {{ message }}
  <br />
  <font-awesome icon="fa-solid fa-user-secret" />
  <br />
  <button @click="onButtonClick()">Initialize</button>
</template>
