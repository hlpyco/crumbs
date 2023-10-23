import type { Meta, StoryObj } from '@storybook/vue';

import VeeButton from './VeeButton.vue';

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
    primary: true,
    label: 'Button',
  },
};
