<template>
  <div :class="classes()">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { classBuilder } from '@/utils';

import {
  GRID_CLASS,
  DEFAULT_GRID_COLUMNS,
  DEFAULT_GRID_COLUMNS_GAP,
  GRID_COLS_GAP_CLASS_PREFIX,
  GRID_COLS_CLASS_PREFIX_GRID,
} from './constants';

export default defineComponent({
  name: 'VeeRow',

  data() {
    return {
      gridClass: GRID_CLASS,
      gridColsClassPrefix: GRID_COLS_CLASS_PREFIX_GRID,
      gridColsGapClassPrefix: GRID_COLS_GAP_CLASS_PREFIX,
    };
  },

  props: {
    cols: {
      type: String,
      default: DEFAULT_GRID_COLUMNS,
    },

    gap: {
      type: String,
      default: DEFAULT_GRID_COLUMNS_GAP,
    },
  },

  computed: {
    gridColumns() {
      return `${this.gridColsClassPrefix}${this.cols}`;
    },

    gridColumnsGap() {
      return `${this.gridColsGapClassPrefix}${this.gap}`;
    },
  },

  methods: {
    classes() {
      return classBuilder(
        this.gridClass,
        this.gridColumns,
        this.gridColumnsGap,
      );
    }
  }
});
</script>
