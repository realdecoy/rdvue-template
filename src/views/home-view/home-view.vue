<style lang="scss" src="./home-view.scss" />
<script lang="ts" src="./home-view.ts" />
<template>
  {{ i18n.t('message') }}
  <br />
  IsReady: {{ ready }}
  <br />
  Ready Message: {{ message }}
  <br />
  <br />
  <button @click="onButtonClick()">
    <font-awesome icon="fa-solid fa-user-secret" />&nbsp;Initialize
  </button>
</template>
