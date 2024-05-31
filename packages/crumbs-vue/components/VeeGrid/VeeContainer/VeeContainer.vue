<template>
  <div :class="veeClass" :style="veeStyle">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import composables from '../../../composables';
import { classBuilder } from 'crumbs-core/builders/class';

export default defineComponent({
  name: 'VeeContainer',

  props: {
    fluid: {
      type: Boolean,
      default: false,
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
      return classBuilder({
        'vee-container': true,
        'vee-container-fluid': this.fluid,
        [this.classes]: !!this.classes,
      });
    },
  },
});
</script>

<style scoped>
.vee-container {
  width: 100%;
  padding: 0.75rem;
  margin-right: auto;
  margin-left: auto;
}

.vee-container-fluid {
  max-width: 100%;
}
</style>
