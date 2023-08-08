import path from 'node:path';
import { defineConfig } from 'vite';
import vue2 from '@vitejs/plugin-vue2';
import legacy from '@vitejs/plugin-legacy';

export default defineConfig({
  plugins: [
    vue2(),
    legacy({
      targets: ['ie >= 11'],
      additionalLegacyPolyfills: ['regenerator-runtime/runtime'],
    }),
  ],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, './packages'),
      },

      {
        find: '@components',
        replacement: path.resolve(__dirname, './packages/components'),
      },

      {
        find: '@constants',
        replacement: path.resolve(__dirname, './packages/constants'),
      },

      {
        find: '@utils',
        replacement: path.resolve(__dirname, './packages/utils'),
      },
    ],
  },
});
