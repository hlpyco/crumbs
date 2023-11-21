<template>
  <i>{{ veeSize }}</i>
</template>

<script lang="ts">
import { PropType, defineComponent } from 'vue';
import { VeeIconSize } from './vee-icon';
import composables from '../../composables';

export default defineComponent({
  name: 'VeeIcon',

  props: {
    name: String,
    family: String,
    provider: String,

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

    veeSize(): string {
      return this.$crumbs.iconsManager.getSize(this.size);
    },

    veeName(): string {
      return this.$crumbs.iconsManager.locate(this.name);
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
