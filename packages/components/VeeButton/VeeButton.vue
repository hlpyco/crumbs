<template>
  <button :class="classes()">
    {{ label }}
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { classBuilder } from '@/utils';

import { DEFAULT_COLOR, DEFAULT_LABEL } from '@components/VeeButton/constants';

export default defineComponent({
  name: 'VeeButton',

  props: {
    color: {
      type: String,
      default: DEFAULT_COLOR,
    },

    label: {
      type: String,
      default: DEFAULT_LABEL,
    },
  },

  methods: {
    classes() {
      return classBuilder();
    },
  },
});
</script>
