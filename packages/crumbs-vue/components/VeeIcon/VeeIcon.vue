<template>
  <i v-bind="$props" :class="veeClass" :style="veeStyle"></i>
</template>

<script lang="ts">
import { PropType, defineComponent } from 'vue';
import { VeeIconSize } from './vee-icon';
import composables from '../../composables';
import { classBuilder } from 'crumbs-core/builders/class';

export default defineComponent({
  name: 'VeeIcon',

  props: {
    name: String,
    family: String,
    provider: String,

    size: {
      type: String,
      default: 'default',
    },

    color: {
      type: String,
      default: 'primary',
    },

    ...composables.makeStyleProps(),
    ...composables.makeClassProps(),
  },

  computed: {
    veeColor(): string {
      return this.$crumbs.themesManager.getColorRef(this.color);
    },

    veeSize(): string {
      return this.$crumbs.iconsManager.getSize(this.size);
    },

    veeName(): string {
      return this.$crumbs.iconsManager.locate(
        this.name,
        this.family,
        this.provider
      );
    },

    veeStyle(): Record<string, any> {
      return {
        ...this.style,
      };
    },

    veeClass(): string {
      let classes = [
        'vee-icon',
        this.veeName,
      ];

      return classBuilder(classes);
    }
  },
});
</script>

<style scoped>
.vee-icon {
  color: v-bind('veeColor');
  font-size: v-bind('veeSize');
}
</style>