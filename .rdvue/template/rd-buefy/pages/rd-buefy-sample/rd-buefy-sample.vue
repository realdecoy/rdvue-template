<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import BDropdown from '@realdecoy/buefy/src/components/dropdown/Dropdown.vue';
import BDropdownItem from '@realdecoy/buefy/src/components/dropdown/DropdownItem.vue';
import BButton from '@realdecoy/buefy/src/components/button/Button.vue';
import BIcon from '@realdecoy/buefy/src/components/icon/Icon.vue';

@Component({
  components: {
    BDropdown,
    BDropdownItem,
    BIcon,
    BButton
  }
})
export default class extends Vue {}
</script>

<template>
  <div class="[ text-center ]">
    <span
      >A Button loading <b-button :loading="true" type="is-success"></b-button
    ></span>

    <br />

    <span>A Drop Down</span>
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
