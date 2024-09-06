import type { Meta, StoryObj } from '@storybook/vue';

import VeeProgressCircular from './VeeProgressCircular.vue';
import { documentCode, documentRange } from '../../../misc/documentation';

const meta: Meta<typeof VeeProgressCircular> = { component: VeeProgressCircular };
type Story = StoryObj<typeof VeeProgressCircular>;
export default meta;

export const Primary: Story = {
  render: (args, { argTypes }) => ({
    components: { VeeProgressCircular },
    props: Object.keys(argTypes),
    template: '<vee-progress-circular v-bind="$props" v-on="$props" />',
  }),

  argTypes: {
    color: {
      control: { type: 'text' },
      description: `Sets the color of the progress indicator. Applies specified color to the control - it can be the name of theme color (for example ${documentCode('primary')}) or hex color.`,
    },

    size: {
      control: { type: 'text' },
      description: 'Sets the diameter of the circle in pixels.',
    },

    indeterminate: {
      control: { type: 'boolean' },
      description: 'Constantly animates, use when loading progress is unknown.',
    },

    value: {
      control: { type: 'string' },
      description: `The percentage value for current progress ${documentRange(0, 100)}.`,
    },

    width: {
      control: { type: 'string' },
      description: 'Sets the stroke width of the circle in pixels.',
    },
  },

  args: {
    color: 'primary',
    size: 32,
    indeterminate: false,
    value: 75,
    width: 4,
  },
};
