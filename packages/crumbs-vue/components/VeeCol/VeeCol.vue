<template>
  <div :class="veeClass" :style="veeStyle">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { PropType, defineComponent } from 'vue';
import composables from '../../composables';
import { classBuilder } from 'crumbs-core/builders/class';
import { VeeColAlignSelf } from './vee-col';

export default defineComponent({
  name: 'VeeCol',

  props: {
    alignSelf: {
      type: String as PropType<VeeColAlignSelf>,
      default: null,
      validator: (value: string): boolean => {
        return Object.values(VeeColAlignSelf).includes(value as VeeColAlignSelf);
      },
    },

    cols: {
      type: [Number, String],
      default: null,
    },

    sm: {
      type: [Number, String],
      default: null,
    },

    md: {
      type: [Number, String],
      default: null,
    },

    lg: {
      type: [Number, String],
      default: null,
    },

    xl: {
      type: [Number, String],
      default: null,
    },

    ...composables.makeStyleProps(),
    ...composables.makeClassProps(),
  },

  computed: {
    veeStyle(): Record<string, any> {
      return {
        ...this.style,
      };
    },

    veeClass(): string {
      let classes = ['vee-col'];

      return classBuilder(classes);
    },
  },
});
</script>

<style scoped>
.vee-col {
  flex: 1 0 auto;
  gap: 4;
}
</style>
