<template>
  <button :style="computedStyle" v-bind="$props">{{ title }}</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'VeeButton',

  props: {
    title: String,
    color: {
      type: String,
      default: 'primary',
    },
    style: null,
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
