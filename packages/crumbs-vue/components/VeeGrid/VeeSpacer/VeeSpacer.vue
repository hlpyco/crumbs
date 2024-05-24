<template>
  <div :class="veeClass" :style="veeStyle"></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import composables from '../../../composables';
import { classBuilder } from 'crumbs-core/builders/class';

export default defineComponent({
  name: 'VeeSpacer',

  props: {
    ...composables.makeStyleProps(),
    ...composables.makeClassProps(),
  },

  computed: {
    veeStyle(): Record<string, any> {
      return {
        ...this.style,
      }
    },

    veeClass(): string {
      return classBuilder(['vee-spacer', this.classes]);
    },
  },
});
</script>

<style scoped>
.vee-spacer {
  flex-grow: 1;
}
</style>
