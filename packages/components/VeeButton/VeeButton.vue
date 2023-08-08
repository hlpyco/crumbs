<template>
  <button v-bind="$props" :class="composite.class" :style="composite.style">
    {{ label }}
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { compositor } from '@/core';

import { DEFAULT_COLOR, DEFAULT_LABEL } from '@components/VeeButton/constants';

export default defineComponent({
  name: 'VeeButton',

  data() {
    return {
      composite: compositor(),
    };
  },

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
});
</script>
