<script lang="ts" src="./r-form-control"></script>
<template>
    <Slot
    :id="formApi.formItemId"
    :aria-describedby="!formApi.error ? `${formApi.formDescriptionId}` : `${formApi.formDescriptionId} ${formApi.formMessageId}`"
    :aria-invalid="!!formApi.error"
  >
    <slot />
  </Slot>
</template>