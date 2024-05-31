import type { Meta, StoryObj } from '@storybook/vue';

import { VeeRow } from './VeeRow';
import { VeeCol } from './VeeCol';
import { VeeContainer } from './VeeContainer';
import { VeeSpacer } from './VeeSpacer';

const meta: Meta<typeof Object> = {
  component: Object,
};
type Story = StoryObj;
export default meta;

const containerStyle = 'background-color: lightgrey;';
const rowStyle = 'height: 120px;';
const childStyle = 'background-color: grey; margin: 8px; padding: 8px;';
const nestedRowStyle = 'background-color: red;';

export const AlignStart: Story = {
  render: () => ({
    components: { VeeRow, VeeCol, VeeContainer },
    template: `
    <vee-container style="${containerStyle}">
      <vee-row align="start" no-gutters style="${rowStyle}">
        <vee-col v-for="n in 3" :key="n">
          <div style="${childStyle}">align start</div>
        </vee-col>
      </vee-row>
    </vee-container>
    `,
  }),
};

export const AlignCenter: Story = {
  render: () => ({
    components: { VeeRow, VeeCol, VeeContainer },
    template: `
    <vee-container style="${containerStyle}">
      <vee-row align="center" no-gutters style="${rowStyle}">
        <vee-col v-for="n in 3" :key="n">
          <div style="${childStyle}">align center</div>
        </vee-col>
      </vee-row>
    </vee-container>
    `,
  }),
};

export const AlignEnd: Story = {
  render: () => ({
    components: { VeeRow, VeeCol, VeeContainer },
    template: `
    <vee-container style="${containerStyle}">
      <vee-row align="end" no-gutters style="${rowStyle}">
        <vee-col v-for="n in 3" :key="n">
          <div style="${childStyle}">align end</div>
        </vee-col>
      </vee-row>
    </vee-container>
    `,
  }),
};

export const AlignSelf: Story = {
  render: () => ({
    components: { VeeRow, VeeCol, VeeContainer },
    template: `
    <vee-container style="${containerStyle}">
      <vee-row no-gutters style="${rowStyle}">
        <vee-col align-self="start" cols="4">
          <div style="${childStyle}">align self start</div>
        </vee-col>
        <vee-col align-self="center" cols="4">
          <div style="${childStyle}">align self center</div>
        </vee-col>
        <vee-col align-self="end" cols="4">
          <div style="${childStyle}">align self end</div>
        </vee-col>
      </vee-row>
    </vee-container>
    `,
  }),
};

export const Justify: Story = {
  render: () => ({
    components: { VeeRow, VeeCol, VeeContainer },
    template: `
    <vee-container style="${containerStyle}">
      <vee-row justify="start">
        <vee-col
          v-for="k in 2"
          :key="k"
          cols="4"
         
        >
          <div style="${childStyle}">
            justify start
          </div>
        </vee-col>
      </vee-row>

      <vee-row justify="center">
        <vee-col
          v-for="k in 2"
          :key="k"
          cols="4"
         
        >
          <div style="${childStyle}">
            justify center
          </div>
        </vee-col>
      </vee-row>

      <vee-row justify="end">
        <vee-col
          v-for="k in 2"
          :key="k"
          cols="4"
         
        >
          <div style="${childStyle}">
            justify end
          </div>
        </vee-col>
      </vee-row>

      <vee-row justify="space-around">
        <vee-col
          v-for="k in 2"
          :key="k"
          cols="4"
         
        >
          <div style="${childStyle}">
            justify space-around
          </div>
        </vee-col>
      </vee-row>

      <vee-row justify="space-between">
        <vee-col
          v-for="k in 2"
          :key="k"
          cols="4"
         
        >
          <div style="${childStyle}">
            justify space-between
          </div>
        </vee-col>
      </vee-row>
    </vee-container>
    `,
  }),
};

