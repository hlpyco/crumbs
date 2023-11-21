import type { Meta, StoryObj } from '@storybook/vue';

import VeeIcon from './VeeIcon.vue';
import { VeeIconSize } from './vee-icon';

const meta: Meta<typeof VeeIcon> = { component: VeeIcon };
type Story = StoryObj<typeof VeeIcon>;
export default meta;

export const Primary: Story = {
  render: (args, { argTypes }) => ({
    components: { VeeIcon },
    props: Object.keys(argTypes),
    template: '<vee-icon v-bind="$props" v-on="$props" />',
  }),

  args: {
    name: 'user',
  },

  argTypes: {
    size: {
      options: Object.values(VeeIconSize),
      control: { type: 'select' },
    },
  }
};
