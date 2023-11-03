<template>
  <button
    v-bind="$props"
    class="vee-button default"
    :style="computedStyle"
  >{{ text }}</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import composables from '../../composables';

export default defineComponent({
  name: 'VeeButton',

  props: {
    icon: String,
    text: String,

    iconPosition: {
      type: String,
      default: 'left',
    },

    variant: {
      type: String,
      default: 'regular',
    },

    size: {
      type: String,
      default: 'default',
    },

    disabled: {
      type: Boolean,
      default: false,
    },

    color: {
      type: String,
      default: 'primary',
    },

    ...composables.makeStyleProps(),
    ...composables.makeClassProps(),
  },

  computed: {
    computedStyle(): Record<string, any> {
      return {
        'background-color': this.$crumbs.themesManager.getColor(this.color),
        ...this.style,
      };
    },
  },
});
</script>

<style scoped>
.vee-button {
  border: 0;
  border-radius: 2.875rem;
  color: #fff;
  text-transform: uppercase;
}

.default {
  min-height: 2.375rem;
  padding: 0.625rem 1rem 0.625rem 1rem;
}
</style>