export const Offset: Story = {
  render: () => ({
    components: { VeeRow, VeeCol, VeeContainer },
    template: `
    <vee-container style="${containerStyle}">
      <vee-row no-gutters style="${rowStyle}">
        <vee-col cols="4">
          <div style="${childStyle}">cols-4</div>
        </vee-col>

        <vee-col cols="4" offset="4">
          <div style="${childStyle}">cols-4 offset-4</div>
        </vee-col>
      </vee-row>

      <vee-row no-gutters style="${rowStyle}">
        <vee-col cols="3" offset="3">
          <div style="${childStyle}">cols-3 offset-3</div>
        </vee-col>

        <vee-col cols="3" offset="3">
          <div style="${childStyle}">cols-3 offset-3</div>
        </vee-col>
      </vee-row>

      <vee-row no-gutters style="${rowStyle}">
        <vee-col cols="6" offset="3">
          <div style="${childStyle}">cols-6 offset-3</div>
        </vee-col>
      </vee-row>
    </vee-container>
    `,
  }),
};

export const Order: Story = {
  render: () => ({
    components: { VeeRow, VeeCol, VeeContainer },
    template: `
    <vee-container style="${containerStyle}">
      <vee-row no-gutters style="${rowStyle}">
        <vee-col order="6">
          <div style="${childStyle}">First in markup, but middle in row</div>
        </vee-col>

        <vee-col order="12">
          <div style="${childStyle}">Second in markup, but last in row</div>
        </vee-col>

        <vee-col order="1">
          <div style="${childStyle}">Third in markup, but first in row</div>
        </vee-col>
      </vee-row>
    </vee-container>
    `,
  }),
};

export const OrderFirstAndLast: Story = {
  render: () => ({
    components: { VeeRow, VeeCol, VeeContainer },
    template: `
    <vee-container style="${containerStyle}">
      <vee-row no-gutters style="${rowStyle}">
        <vee-col order="last">
          <div style="${childStyle}">First, but last</div>
        </vee-col>

        <vee-col>
          <div style="${childStyle}">Second, but unordered</div>
        </vee-col>

        <vee-col order="first">
          <div style="${childStyle}">Third, but first</div>
        </vee-col>
      </vee-row>
    </vee-container>
    `,
  }),
};

export const NestedGris: Story = {
  render: () => ({
    components: { VeeRow, VeeCol, VeeContainer },
    template: `
    <vee-container style="${containerStyle}">
      <vee-row no-gutters>
        <vee-col cols="8">
          <div style="${childStyle}">Level 1: vee-col-8</div>

          <vee-row no-gutters style="${nestedRowStyle}">
            <vee-col cols="8">
              <div style="${childStyle}">Level 2: vee-col-8</div>
            </vee-col>

            <vee-col cols="4">
              <div style="${childStyle}">Level 3: vee-col-4</div>
            </vee-col>
          </vee-row>
        </vee-col>

        <vee-col cols="4">
          <div style="${childStyle}">Level 1: vee-col-4</div>
        </vee-col>
      </vee-row>
    </vee-container>
    `,
  }),
};

export const Spacers: Story = {
  render: () => ({
    components: { VeeRow, VeeCol, VeeContainer, VeeSpacer },
    template: `
    <vee-container style="${containerStyle}">
      <vee-row no-gutters>
        <vee-col>
          <div style="${childStyle}">vee col auto</div>
        </vee-col>

        <vee-spacer></vee-spacer>

        <vee-col>
          <div style="${childStyle}">vee col auto</div>
        </vee-col>
      </vee-row>

      <vee-row no-gutters>
        <vee-col>
          <div style="${childStyle}">vee col auto</div>
        </vee-col>

        <vee-spacer></vee-spacer>

        <vee-col>
          <div style="${childStyle}">vee col auto</div>
        </vee-col>

        <vee-spacer></vee-spacer>

        <vee-col>
          <div style="${childStyle}">vee col auto</div>
        </vee-col>
      </vee-row>
    </vee-container>
    `,
  }),
};
