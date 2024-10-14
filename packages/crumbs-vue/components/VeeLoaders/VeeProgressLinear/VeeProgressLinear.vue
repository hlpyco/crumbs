<template>
  <div
    :style="veeStyle"
    :class="veeClass"
    role="progressbar"
    aria-valuemin="0"
    aria-valuemax="100"
    :aria-valuenow="indeterminate ? undefined : veeNormalizedValue"
  >
    <div :class="veeBackgroundClass"></div>

    <div :class="veeContentClass"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import composables from '../../../composables';
import { classBuilder } from 'crumbs-core/builders/class';

const ROTATE = 0;

export default defineComponent({
  name: 'VeeProgressCircular',

  props: {
    color: {
      type: String,
      default: 'primary',
    },

    backgroundColor: {
      type: String,
      default: 'primary',
    },

    indeterminate: {
      type: Boolean,
      default: false,
    },

    rounded: {
      type: Boolean,
      default: false,
    },

    reverse: {
      type: Boolean,
      default: false,
    },

    value: {
      type: [Number, String],
      default: 0,
    },

    height: {
      type: [Number, String],
      default: 4,
    },

    ...composables.makeStyleProps(),
    ...composables.makeClassProps(),
  },

  data() {
    return {
      visible: true,
      intersectionObserver: null,
    };
  },

  mounted() {
    this.intersectionObserver = new IntersectionObserver((entries) => {
      this.visible = entries.some((entry) => entry.isIntersecting);
    });
    this.intersectionObserver.observe(this.$el);
  },

  destroyed() {
    this.intersectionObserver?.disconnect();
  },

  computed: {
    veeNormalizedValue(): number {
      return this.indeterminate
        ? 0
        : Math.min(100, Math.max(0, Number(this.value)));
    },

    veeColor(): string {
      return this.$crumbs.themesManager.getColorRef(this.color);
    },

    veeBackgroundColor(): string {
      return this.$crumbs.themesManager.getColorRef(this.backgroundColor);
    },

    veeStyle(): Record<string, any> {
      return this.style;
    },

    veeClass(): string {
      return classBuilder({
        'vee-progress-linear': true,
      });
    },

    veeBackgroundClass(): string {
      return classBuilder({
        'vee-progress-linear-background': true,
      });
    },

    veeContentClass(): string {
      return classBuilder({
        'vee-progress-linear-content': true,
        'vee-progress-linear-reverse': this.reverse,
        'vee-progress-linear-indeterminate': this.indeterminate && this.visible,
        'vee-progress-linear-indeterminate-paused':
          this.indeterminate && !this.visible,
      });
    },

    veeHeight(): string {
      return `${this.height}px`;
    },

    veeContentWidth(): string {
      return `${this.veeNormalizedValue}%`;
    },
  },
});
</script>

<style scoped>
.vee-progress-linear {
  background: transparent;
  overflow: hidden;
  position: relative;
  transition: 0.2s ease-in-out;
  height: v-bind(veeHeight) !important;
  width: 100%;
}

.vee-progress-linear-background {
  color: v-bind(veeBackgroundColor) !important;
  opacity: 0.3;
  bottom: 0;
  left: 0;
  position: absolute;
  top: 0;
  transition: inherit;
  width: 100%;
}

.vee-progress-linear-content {
  color: v-bind(veeColor) !important;
  height: inherit;
  position: absolute;
  left: 0;
  width: v-bind(veeContentWidth);
}

.vee-progress-linear-reverse {
  left: auto;
  right: 0;
}

.vee-progress-linear-indeterminate {
  animation: vee-progress-linear-indeterminate 2s linear infinite;
}

.vee-progress-linear-indeterminate-paused {
  animation-play-state: paused;
}
</style>
