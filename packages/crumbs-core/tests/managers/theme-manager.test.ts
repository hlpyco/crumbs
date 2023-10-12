import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest'
import { ThemesManager } from '../../managers/themes';
import { themesFactory } from '../factories/themes';
import Themes from '../../models/themes';

function getStyleValue(key: string): string {
    return document.documentElement.style.getPropertyValue(key)
}

describe('theme manager', () => {
    let themes: Themes;

    beforeEach(() => {
        themes = themesFactory.build();
    });

    afterEach(() => {
        localStorage.clear();
    });

    describe('configure', () => {
        beforeEach(() => {
            Object.defineProperty(window, 'matchMedia', {
                writable: true,
                value: vi.fn().mockImplementation(query => ({
                    matches: false,
                    media: query,
                    onchange: null,
                    addListener: vi.fn(), // deprecated
                    removeListener: vi.fn(), // deprecated
                    addEventListener: vi.fn(),
                    removeEventListener: vi.fn(),
                    dispatchEvent: vi.fn(),
                })),
            });
        });

        test('configure colors with default theme', () => {
            let manager = new ThemesManager();
            manager.configure();

            expect(getStyleValue('--crumbs-light-primary')).toBe('#00dc96');
            expect(getStyleValue('--crumbs-light-secondary')).toBe('#0039ee');
            expect(getStyleValue('--crumbs-light-error')).toBe('#d31e1e');

            expect(getStyleValue('--crumbs-dark-primary')).toBe('#00dc96');
            expect(getStyleValue('--crumbs-dark-secondary')).toBe('#0039ee');
            expect(getStyleValue('--crumbs-dark-error')).toBe('#d31e1e');
        });

        test('configure colors with provided theme', () => {
            let manager = new ThemesManager(themes);
            manager.configure();

            expect(getStyleValue('--crumbs-light-primary')).toBe(themes.light.primary);
            expect(getStyleValue('--crumbs-light-secondary')).toBe(themes.light.secondary);
            expect(getStyleValue('--crumbs-light-error')).toBe(themes.light.error);

            expect(getStyleValue('--crumbs-dark-primary')).toBe(themes.dark.primary);
            expect(getStyleValue('--crumbs-dark-secondary')).toBe(themes.dark.secondary);
            expect(getStyleValue('--crumbs-dark-error')).toBe(themes.dark.error);
        });

        test('configure active theme using user preference', () => {
            localStorage.setItem('crumbs-theme', 'dark');

            let manager = new ThemesManager(themes);
            manager.configure();

            expect(manager.getCurrentTheme()).toBe(themes.dark);
        });

        test('configure active theme using broken user preference', () => {
            localStorage.setItem('crumbs-theme', 'broken');

            let manager = new ThemesManager(themes);
            manager.configure();

            expect(manager.getCurrentTheme()).toBe(themes.light);
        });

        test('configure active theme using system preference', () => {
            const matchMediaSpy = vi.spyOn(window, 'matchMedia');
            matchMediaSpy.mockImplementation(() => ({ matches: false, media: '' } as MediaQueryList));

            let manager = new ThemesManager(themes);
            manager.configure();

            expect(manager.getCurrentTheme()).toBe(themes.light);
            expect(matchMediaSpy).toHaveBeenNthCalledWith(1, '(prefers-color-scheme: dark)');
        });

        test('configure active theme using default', () => {
            const matchMediaSpy = vi.spyOn(window, 'matchMedia');
            matchMediaSpy.mockImplementation(() => ({ matches: false, media: '' } as MediaQueryList));

            let manager = new ThemesManager(themes);
            manager.configure();

            expect(manager.getCurrentTheme()).toBe(themes.light);
            expect(matchMediaSpy).toHaveBeenNthCalledWith(1, '(prefers-color-scheme: dark)');
        })
    });

    describe('set active theme', () => {
        let manager: ThemesManager;

        beforeEach(() => {
            manager = new ThemesManager(themes);
            manager.configure();
        });

        test('set active theme with valid theme name', () => {
            manager.setActiveTheme('dark');

            expect(manager.getCurrentTheme()).toBe(themes.dark);
        });

        test('set active theme with invalid theme name', () => {
            expect(() => manager.setActiveTheme('invalid')).toThrowError('Theme invalid does not exist.');
        });
    });

    describe('get current theme', () => {
        let manager: ThemesManager;

        beforeEach(() => {
            manager = new ThemesManager(themes);
            manager.configure();
        });

        test('get current theme light', () => {
            expect(manager.getCurrentTheme()).toBe(themes.light);
        });
    });

    describe('get color', () => {
        let manager: ThemesManager;

        beforeEach(() => {
            manager = new ThemesManager(themes);
            manager.configure();
        });

        test('get color with valid key', () => {
            expect(manager.getColor('primary')).toBe(themes.light.primary);
        });

        test('get color with invalid key', () => {
            expect(manager.getColor('invalid')).toBe('invalid');
        });
    });

    test('get supported theme modes', () => {
        let manager = new ThemesManager(themes);
        manager.configure();

        expect(manager.getSupportedThemeModes()).toEqual(Object.keys(themes));
    });
});
