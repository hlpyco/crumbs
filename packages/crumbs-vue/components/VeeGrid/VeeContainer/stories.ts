import type { Meta, StoryObj } from '@storybook/vue';

import VeeContainer from './VeeContainer.vue';

const meta: Meta<typeof VeeContainer> = {
  component: VeeContainer,

  argTypes: {
    fluid: {
      control: { type: 'boolean' },
      description: 'Removes viewport maximum-width size breakpoints.',
    },
  },
};
type Story = StoryObj<typeof VeeContainer>;
export default meta;

export const Container: Story = {
  render: (args, { argTypes }) => ({
    components: { VeeContainer },
    props: Object.keys(argTypes),
    template: `
    <vee-container v-bind="$props" v-on="$props" style="background-color: lightgrey">
      This is a VeeContainer
    </vee-container>
    `,
  }),
};
