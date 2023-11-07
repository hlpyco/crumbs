<template>
  <button v-bind="$props" :class="veeClass" :style="veeStyle">
    {{ text }}
  </button>
</template>

<script lang="ts">
import { PropType, defineComponent } from 'vue';
import composables from '../../composables';
import { VeeButtonSize, VeeButtonVariant } from './vee-button';

export default defineComponent({
  name: 'VeeButton',

  props: {
    icon: String,
    text: String,

    iconPosition: {
      type: String,
      default: 'left',
    },

    variant: {
      type: String as PropType<VeeButtonVariant>,
      default: 'regular',
    },

    size: {
      type: String as PropType<VeeButtonSize>,
      default: 'default',
    },

    disabled: {
      type: Boolean,
      default: false,
    },

    color: {
      type: String,
      default: 'primary',
    },

    ...composables.makeStyleProps(),
    ...composables.makeClassProps(),
  },

  watch: {
    color: function () {},
  },

  computed: {
    veeVars(): Record<string, any> {
      const color = this.ensureColor();

      return {
        "--vee-button-color": color,
        "--vee-button-border-color": color,
        "--vee-button-background-color": color,
      };
    },

    veeStyle(): Record<string, any> {
      return {
        ...this.veeVars,
        ...this.style,
      };
    },

    veeClass(): string {
      const size = this.ensureSizeValid();

      let classes = [
        'vee-button',
        'crumbs-button',
        `size-${size}`,
        `variant-${this.variant}`
      ]

      if (this.disabled) classes.push('disabled');
      return classes.join(' ');
    }
  },

  methods: {
    ensureColor() {
      switch(this.disabled) {
        case true:
          return '#a6a6a6';

        default:
          return this.$crumbs.themesManager.getColor(this.color);
      }
    },

    ensureSizeValid() {
      return !Object.values(VeeButtonSize).includes(this.size)
        ? VeeButtonSize.default
        : this.size;
    }
  }
});
</script>

<style scoped>
.vee-button {
  border: 0;
  border-radius: 2.875rem;
  color: #ffffff;
  text-transform: uppercase;
}

.size-default {
  min-height: 2.375rem;
  padding: 0.625rem 1rem 0.625rem 1rem;
}

.size-small {
  font-weight: 600;
  min-height: 1.875rem;
  padding: 0.375rem 2rem 0.375rem 2rem;
}

.variant-default {
  background-color: var(--vee-button-background-color);
}

.variant-text {
  color: #a6a6a6;
  background-color: transparent;
}

.variant-outline {
  color: var(--vee-button-color);
  background-color: transparent;
  border: solid 0.125rem var(--vee-button-border-color);
}

.disabled {
  cursor: not-allowed;
}
</style>
