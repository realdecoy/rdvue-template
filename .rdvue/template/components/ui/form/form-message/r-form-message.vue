<script lang="ts" src="./r-form-message.ts"></script>
<template>
    <ErrorMessage
      :id="formField.formMessageId"
      as="p"
      :name="toValue(formField.name)"
      class="text-sm font-medium text-destructive"
    />
  </template>
  