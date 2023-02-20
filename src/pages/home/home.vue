
<style lang="scss" src="./home.scss"/>
<script lang="ts" src="./home.ts"/>
<template>
  Home
  <br/>
  IsReady: {{ isReady }}
  <br/>
  Ready Message: {{ readyMessage }}
  <br/>
  <font-awesome icon="fa-solid fa-coffee" />
  <br/>
  <button @click="initialize()"> Initialize</button>
</template>
