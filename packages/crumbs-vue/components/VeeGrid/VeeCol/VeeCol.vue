<template>
  <div :class="veeClass" :style="veeStyle">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { PropType, defineComponent } from 'vue';
import composables from '../../../composables';
import { classBuilder } from 'crumbs-core/builders/class';
import { VeeColAlignSelf } from './vee-col';

const COLS_AUTO = 'auto';
const BASIS_FULL = 'full';

function validateCols(value: any): boolean {
  try {
    const number = Number(value);
    return number >= 1 && number <= 12;
  } catch (_) {
    return value === COLS_AUTO;
  }
}

function validateOrder(value: any): boolean {
  return Number(value) >= 1 && Number(value) <= 12;
}

function validateOffset(value: any): boolean {
  return Number(value) >= 0 && Number(value) <= 12;
}

export default defineComponent({
  name: 'VeeCol',

  props: {
    alignSelf: {
      type: String as PropType<VeeColAlignSelf>,
      default: null,
      validator: (value: string): boolean => {
        return Object.values(VeeColAlignSelf).includes(
          value as VeeColAlignSelf,
        );
      },
    },

    cols: {
      type: [Number, String],
      default: null,
      validator: validateCols,
    },

    sm: {
      type: [Number, String],
      default: null,
      validator: validateCols,
    },

    md: {
      type: [Number, String],
      default: null,
      validator: validateCols,
    },

    lg: {
      type: [Number, String],
      default: null,
      validator: validateCols,
    },

    xl: {
      type: [Number, String],
      default: null,
      validator: validateCols,
    },

    xxl: {
      type: [Number, String],
      default: null,
      validator: validateCols,
    },

    offset: {
      type: [Number, String],
      default: null,
      validator: validateOffset,
    },

    offsetLg: {
      type: [Number, String],
      default: null,
      validator: validateOffset,
    },

    offsetMd: {
      type: [Number, String],
      default: null,
      validator: validateOffset,
    },

    offsetSm: {
      type: [Number, String],
      default: null,
      validator: validateOffset,
    },

    offsetXl: {
      type: [Number, String],
      default: null,
      validator: validateOffset,
    },

    offsetXxl: {
      type: [Number, String],
      default: null,
      validator: validateOffset,
    },

    order: {
      type: [Number, String],
      default: null,
      validator: validateOrder,
    },

    orderLg: {
      type: [Number, String],
      default: null,
      validator: validateOrder,
    },

    orderMd: {
      type: [Number, String],
      default: null,
      validator: validateOrder,
    },

    orderSm: {
      type: [Number, String],
      default: null,
      validator: validateOrder,
    },

    orderXl: {
      type: [Number, String],
      default: null,
      validator: validateOrder,
    },

    orderXxl: {
      type: [Number, String],
      default: null,
      validator: validateOrder,
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
      const cssCols = this.cols === COLS_AUTO ? BASIS_FULL : `${this.cols}/12`;
      const cssSm = this.sm === COLS_AUTO ? BASIS_FULL : `${this.sm}/12`;
      const cssMd = this.md === COLS_AUTO ? BASIS_FULL : `${this.md}/12`;
      const cssLg = this.lg === COLS_AUTO ? BASIS_FULL : `${this.lg}/12`;
      const cssXl = this.xl === COLS_AUTO ? BASIS_FULL : `${this.xl}/12`;
      const cssXxl = this.xxl === COLS_AUTO ? BASIS_FULL : `${this.xxl}/12`;

      return classBuilder({
        'vee-col-auto': !this.cols,
        'flex-grow-0': true,
        'flex-shrink-0': true,
        [`vee-col-align-self-${this.alignSelf?.valueOf()}`]: !!this.alignSelf,
        [`basis-${cssCols}`]: !!this.cols,
        [`sm:basis-${cssSm}`]: !!this.sm,
        [`md:basis-${cssMd}`]: !!this.md,
        [`lg:basis-${cssLg}`]: !!this.lg,
        [`xl:basis-${cssXl}`]: !!this.xl,
        [`xxl:basis-${cssXxl}`]: !!this.xxl,
        [`order-${this.order}`]: !!this.order,
        [`sm:order-${this.orderSm}`]: !!this.orderSm,
        [`md:order-${this.orderMd}`]: !!this.orderMd,
        [`lg:order-${this.orderLg}`]: !!this.orderLg,
        [`xl:order-${this.orderXl}`]: !!this.orderXl,
        [`xxl:order-${this.orderXxl}`]: !!this.orderXxl,
        [`vee-offset-${this.offset}`]: !!this.offset,
        [`sm:vee-offset-${this.offsetSm}`]: !!this.offsetSm,
        [`md:vee-offset-${this.offsetMd}`]: !!this.offsetMd,
        [`lg:vee-offset-${this.offsetLg}`]: !!this.offsetLg,
        [`xl:vee-offset-${this.offsetXl}`]: !!this.offsetXl,
        [`xxl:vee-offset-${this.offsetXxl}`]: !!this.offsetXxl,
        [this.classes]: !!this.classes,
      });
    },
  },
});
</script>

<style scoped>
.vee-col-auto {
  flex-grow: 1;
}

.vee-col-align-self-auto {
  align-self: auto;
}

.vee-col-align-self-start {
  align-self: start;
}

.vee-col-align-self-center {
  align-self: center;
} 

.vee-col-align-self-end {
  align-self: end;
}

.vee-col-align-self-baseline {
  align-self: baseline;
} 

.vee-col-align-self-stretch {
  align-self: stretch;
}

.vee-offset-1 {
  margin-inline-start: 8.333333%;
}

.vee-offset-2 {
  margin-inline-start: 16.666667% !important;
}

.vee-offset-3 {
  margin-inline-start: 25% !important;
}

.vee-offset-4 {
  margin-inline-start: 33.333333% !important;
}

.vee-offset-5 {
  margin-inline-start: 41.666667% !important;
}

.vee-offset-6 {
  margin-inline-start: 50% !important;
}

.vee-offset-7 {
  margin-inline-start: 58.333333% !important;
}

.vee-offset-8 {
  margin-inline-start: 66.666667% !important;
}

.vee-offset-9 {
  margin-inline-start: 75% !important;
}

.vee-offset-10 {
  margin-inline-start: 83.333333% !important;
}

.vee-offset-11 {
  margin-inline-start: 91.666667% !important;
}

.vee-offset-12 {
  margin-inline-start: 100% !important;
}
</style>
