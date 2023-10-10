import { test } from 'vitest';
import { defineConfig } from 'vite';

export default defineConfig({
    resolve: {
        alias: {
            "@/*": "./*",
            "@models/*": "./models/*",
            "@managers/*": "./managers/*",
            "@builders/*": "./builders/*",
            "@constants": "./constants",
            "@constants/*": "./constants/*",
        }
    },
    test: {
        include: ['tests/**'],
        environment: 'jsdom',
    }
});
