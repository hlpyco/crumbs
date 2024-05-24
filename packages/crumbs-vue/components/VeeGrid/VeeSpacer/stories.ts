import type { Meta, StoryObj } from '@storybook/vue';

import VeeSpacer from './VeeSpacer.vue';
import { VeeRow } from '../VeeRow';
import { VeeCol } from '../VeeCol';

const meta: Meta<typeof VeeSpacer> = { component: VeeSpacer };
type Story = StoryObj<typeof VeeSpacer>;
export default meta;

const colStyle = 'background-color: lightgrey;';
const spacerStyle = 'background-color: green;';

export const Primary: Story = {
  render: (args, { argTypes }) => ({
    components: { VeeSpacer, VeeRow, VeeCol },
    props: Object.keys(argTypes),
    template: `
    <div>
      <vee-row v-bind="$props" v-on="$props">
        <vee-col style="${colStyle}">
          One of three columns, first row
        </vee-col>

        <vee-spacer style="${spacerStyle}"></vee-spacer>

        <vee-col style="${colStyle}">
          One of three columns, second row
        </vee-col>

        <vee-spacer style="${spacerStyle}"></vee-spacer>

        <vee-col style="${colStyle}">
          One of three columns, third row
        </vee-col>
      </vee-row>
    </div>
    `,
  }),
};
