import { test } from 'vitest';
import { defineConfig } from 'vite';

export default defineConfig({
    test: {
        environmentMatchGlobs: [
            ['tests/**', 'jsdom'],
        ]
    }
});
