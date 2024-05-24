import type { Meta, StoryObj } from '@storybook/vue';

import { VeeRowAlign, VeeRowAlignContent, VeeRowJustify } from './vee-row';
import VeeRow from './VeeRow.vue';
import { VeeCol } from '../VeeCol';
import { document } from '../../../misc/documentation';

const meta: Meta<typeof VeeRow> = {
  component: VeeRow,

  argTypes: {
    dense: {
      control: { type: 'boolean' },
      description: 'Reduces the gutter between `vee-col`s.',
    },

    noGutters: {
      control: { type: 'boolean' },
      description: 'Removes the gutter between `vee-col`s.',
    },

    align: {
      options: Object.values(VeeRowAlign),
      control: { type: 'select' },
      description: `Applies the items css property. Available options are: ${document(VeeRowAlign)}.`,
    },

    alignLg: {
      options: Object.values(VeeRowAlign),
      control: { type: 'select' },
      description: `Changes the items property on large and greater breakpoints.`,
    },

    alignMd: {
      options: Object.values(VeeRowAlign),
      control: { type: 'select' },
      description: `Changes the items property on medium and greater breakpoints.`,
    },

    alignSm: {
      options: Object.values(VeeRowAlign),
      control: { type: 'select' },
      description: `Changes the items property on small and greater breakpoints.`,
    },

    alignXl: {
      options: Object.values(VeeRowAlign),
      control: { type: 'select' },
      description: `Changes the items property on extra large and greater breakpoints.`,
    },

    alignXxl: {
      options: Object.values(VeeRowAlign),
      control: { type: 'select' },
      description: `Changes the items property on extra extra large and greater breakpoints.`,
    },

    alignContent: {
      options: Object.values(VeeRowAlignContent),
      control: { type: 'select' },
      description: `Applies the content css property. Available options are: ${document(VeeRowAlignContent)}.`,
    },

    alignContentLg: {
      options: Object.values(VeeRowAlignContent),
      control: { type: 'select' },
      description: `Changes the content property on large and greater breakpoints.`,
    },

    alignContentMd: {
      options: Object.values(VeeRowAlignContent),
      control: { type: 'select' },
      description: `Changes the content property on medium and greater breakpoints.`,
    },

    alignContentSm: {
      options: Object.values(VeeRowAlignContent),
      control: { type: 'select' },
      description: `Changes the content property on small and greater breakpoints.`,
    },

    alignContentXl: {
      options: Object.values(VeeRowAlignContent),
      control: { type: 'select' },
      description: `Changes the content property on extra large and greater breakpoints.`,
    },

    alignContentXxl: {
      options: Object.values(VeeRowAlignContent),
      control: { type: 'select' },
      description: `Changes the content property on extra extra large and greater breakpoints.`,
    },

    justify: {
      options: Object.values(VeeRowJustify),
      control: { type: 'select' },
      description: `Applies the justify-content css property. Available options are: ${document(VeeRowJustify)}.`,
    },

    justifyLg: {
      options: Object.values(VeeRowJustify),
      control: { type: 'select' },
      description: `Changes the justify-content property on large and greater breakpoints.`,
    },

    justifyMd: {
      options: Object.values(VeeRowJustify),
      control: { type: 'select' },
      description: `Changes the justify-content property on medium and greater breakpoints.`,
    },

    justifySm: {
      options: Object.values(VeeRowJustify),
      control: { type: 'select' },
      description: `Changes the justify-content property on small and greater breakpoints.`,
    },

    justifyXl: {
      options: Object.values(VeeRowJustify),
      control: { type: 'select' },
      description: `Changes the justify-content property on extra large and greater breakpoints.`,
    },

    justifyXxl: {
      options: Object.values(VeeRowJustify),
      control: { type: 'select' },
      description: `Changes the justify-content property on extra extra large and greater breakpoints.`,
    },
  }
};
type Story = StoryObj<typeof VeeRow>;
export default meta;

export const Rows: Story = {
  render: (args, { argTypes }) => ({
    components: { VeeRow, VeeCol },
    props: Object.keys(argTypes),
    template: `
    <div>
      <vee-row v-bind="$props" v-on="$props">
        <vee-col
          v-for="n in 3"
          :key="n"
          cols="4"
        >
          One of three columns, first row
        </vee-col>
      </vee-row>

      <vee-row v-bind="$props" v-on="$props">
        <vee-col
          v-for="n in 3"
          :key="n"
          cols="4"
        >
          One of three columns, second row
        </vee-col>
      </vee-row>
    </div>
    `,
  }),
};
