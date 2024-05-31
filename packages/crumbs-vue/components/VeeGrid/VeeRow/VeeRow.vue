<template>
  <div :class="veeClass" :style="veeStyle">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { PropType, defineComponent } from 'vue';
import composables from '../../../composables';
import { classBuilder } from 'crumbs-core/builders/class';
import { VeeRowAlign, VeeRowAlignContent, VeeRowJustify } from './vee-row';

function validateAlign(value: string): boolean {
  return Object.values(VeeRowAlign).includes(value as VeeRowAlign);
}

function validateAlignContent(value: string): boolean {
  return Object.values(VeeRowAlignContent).includes(
    value as VeeRowAlignContent,
  );
}

function validateJustify(value: string): boolean {
  return Object.values(VeeRowJustify).includes(value as VeeRowJustify);
}

export default defineComponent({
  name: 'VeeRow',

  props: {
    dense: {
      type: Boolean,
      default: false,
    },

    noGutters: {
      type: Boolean,
      default: false,
    },

    align: {
      type: String as PropType<VeeRowAlign>,
      default: null,
      validator: validateAlign,
    },

    alignLg: {
      type: String as PropType<VeeRowAlign>,
      default: null,
      validator: validateAlign,
    },

    alignMd: {
      type: String as PropType<VeeRowAlign>,
      default: null,
      validator: validateAlign,
    },

    alignSm: {
      type: String as PropType<VeeRowAlign>,
      default: null,
      validator: validateAlign,
    },

    alignXl: {
      type: String as PropType<VeeRowAlign>,
      default: null,
      validator: validateAlign,
    },

    alignXxl: {
      type: String as PropType<VeeRowAlign>,
      default: null,
      validator: validateAlign,
    },

    alignContent: {
      type: String as PropType<VeeRowAlignContent>,
      default: null,
      validator: validateAlignContent,
    },

    alignContentLg: {
      type: String as PropType<VeeRowAlignContent>,
      default: null,
      validator: validateAlignContent,
    },

    alignContentMd: {
      type: String as PropType<VeeRowAlignContent>,
      default: null,
      validator: validateAlignContent,
    },

    alignContentSm: {
      type: String as PropType<VeeRowAlignContent>,
      default: null,
      validator: validateAlignContent,
    },

    alignContentXl: {
      type: String as PropType<VeeRowAlignContent>,
      default: null,
      validator: validateAlignContent,
    },

    alignContentXxl: {
      type: String as PropType<VeeRowAlign>,
      default: null,
      validator: validateAlignContent,
    },

    justify: {
      type: String as PropType<VeeRowJustify>,
      default: null,
      validator: validateJustify,
    },

    justifyLg: {
      type: String as PropType<VeeRowJustify>,
      default: null,
      validator: validateJustify,
    },

    justifyMd: {
      type: String as PropType<VeeRowJustify>,
      default: null,
      validator: validateJustify,
    },

    justifySm: {
      type: String as PropType<VeeRowJustify>,
      default: null,
      validator: validateJustify,
    },

    justifyXl: {
      type: String as PropType<VeeRowJustify>,
      default: null,
      validator: validateJustify,
    },

    justifyXxl: {
      type: String as PropType<VeeRowJustify>,
      default: null,
      validator: validateJustify,
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
        'flex': true,
        'flex-row': true,
        'flex-wrap': true,
        'vee-row-default': !this.dense && !this.noGutters,
        'vee-row-dense': this.dense && !this.noGutters,
        'vee-row-no-gutters': !this.dense && this.noGutters,
        [`vee-row-align-${this.align?.valueOf()}`]: !!this.align,
        [`lg:vee-row-align-${this.alignLg?.valueOf()}`]: !!this.alignLg,
        [`md:vee-row-align-${this.alignMd?.valueOf()}`]: !!this.alignMd,
        [`sm:vee-row-align-${this.alignSm?.valueOf()}`]: !!this.alignSm,
        [`xl:vee-row-align-${this.alignXl?.valueOf()}`]: !!this.alignXl,
        [`xxl:vee-row-align-${this.alignXxl?.valueOf()}`]: !!this.alignXxl,
        [`vee-row-align-content-${this.alignContent?.valueOf()}`]:
          !!this.alignContent,
        [`lg:vee-row-align-content-${this.alignContentLg?.valueOf()}`]:
          !!this.alignContentLg,
        [`md:vee-row-align-content-${this.alignContentMd?.valueOf()}`]:
          !!this.alignContentMd,
        [`sm:vee-row-align-content-${this.alignContentSm?.valueOf()}`]:
          !!this.alignContentSm,
        [`xl:vee-row-align-content-${this.alignContentXl?.valueOf()}`]:
          !!this.alignContentXl,
        [`xxl:vee-row-align-content-${this.alignContentXxl?.valueOf()}`]:
          !!this.alignContentXxl,
        [`vee-row-justify-${this.justify?.valueOf()}`]: !!this.justify,
        [`lg:vee-row-justify-${this.justifyLg?.valueOf()}`]: !!this.justifyLg,
        [`md:vee-row-justify-${this.justifyMd?.valueOf()}`]: !!this.justifyMd,
        [`sm:vee-row-justify-${this.justifySm?.valueOf()}`]: !!this.justifySm,
        [`xl:vee-row-justify-${this.justifyXl?.valueOf()}`]: !!this.justifyXl,
        [`xxl:vee-row-justify-${this.justifyXxl?.valueOf()}`]:
          !!this.justifyXxl,
        [this.classes]: !!this.classes,
      });
    },
  },
});
</script>

<style scoped>
.vee-row-default {
  padding: 1.5rem;
}

.vee-row-dense {
  padding: 1rem;
}

.vee-row-no-gutters {
  padding: 0;
}

.vee-row-align-start {
  align-items: start;
}

.vee-row-align-center {
  align-items: center;
}

.vee-row-align-end {
  align-items: end;
}

.vee-row-align-baseline {
  align-items: baseline;
}

.vee-row-align-stretch {
  align-items: stretch;
}

.vee-row-align-content-start {
  align-content: flex-start;
}

.vee-row-align-content-center {
  align-content: center;
}

.vee-row-align-content-end {
  align-content: flex-end;
}

.vee-row-align-content-stretch {
  align-content: stretch;
}

.vee-row-align-content-space-between {
  align-content: space-between;
}

.vee-row-align-content-space-around {
  align-content: space-around;
}

.vee-row-align-content-space-evenly {
  align-content: space-evenly;
}

.vee-row-justify-start {
  justify-content: flex-start !important;
}

.vee-row-justify-center {
  justify-content: center !important;
}

.vee-row-justify-end {
  justify-content: flex-end !important;
}

.vee-row-justify-space-between {
  justify-content: space-between !important;
}

.vee-row-justify-space-around {
  justify-content: space-around !important;
}
</style>
