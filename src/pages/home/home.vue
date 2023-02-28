
<style lang="scss" src="./home.scss"/>
<script lang="ts" src="./home.ts"/>
<template>
  {{ t('message') }}
  <br/>
  IsReady: {{ isReady }}
  <br/>
  Ready Message: {{ readyMessage }}
  <br/>
  <font-awesome icon="fa-solid fa-coffee" />
  <br/>
  <button @click="initialize()"> Initialize</button>
</template>
