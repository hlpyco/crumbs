import { test } from 'vitest';
import { defineConfig } from 'vite';

export default defineConfig({
    test: {
        include: ['tests/**'],
        environment: 'jsdom',
    }
});
