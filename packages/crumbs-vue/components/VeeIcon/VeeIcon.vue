<template>
  <svg
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    :aria-labelledby="icon"
    :fill="veeColor"
    :stroke="veeColor"
  >
    <title :id="icon">{{ icon }}</title>
    <component :is="icon" />
  </svg>
</template>

<script lang="ts">
import { PropType, defineComponent } from 'vue';
import { VeeIconSize } from './vee-icon';
import composables from '../../composables';

export default defineComponent({
  name: 'VeeIcon',

  props: {
    icon: String,

    size: {
      type: String as PropType<VeeIconSize>,
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

    veeStyle(): Record<string, any> {
      return {
        ...this.style,
      };
    },

    veeClass(): string {
      return '';
    }
  },

  methods: {
    ensureSizeValid() {
      return !Object.values(VeeIconSize).includes(this.size)
        ? VeeIconSize.default
        : this.size;
    },
  }
});
</script>

<style scoped>

</style>
