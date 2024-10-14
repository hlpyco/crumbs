import type { Meta, StoryObj } from '@storybook/vue';

import VeeProgressLinear from './VeeProgressLinear.vue';
import { documentCode, documentRange } from '../../../misc/documentation';

const meta: Meta<typeof VeeProgressLinear> = { component: VeeProgressLinear };
type Story = StoryObj<typeof VeeProgressLinear>;
export default meta;

export const Primary: Story = {
  render: (args, { argTypes }) => ({
    components: { VeeProgressLinear },
    props: Object.keys(argTypes),
    template: '<vee-progress-linear v-bind="$props" v-on="$props" />',
  }),

  argTypes: {
    color: {
      control: { type: 'color' },
      description: `Sets the color of the progress indicator. Applies specified color to the control - it can be the name of theme color (for example ${documentCode('primary')}) or hex color.`,
    },

    backgroundColor: {
      control: { type: 'color' },
      description: `Sets the background color of the progress indicator. Applies specified color to the control - it can be the name of theme color (for example ${documentCode('primary')}) or hex color.`,
    },

    height: {
      control: { type: 'text' },
      description: 'Sets the height for the component.',
    },

    indeterminate: {
      control: { type: 'boolean' },
      description: 'Constantly animates, use when loading progress is unknown.',
    },

    rounded: {
      control: { type: 'boolean' },
      description: 'Rounds the corners of the progress indicator.',
    },

    reverse: {
      control: { type: 'boolean' },
      description: 'Reverses the direction of the progress indicator.',
    },

    value: {
      control: { type: 'text' },
      description: `The percentage value for current progress ${documentRange(0, 100)}.`,
    },
  },

  args: {
    color: 'primary',
    backgroundColor: 'primary',
    indeterminate: false,
    rounded: false,
    reverse: false,
    value: '15',
    height: '4',
  },
};
