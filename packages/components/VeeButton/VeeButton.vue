<template>
  <button :class="classes()">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { classBuilder } from '@/utils';

import { DEFAULT_BUTTON_COLOR } from '@components/VeeButton/constants';

export default defineComponent({
  name: 'VeeButton',

  props: {
    color: {
      type: String,
      default: DEFAULT_BUTTON_COLOR,
    },
  },

  methods: {
    classes() {
      return classBuilder();
    },
  },
});
</script>
