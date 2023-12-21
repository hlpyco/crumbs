import type { Meta, StoryObj } from '@storybook/vue';

import VeeCol from './VeeCol.vue';
import { VeeColAlignSelf } from './vee-col';

const meta: Meta<typeof VeeCol> = { component: VeeCol };
type Story = StoryObj<typeof VeeCol>;
export default meta;

export const Primary: Story = {
  render: (args, { argTypes }) => ({
    components: { VeeCol },
    props: Object.keys(argTypes),
    template: `
    <vee-col v-bind="$props" v-on="$props">
      Content of the column
    </vee-col>
    `,
  }),

  argTypes: {
    alignSelf: {
      options: Object.values(VeeColAlignSelf),
      control: { type: 'select' },
    },
  }
};
