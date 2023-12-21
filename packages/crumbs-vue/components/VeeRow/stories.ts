import type { Meta, StoryObj } from '@storybook/vue';

import VeeRow from './VeeRow.vue';
import { VeeRowAlign, VeeRowAlignContent, VeeRowJustify } from './vee-row';

const meta: Meta<typeof VeeRow> = { component: VeeRow };
type Story = StoryObj<typeof VeeRow>;
export default meta;

export const Primary: Story = {
  render: (args, { argTypes }) => ({
    components: { VeeRow },
    props: Object.keys(argTypes),
    template: `
    <vee-row v-bind="$props" v-on="$props">
      <v-col
        v-for="n in 3"
        :key="n"
        cols="12"
        sm="4"
      >
        One of three columns
      </v-col>
    </vee-row>
    `,
  }),

  argTypes: {
    align: {
      options: Object.values(VeeRowAlign),
      control: { type: 'select' },
    },

    alignContent: {
      options: Object.values(VeeRowAlignContent),
      control: { type: 'select' },
    },

    justify: {
      options: Object.values(VeeRowJustify),
      control: { type: 'select' },
    },
  }
};
