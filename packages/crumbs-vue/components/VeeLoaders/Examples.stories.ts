import type { Meta, StoryObj } from '@storybook/vue';

import { VeeProgressCircular } from './VeeProgressCircular';

const meta: Meta<typeof Object> = {
  component: Object,
};
type Story = StoryObj;
export default meta;

export const ProgressCircularColor: Story = {
  render: () => ({
    components: { VeeProgressCircular },
    template: `
    <div>
      <vee-progress-circular color="primary" value="20" />
      <vee-progress-circular color="error" value="40" />
      <vee-progress-circular color="black" value="60" />
      <vee-progress-circular color="#808232" value="80" />
      <vee-progress-circular color="#942312" value="100" />
    </div>
    `,
  }),
};

export const ProgressCircularIndeterminate: Story = {
  render: () => ({
    components: { VeeProgressCircular },
    template: `
    <div>
      <vee-progress-circular color="primary" indeterminate />
      <vee-progress-circular color="error" indeterminate />
      <vee-progress-circular color="black" indeterminate />
    </div>
    `,
  }),
};

export const ProgressCircularSlot: Story = {
  render: () => ({
    components: { VeeProgressCircular },
    template: `
    <div>
      <vee-progress-circular rotate="0" color="primary" indeterminate />
      <vee-progress-circular rotate="45" color="error" indeterminate />
      <vee-progress-circular rotate="90" color="black" indeterminate />
      <vee-progress-circular rotate="135" color="grey" indeterminate />
      <vee-progress-circular rotate="180" color="#FF00FF" indeterminate />
    </div>
    `,
  }),
};

export const ProgressCircularSize: Story = {
  render: () => ({
    components: { VeeProgressCircular },
    template: `
    <div>
      <vee-progress-circular size="100" width="15" color="black" value="65">
        <template v-slot="{ value }">
          {{ value }}
        </template>
      </vee-progress-circular>

      <vee-progress-circular size="70" width="8" indeterminate>
        This div should not be visible
      </vee-progress-circular>
    </div>
    `,
  }),
};
