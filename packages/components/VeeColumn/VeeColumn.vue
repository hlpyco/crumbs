<template>
  <div :class="columnSpan">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { classBuilder } from '@/utils';

import {
  DEFAULT_COLUMN_SPAN,
  COLUMN_SPAN_CLASS_PREFIX,
} from '@components/VeeColumn/constants';

export default defineComponent({
  name: 'VeeColumn',

  props: {
    span: {
      type: String,
      default: DEFAULT_COLUMN_SPAN,
    },
  },

  computed: {
    columnSpan() {
      return `${COLUMN_SPAN_CLASS_PREFIX}${this.span}`;
    },
  },

  methods: {
    classes() {
      return classBuilder(this.columnSpan);
    },
  },
});
</script>
