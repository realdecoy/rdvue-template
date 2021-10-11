<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { RequireVue } from '@/modules/core/constants';
import BDropdown from '@realdecoy/buefy/src/components/dropdown/Dropdown.vue';
import BDropdownItem from '@realdecoy/buefy/src/components/dropdown/DropdownItem.vue';
import BButton from '@realdecoy/buefy/src/components/button/Button.vue';

// tslint:disable-next-line:no-var-requires
const { BIcon } = require('buefy/dist/components/icon') as RequireVue;

@Component({ components: { BDropdown, BDropdownItem, BIcon, BButton } })
export default class extends Vue {}
</script>

<template>
  <div class="[ text-center ]">
    <b-button :loading="true" type="is-success">A Button loading</b-button>
    <b-dropdown aria-role="list">
      <button class="button" slot="trigger" slot-scope="{ active }">
        <span>Click me!</span>
        <BIcon pack="fas" :icon="active ? 'chevron-up' : 'chevron-down'" />
      </button>

      <b-dropdown-item aria-role="listitem">Action</b-dropdown-item>
      <b-dropdown-item aria-role="listitem">Another action</b-dropdown-item>
      <b-dropdown-item aria-role="listitem">Something else</b-dropdown-item>
    </b-dropdown>
  </div>
</template>
