<template>
  <div
    :class="veeClass"
    :style="veeStyle"
    role="progressbar"
    aria-valuemin="0"
    aria-valuemax="100"
    :aria-valuenow="indeterminate ? undefined : veeNormalizedValue"
  >
    <svg
      :style="veeSvgStyle"
      xmlns="http://www.w3.org/2000/svg"
      :viewBox="`${veeViewBoxSize} ${veeViewBoxSize} ${2 * veeViewBoxSize} ${
        2 * veeViewBoxSize
      }`"
    >
      <circle
        v-if="!indeterminate"
        class="vee-progress-circular-underlay"
        fill="transparent"
        :cx="veeViewBoxSize * 2"
        :cy="veeViewBoxSize * 2"
        :r="radius"
        :stroke-width="veeStrokeWidth"
        :stroke-dasharray="veeCircumference"
        stroke-dashoffset="0"
      />

      <circle
        :class="veeCircleClass"
        fill="transparent"
        :cx="veeViewBoxSize * 2"
        :cy="veeViewBoxSize * 2"
        :r="radius"
        :stroke-width="veeStrokeWidth"
        :stroke-dasharray="veeCircumference"
        :stroke-dashoffset="veeStrokeDashOffset"
      />
    </svg>

    <div
      v-if="!this.indeterminate"
      class="vee-progress-circular-slot"
    >
      <slot :value="value"></slot>
    </div>
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

    size: {
      type: [Number, String],
      default: 32,
    },

    indeterminate: {
      type: Boolean,
      default: false,
    },

    value: {
      type: [Number, String],
      default: 0,
    },

    width: {
      type: [Number, String],
      default: 4,
    },

    ...composables.makeStyleProps(),
    ...composables.makeClassProps(),
  },

  data() {
    return {
      radius: 20,
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
    veeCalculatedSize(): number {
      return Number(this.size);
    },

    veeCircumference(): number {
      return this.radius * 2 * Math.PI;
    },

    veeNormalizedValue(): number {
      return this.indeterminate
        ? 0
        : Math.min(100, Math.max(0, Number(this.value)));
    },

    veeStrokeWidth(): number {
      return (Number(this.width) / +this.size) * this.veeViewBoxSize * 2;
    },

    veeStrokeDashOffset(): number {
      return ((100 - this.veeNormalizedValue) / 100) * this.veeCircumference;
    },

    veeColor(): string {
      return this.$crumbs.themesManager.getColorRef(this.color);
    },

    veeColorUnderlay(): string {
      return this.$crumbs.themesManager.getColorRef('greyLighten3');
    },

    veeViewBoxSize(): number {
      return this.radius / (1 - Number(this.width) / +this.size);
    },

    veeStyle(): Record<string, any> {
      return {
        width: `${this.veeCalculatedSize}px`,
        height: `${this.veeCalculatedSize}px`,
        ...this.style,
      };
    },

    veeSvgStyle(): Record<string, any> {
      return {
        transform: `rotate(${Number(ROTATE)}deg)`,
      };
    },

    veeClass(): string {
      return classBuilder({
        'vee-progress-circular': true,
        'vee-progress-circular-indeterminate':
          this.indeterminate && this.visible,
        'vee-progress-circular-indeterminate-paused':
          this.indeterminate && !this.visible,
      });
    },

    veeCircleClass(): string {
      return classBuilder({
        'vee-progress-circular-overlay': true,
        'vee-progress-circular-overlay-indeterminate': this.indeterminate,
      });
    },
  },
});
</script>

<style scoped>
.vee-progress-circular {
  display: inline-block;
  position: relative;
  vertical-align: middle;
  justify-content: center;
  align-items: center;
}

.vee-progress-circular svg {
  width: 100%;
  height: 100%;
  margin: auto;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 0;
}

.vee-progress-circular-indeterminate svg {
  animation: vee-progress-circular-rotate 1.4s linear infinite;
  transform-origin: center center;
  transition: all 0.2s ease-in-out;
}

.vee-progress-circular-indeterminate-paused {
  animation-play-state: paused !important;
}

.vee-progress-circular-content {
  align-items: center;
  display: flex;
  justify-content: center;
}

.vee-progress-circular-underlay {
  color: v-bind('veeColorUnderlay');
  stroke: currentColor;
  z-index: 1;
}

.vee-progress-circular-overlay {
  color: v-bind('veeColor');
  stroke: currentColor;
  transition: all 0.6s ease-in-out;
  z-index: 2;
}

.vee-progress-circular-overlay-indeterminate {
  animation: vee-progress-circular-dash 1.4s linear infinite;
  stroke-linecap: round;
  stroke-dasharray: 80, 200;
  stroke-dashoffset: 0px;
}

.vee-progress-circular-slot {
  align-items: center;
  display: flex;
  justify-content: center;
  height: 100%;
}

@keyframes vee-progress-circular-dash {
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0px;
  }

  50% {
    stroke-dasharray: 100, 200;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100, 200;
    stroke-dashoffset: -124px;
  }
}

@keyframes vee-progress-circular-rotate {
  100% {
    transform: rotate(360deg);
  }
}
</style>
