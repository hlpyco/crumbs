import type { Meta, StoryObj } from '@storybook/vue';

import VeeButton from './VeeButton.vue';
import { VeeButtonSize, VeeButtonVariant } from './vee-button';

const meta: Meta<typeof VeeButton> = { component: VeeButton };
type Story = StoryObj<typeof VeeButton>;
export default meta;

export const Primary: Story = {
  render: (args, { argTypes }) => ({
    components: { VeeButton },
    props: Object.keys(argTypes),
    template: '<vee-button v-bind="$props" v-on="$props" />',
  }),

  args: {
    color: 'primary',
    text: 'Button',
    size: 'default',
    variant: 'default',
  },

  argTypes: {
    variant: {
      options: Object.values(VeeButtonVariant),
      control: { type: 'select' },
    },

    size: {
      options: Object.values(VeeButtonSize),
      control: { type: 'select' },
    },
  }
};
