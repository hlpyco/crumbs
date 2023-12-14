<template>
  <button v-bind="$props" :class="veeClass" :style="veeStyle">
    {{ text }}

    <vee-icon
      v-if="icon"
      size="x-small"
      class="vee-button-icon"
      :name="icon"
      :color="textColor"
    ></vee-icon>
  </button>
</template>

<script lang="ts">
import { PropType, defineComponent } from 'vue';
import composables from '../../composables';
import { classBuilder } from 'crumbs-core/builders/class';
import { VeeButtonSize, VeeButtonVariant } from './vee-button';

import VeeIcon from '../VeeIcon/VeeIcon.vue';

export default defineComponent({
  name: 'VeeButton',

  components: {
    VeeIcon
  },

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

    textColor: {
      type: String,
      default: 'white',
    },

    disabledColor: {
      type: String,
      default: 'grey-lighten-5',
    },

    disabledTextColor: {
      type: String,
      default: 'grey-lighten-1',
    },

    ...composables.makeStyleProps(),
    ...composables.makeClassProps(),
  },

  computed: {
    veeColor(): string {
      return this.$crumbs.themesManager.getColorRef(this.color);
    },

    veeTextColor(): string {
      return this.$crumbs.themesManager.getColorRef(this.textColor);
    },

    veeDisabled(): string {
      return this.$crumbs.themesManager.getColorRef(this.disabledColor);
    },
    
    veeDisabledTextColor(): string {
      return this.$crumbs.themesManager.getColorRef(this.disabledTextColor);
    },

    veeStyle(): Record<string, any> {
      return {
        ...this.style,
      };
    },

    veeClass(): string {
      const size = this.ensureSizeValid();
      const variant = this.ensureVariantValid();

      let classes = [
        'vee-button',
        'crumbs-button',
        `size-${size}`,
        `variant-${variant}`
      ]

      if (this.disabled) {
        classes.push(
          'vee-button-disabled',
          `disabled-${variant}`,
        );
      }

      return classBuilder(classes);
    }
  },

  methods: {
    ensureSizeValid() {
      return !Object.values(VeeButtonSize).includes(this.size)
        ? VeeButtonSize.default
        : this.size;
    },

    ensureVariantValid() {
      return !Object.values(VeeButtonVariant).includes(this.variant)
        ? VeeButtonVariant.default
        : this.variant;
    },
  }
});
</script>

<style scoped>
.vee-button {
  /* display: flex;
  align-items: center; */
  border: 0;
  border-radius: 2.875rem;
  color: v-bind('veeTextColor');
  text-transform: uppercase;
}

.vee-button-icon {
  /* margin-left: 0.5rem; */
}

.vee-button-disabled {
  cursor: not-allowed;
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
  background-color: v-bind('veeColor');
}

.variant-text {
  color: v-bind('veeColor');
  background-color: transparent;
}

.variant-outlined {
  color: v-bind('veeColor');
  background-color: transparent;
  border: solid 0.125rem v-bind('veeColor');
}

.disabled-default {
  font-weight: 700;
  color: v-bind('veeDisabledTextColor');
  background-color: v-bind('veeDisabled');
}

.disabled-text {
  color: v-bind('veeDisabledTextColor');
}

.disabled-outlined {
  color: v-bind('veeDisabledTextColor');
  border: solid 0.125rem v-bind('veeDisabled');
}
</style>
