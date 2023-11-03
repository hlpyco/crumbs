<template>
  <button :style="computedStyle" v-bind="$props">{{ title }}</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import composables from '../../composables';

export default defineComponent({
  name: 'VeeButton',

  props: {
    title: String,

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
