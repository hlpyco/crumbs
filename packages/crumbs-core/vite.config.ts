import { test } from 'vitest';
import { defineConfig } from 'vite';

export default defineConfig({
    test: {
        include: [
            'tests/**/*.test.*',
            'tests/**/*.spec.*'
        ],
        environment: 'jsdom',
    }
});
