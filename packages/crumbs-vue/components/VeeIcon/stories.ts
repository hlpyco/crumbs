import type { Meta, StoryObj } from '@storybook/vue';

import VeeIcon from './VeeIcon.vue';

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
    icon: 'example',
  },
};
