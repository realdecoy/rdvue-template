<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { RequireVue } from '@/modules/core/constants';

const { 
  BButton
} = require('@realdecoy/buefy/dist/components/button') as RequireVue;

const {
  BDropdown,
  BDropdownItem,
  // tslint:disable-next-line:no-var-requires
} = require('@realdecoy/buefy/dist/components/dropdown') as RequireVue;
// tslint:disable-next-line:no-var-requires
const { BIcon } = require('@realdecoy/buefy/dist/components/icon') as RequireVue;

@Component({ components: { BDropdown, BDropdownItem, BIcon, BButton } })
export default class extends Vue {}
</script>

<template>
  <div class="[ text-center ]">
    <b-dropdown aria-role="list">
      <b-button class="button" slot="trigger" type="is-primary" slot-scope="{ active }">
        <span>Click me!</span>
        <BIcon pack="fas" :icon="active ? 'chevron-up' : 'chevron-down'" />
      </b-button>

      <b-dropdown-item aria-role="listitem">Action</b-dropdown-item>
      <b-dropdown-item aria-role="listitem">Another action</b-dropdown-item>
      <b-dropdown-item aria-role="listitem">Something else</b-dropdown-item>
    </b-dropdown>
  </div>
</template>