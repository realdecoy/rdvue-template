<template>
  <div>
    <p class="[ text-center ]">{{ $t('message') }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Setup, Vue } from 'vue-facing-decorator';
import { useI18n } from 'vue-i18n';

@Component({})
export default class HelloI18n extends Vue {

  @Setup(() => useI18n())
  public i18n!: ReturnType<typeof useI18n>;
}
</script>
