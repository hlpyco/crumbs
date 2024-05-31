import type { Meta, StoryObj } from '@storybook/vue';

import { VeeRow } from '../VeeRow';
import { VeeCol, VeeColAlignSelf } from '.';
import { document, documentRange } from '../../../misc/documentation';

const meta: Meta<typeof VeeCol> = { 
  component: VeeCol,

  argTypes: {
    alignSelf: {
      options: Object.values(VeeColAlignSelf),
      control: { type: 'select' },
      description: `Applies the align-self css property. Available options are: ${document(VeeColAlignSelf)}.`,
    },

    cols: {
      control: { type: 'text' },
      description: `Sets the default number of columns the component extends. Available options are: ${document([documentRange(1, 12), 'auto'])}.`,
    },

    lg: {
      control: { type: 'text' },
      description: 'Changes the number of columns on large and greater breakpoints.',
    },

    md: {
      control: { type: 'text' },
      description: 'Changes the number of columns on medium and greater breakpoints.',
    },

    sm: {
      control: { type: 'text' },
      description: 'Changes the number of columns on small and greater breakpoints.',
    },

    xl: {
      control: { type: 'text' },
      description: 'Changes the number of columns on extra large and greater breakpoints.',
    },

    xxl: {
      control: { type: 'text' },
      description: 'Changes the number of columns on extra extra large and greater breakpoints.',
    },

    offset: {
      control: { type: 'number' },
      description: `Offsets the component by the specified number of columns. Available options are: ${document([documentRange(1, 12)])}.`,
    },

    offsetLg: {
      control: { type: 'number' },
      description: 'Offsets the component on large and greater breakpoints.',
    },

    offsetMd: {
      control: { type: 'number' },
      description: 'Offsets the component on medium and greater breakpoints.',
    },

    offsetSm: {
      control: { type: 'number' },
      description: 'Offsets the component on small and greater breakpoints.',
    },

    offsetXl: {
      control: { type: 'number' },
      description: 'Offsets the component on extra large and greater breakpoints.',
    },

    offsetXxl: {
      control: { type: 'number' },
      description: 'Offsets the component on extra extra large and greater breakpoints.',
    },

    order: {
      control: { type: 'number' },
      description: `Changes the order of the component. Available options are: ${document([documentRange(1, 12)])}.`,
    },

    orderLg: {
      control: { type: 'number' },
      description: 'Changes the order of the component on large and greater breakpoints.',
    },

    orderMd: {
      control: { type: 'number' },
      description: 'Changes the order of the component on medium and greater breakpoints.',
    },

    orderSm: {
      control: { type: 'number' },
      description: 'Changes the order of the component on small and greater breakpoints.',
    },

    orderXl: {
      control: { type: 'number' },
      description: 'Changes the order of the component on extra large and greater breakpoints.',
    },

    orderXxl: {
      control: { type: 'number' },
      description: 'Changes the order of the component on extra extra large and greater breakpoints.',
    },
  },
};
type Story = StoryObj<typeof VeeRow>;
export default meta;

export const Columns: Story = {
  render: (args, { argTypes }) => ({
    components: { VeeRow, VeeCol },
    props: Object.keys(argTypes),
    template: `
    <vee-row>
      <vee-col
        v-for="n in 3"
        :key="n"
        v-bind="$props" 
        v-on="$props"
      >
        One of three columns
      </vee-col>
    </vee-row>
    `,
  }),
};
