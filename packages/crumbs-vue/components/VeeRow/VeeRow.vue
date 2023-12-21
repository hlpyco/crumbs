<template>
  <div :class="veeClass" :style="veeStyle">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { PropType, defineComponent } from 'vue';
import composables from '../../composables';
import { classBuilder } from 'crumbs-core/builders/class';
import { VeeRowAlign, VeeRowAlignContent, VeeRowJustify } from './vee-row';

export default defineComponent({
  name: 'VeeRow',

  props: {
    align: {
      type: String as PropType<VeeRowAlign>,
      default: null,
      validator: (value: string): boolean => {
        return Object.values(VeeRowAlign).includes(value as VeeRowAlign);
      },
    },

    alignContent: {
      type: String as PropType<VeeRowAlignContent>,
      default: null,
      validator: (value: string): boolean => {
        return Object.values(VeeRowAlignContent).includes(value as VeeRowAlignContent);
      },
    },

    justify: {
      type: String as PropType<VeeRowJustify>,
      default: null,
      validator: (value: string): boolean => {
        return Object.values(VeeRowJustify).includes(value as VeeRowJustify);
      },
    },

    ...composables.makeStyleProps(),
    ...composables.makeClassProps(),
  },

  computed: {
    veeAlign(): string {
      return this.align?.valueOf() || 'auto';
    },

    veeAlignContent(): string {
      return this.alignContent?.valueOf() || 'flex-start';
    },

    veeJustify(): string {
      return this.justify?.valueOf() || 'flex-start';
    },

    veeStyle(): Record<string, any> {
      return {
        ...this.style,
      };
    },

    veeClass(): string {
      let classes = [
        'vee-row',
      ];

      return classBuilder(classes);
    },
  },
});
</script>

<style scoped>
.vee-row {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  column-count: 12;
  row-gap: 4;
  align-self: v-bind('veeAlign');
  align-content: v-bind('veeAlignContent');
  justify-self: v-bind('veeJustify');
}
</style>
