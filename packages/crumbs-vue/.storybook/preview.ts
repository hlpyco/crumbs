import Vue from 'vue';
import type { Preview } from '@storybook/vue';
import { createCrumbs } from '..';
import options from '../options';

Vue.use(createCrumbs(options));

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },

    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};
export default preview;
