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
            expect(getStyleValue('--crumbs-light-primary-lighten-5')).toBe('#ccf8ea');
            expect(getStyleValue('--crumbs-light-primary-lighten-4')).toBe('#b2f5e0');
            expect(getStyleValue('--crumbs-light-primary-lighten-3')).toBe('#99f1d5');
            expect(getStyleValue('--crumbs-light-primary-lighten-2')).toBe('#66eac0');
            expect(getStyleValue('--crumbs-light-primary-lighten-1')).toBe('#33e3ab');
            expect(getStyleValue('--crumbs-light-primary-darken-1')).toBe('#00c485');
            expect(getStyleValue('--crumbs-light-primary-darken-2')).toBe('#00ab75');
            expect(getStyleValue('--crumbs-light-primary-darken-3')).toBe('#009364');
            expect(getStyleValue('--crumbs-light-primary-darken-4')).toBe('#007a53');
            expect(getStyleValue('--crumbs-light-primary-darken-5')).toBe('#006243');

            expect(getStyleValue('--crumbs-light-secondary')).toBe('#00dc96');
            expect(getStyleValue('--crumbs-light-secondary-lighten-5')).toBe('#e3e9fd');
            expect(getStyleValue('--crumbs-light-secondary-lighten-4')).toBe('#c6d3fb');
            expect(getStyleValue('--crumbs-light-secondary-lighten-3')).toBe('#aabdf9');
            expect(getStyleValue('--crumbs-light-secondary-lighten-2')).toBe('#7191f6');
            expect(getStyleValue('--crumbs-light-secondary-lighten-1')).toBe('#3965f2');
            expect(getStyleValue('--crumbs-light-secondary-darken-1')).toBe('#0033d4');
            expect(getStyleValue('--crumbs-light-secondary-darken-2')).toBe('#002cb9');
            expect(getStyleValue('--crumbs-light-secondary-darken-3')).toBe('#00269f');
            expect(getStyleValue('--crumbs-light-secondary-darken-4')).toBe('#002084');
            expect(getStyleValue('--crumbs-light-secondary-darken-5')).toBe('#00196a');

            expect(getStyleValue('--crumbs-light-error')).toBe('#d31e1e');
            expect(getStyleValue('--crumbs-light-error-lighten-5')).toBe('#fae6e6');
            expect(getStyleValue('--crumbs-light-error-lighten-4')).toBe('#f5cdcd');
            expect(getStyleValue('--crumbs-light-error-lighten-3')).toBe('#f0b4b4');
            expect(getStyleValue('--crumbs-light-error-lighten-2')).toBe('#e78282');
            expect(getStyleValue('--crumbs-light-error-lighten-1')).toBe('#dd5050');
            expect(getStyleValue('--crumbs-light-error-darken-1')).toBe('#bc1b1b');
            expect(getStyleValue('--crumbs-light-error-darken-2')).toBe('#a41717');
            expect(getStyleValue('--crumbs-light-error-darken-3')).toBe('#8d1414');
            expect(getStyleValue('--crumbs-light-error-darken-4')).toBe('#751111');
            expect(getStyleValue('--crumbs-light-error-darken-5')).toBe('#5e0d0d');

            expect(getStyleValue('--crumbs-light-grey')).toBe('#9f9f9f');
            expect(getStyleValue('--crumbs-light-grey-lighten-5')).toBe('#f1f1f1');
            expect(getStyleValue('--crumbs-light-grey-lighten-4')).toBe('#e6e6e6');
            expect(getStyleValue('--crumbs-light-grey-lighten-3')).toBe('#d5d5d5');
            expect(getStyleValue('--crumbs-light-grey-lighten-2')).toBe('#cccccc');
            expect(getStyleValue('--crumbs-light-grey-lighten-1')).toBe('#b4b4b4');
            expect(getStyleValue('--crumbs-light-grey-darken-1')).toBe('#8d8d8d');
            expect(getStyleValue('--crumbs-light-grey-darken-2')).toBe('#7c7c7c');
            expect(getStyleValue('--crumbs-light-grey-darken-3')).toBe('#6a6a6a');
            expect(getStyleValue('--crumbs-light-grey-darken-4')).toBe('#585858');
            expect(getStyleValue('--crumbs-light-grey-darken-5')).toBe('#5e0d0d');

            expect(getStyleValue('--crumbs-light-black')).toBe('#000000');
            expect(getStyleValue('--crumbs-light-white')).toBe('#ffffff');

            expect(getStyleValue('--crumbs-dark-primary')).toBe('#00dc96');
            expect(getStyleValue('--crumbs-dark-primary-lighten-5')).toBe('#ccf8ea');
            expect(getStyleValue('--crumbs-dark-primary-lighten-4')).toBe('#b2f5e0');
            expect(getStyleValue('--crumbs-dark-primary-lighten-3')).toBe('#99f1d5');
            expect(getStyleValue('--crumbs-dark-primary-lighten-2')).toBe('#66eac0');
            expect(getStyleValue('--crumbs-dark-primary-lighten-1')).toBe('#33e3ab');
            expect(getStyleValue('--crumbs-dark-primary-darken-1')).toBe('#00c485');
            expect(getStyleValue('--crumbs-dark-primary-darken-2')).toBe('#00ab75');
            expect(getStyleValue('--crumbs-dark-primary-darken-3')).toBe('#009364');
            expect(getStyleValue('--crumbs-dark-primary-darken-4')).toBe('#007a53');
            expect(getStyleValue('--crumbs-dark-primary-darken-5')).toBe('#006243');

            expect(getStyleValue('--crumbs-dark-secondary')).toBe('#00dc96');
            expect(getStyleValue('--crumbs-dark-secondary-lighten-5')).toBe('#e3e9fd');
            expect(getStyleValue('--crumbs-dark-secondary-lighten-4')).toBe('#c6d3fb');
            expect(getStyleValue('--crumbs-dark-secondary-lighten-3')).toBe('#aabdf9');
            expect(getStyleValue('--crumbs-dark-secondary-lighten-2')).toBe('#7191f6');
            expect(getStyleValue('--crumbs-dark-secondary-lighten-1')).toBe('#3965f2');
            expect(getStyleValue('--crumbs-dark-secondary-darken-1')).toBe('#0033d4');
            expect(getStyleValue('--crumbs-dark-secondary-darken-2')).toBe('#002cb9');
            expect(getStyleValue('--crumbs-dark-secondary-darken-3')).toBe('#00269f');
            expect(getStyleValue('--crumbs-dark-secondary-darken-4')).toBe('#002084');
            expect(getStyleValue('--crumbs-dark-secondary-darken-5')).toBe('#00196a');

            expect(getStyleValue('--crumbs-dark-error')).toBe('#d31e1e');
            expect(getStyleValue('--crumbs-dark-error-lighten-5')).toBe('#fae6e6');
            expect(getStyleValue('--crumbs-dark-error-lighten-4')).toBe('#f5cdcd');
            expect(getStyleValue('--crumbs-dark-error-lighten-3')).toBe('#f0b4b4');
            expect(getStyleValue('--crumbs-dark-error-lighten-2')).toBe('#e78282');
            expect(getStyleValue('--crumbs-dark-error-lighten-1')).toBe('#dd5050');
            expect(getStyleValue('--crumbs-dark-error-darken-1')).toBe('#bc1b1b');
            expect(getStyleValue('--crumbs-dark-error-darken-2')).toBe('#a41717');
            expect(getStyleValue('--crumbs-dark-error-darken-3')).toBe('#8d1414');
            expect(getStyleValue('--crumbs-dark-error-darken-4')).toBe('#751111');
            expect(getStyleValue('--crumbs-dark-error-darken-5')).toBe('#5e0d0d');

            expect(getStyleValue('--crumbs-dark-grey')).toBe('#9f9f9f');
            expect(getStyleValue('--crumbs-dark-grey-lighten-5')).toBe('#f1f1f1');
            expect(getStyleValue('--crumbs-dark-grey-lighten-4')).toBe('#e6e6e6');
            expect(getStyleValue('--crumbs-dark-grey-lighten-3')).toBe('#d5d5d5');
            expect(getStyleValue('--crumbs-dark-grey-lighten-2')).toBe('#cccccc');
            expect(getStyleValue('--crumbs-dark-grey-lighten-1')).toBe('#b4b4b4');
            expect(getStyleValue('--crumbs-dark-grey-darken-1')).toBe('#8d8d8d');
            expect(getStyleValue('--crumbs-dark-grey-darken-2')).toBe('#7c7c7c');
            expect(getStyleValue('--crumbs-dark-grey-darken-3')).toBe('#6a6a6a');
            expect(getStyleValue('--crumbs-dark-grey-darken-4')).toBe('#585858');
            expect(getStyleValue('--crumbs-dark-grey-darken-5')).toBe('#5e0d0d');

            expect(getStyleValue('--crumbs-dark-black')).toBe('#000000');
            expect(getStyleValue('--crumbs-dark-white')).toBe('#ffffff');
        });

        test('configure colors with provided theme', () => {
            let manager = new ThemesManager(themes);
            manager.configure();

            expect(getStyleValue('--crumbs-light-primary')).toBe(themes.light?.primary);
            expect(getStyleValue('--crumbs-light-primary-lighten-5')).toBe(themes.light?.primaryLighten5);
            expect(getStyleValue('--crumbs-light-primary-lighten-4')).toBe(themes.light?.primaryLighten4);
            expect(getStyleValue('--crumbs-light-primary-lighten-3')).toBe(themes.light?.primaryLighten3);
            expect(getStyleValue('--crumbs-light-primary-lighten-2')).toBe(themes.light?.primaryLighten2);
            expect(getStyleValue('--crumbs-light-primary-lighten-1')).toBe(themes.light?.primaryLighten1);
            expect(getStyleValue('--crumbs-light-primary-darken-1')).toBe(themes.light?.primaryDarken1);
            expect(getStyleValue('--crumbs-light-primary-darken-2')).toBe(themes.light?.primaryDarken2);
            expect(getStyleValue('--crumbs-light-primary-darken-3')).toBe(themes.light?.primaryDarken3);
            expect(getStyleValue('--crumbs-light-primary-darken-4')).toBe(themes.light?.primaryDarken4);
            expect(getStyleValue('--crumbs-light-primary-darken-5')).toBe(themes.light?.primaryDarken5);

            expect(getStyleValue('--crumbs-light-secondary')).toBe(themes.light?.secondary);
            expect(getStyleValue('--crumbs-light-secondary-lighten-5')).toBe(themes.light?.secondaryLighten5);
            expect(getStyleValue('--crumbs-light-secondary-lighten-4')).toBe(themes.light?.secondaryLighten4);
            expect(getStyleValue('--crumbs-light-secondary-lighten-3')).toBe(themes.light?.secondaryLighten3);
            expect(getStyleValue('--crumbs-light-secondary-lighten-2')).toBe(themes.light?.secondaryLighten2);
            expect(getStyleValue('--crumbs-light-secondary-lighten-1')).toBe(themes.light?.secondaryLighten1);
            expect(getStyleValue('--crumbs-light-secondary-darken-1')).toBe(themes.light?.secondaryDarken1);
            expect(getStyleValue('--crumbs-light-secondary-darken-2')).toBe(themes.light?.secondaryDarken2);
            expect(getStyleValue('--crumbs-light-secondary-darken-3')).toBe(themes.light?.secondaryDarken3);
            expect(getStyleValue('--crumbs-light-secondary-darken-4')).toBe(themes.light?.secondaryDarken4);
            expect(getStyleValue('--crumbs-light-secondary-darken-5')).toBe(themes.light?.secondaryDarken5);

            expect(getStyleValue('--crumbs-light-error')).toBe(themes.light?.error);
            expect(getStyleValue('--crumbs-light-error-lighten-5')).toBe(themes.light?.errorLighten5);
            expect(getStyleValue('--crumbs-light-error-lighten-4')).toBe(themes.light?.errorLighten4);
            expect(getStyleValue('--crumbs-light-error-lighten-3')).toBe(themes.light?.errorLighten3);
            expect(getStyleValue('--crumbs-light-error-lighten-2')).toBe(themes.light?.errorLighten2);
            expect(getStyleValue('--crumbs-light-error-lighten-1')).toBe(themes.light?.errorLighten1);
            expect(getStyleValue('--crumbs-light-error-darken-1')).toBe(themes.light?.errorDarken1);
            expect(getStyleValue('--crumbs-light-error-darken-2')).toBe(themes.light?.errorDarken2);
            expect(getStyleValue('--crumbs-light-error-darken-3')).toBe(themes.light?.errorDarken3);
            expect(getStyleValue('--crumbs-light-error-darken-4')).toBe(themes.light?.errorDarken4);
            expect(getStyleValue('--crumbs-light-error-darken-5')).toBe(themes.light?.errorDarken5);

            expect(getStyleValue('--crumbs-light-grey')).toBe(themes.light?.grey);
            expect(getStyleValue('--crumbs-light-grey-lighten-5')).toBe(themes.light?.greyLighten5);
            expect(getStyleValue('--crumbs-light-grey-lighten-4')).toBe(themes.light?.greyLighten4);
            expect(getStyleValue('--crumbs-light-grey-lighten-3')).toBe(themes.light?.greyLighten3);
            expect(getStyleValue('--crumbs-light-grey-lighten-2')).toBe(themes.light?.greyLighten2);
            expect(getStyleValue('--crumbs-light-grey-lighten-1')).toBe(themes.light?.greyLighten1);
            expect(getStyleValue('--crumbs-light-grey-darken-1')).toBe(themes.light?.greyDarken1);
            expect(getStyleValue('--crumbs-light-grey-darken-2')).toBe(themes.light?.greyDarken2);
            expect(getStyleValue('--crumbs-light-grey-darken-3')).toBe(themes.light?.greyDarken3);
            expect(getStyleValue('--crumbs-light-grey-darken-4')).toBe(themes.light?.greyDarken4);
            expect(getStyleValue('--crumbs-light-grey-darken-5')).toBe(themes.light?.greyDarken5);

            expect(getStyleValue('--crumbs-light-black')).toBe(themes.light?.black);
            expect(getStyleValue('--crumbs-light-white')).toBe(themes.light?.white);

            expect(getStyleValue('--crumbs-dark-primary')).toBe(themes.dark?.primary);
            expect(getStyleValue('--crumbs-dark-primary-lighten-5')).toBe(themes.dark?.primaryLighten5);
            expect(getStyleValue('--crumbs-dark-primary-lighten-4')).toBe(themes.dark?.primaryLighten4);
            expect(getStyleValue('--crumbs-dark-primary-lighten-3')).toBe(themes.dark?.primaryLighten3);
            expect(getStyleValue('--crumbs-dark-primary-lighten-2')).toBe(themes.dark?.primaryLighten2);
            expect(getStyleValue('--crumbs-dark-primary-lighten-1')).toBe(themes.dark?.primaryLighten1);
            expect(getStyleValue('--crumbs-dark-primary-darken-1')).toBe(themes.dark?.primaryDarken1);
            expect(getStyleValue('--crumbs-dark-primary-darken-2')).toBe(themes.dark?.primaryDarken2);
            expect(getStyleValue('--crumbs-dark-primary-darken-3')).toBe(themes.dark?.primaryDarken3);
            expect(getStyleValue('--crumbs-dark-primary-darken-4')).toBe(themes.dark?.primaryDarken4);
            expect(getStyleValue('--crumbs-dark-primary-darken-5')).toBe(themes.dark?.primaryDarken5);

            expect(getStyleValue('--crumbs-dark-secondary')).toBe(themes.dark?.secondary);
            expect(getStyleValue('--crumbs-dark-secondary-lighten-5')).toBe(themes.dark?.secondaryLighten5);
            expect(getStyleValue('--crumbs-dark-secondary-lighten-4')).toBe(themes.dark?.secondaryLighten4);
            expect(getStyleValue('--crumbs-dark-secondary-lighten-3')).toBe(themes.dark?.secondaryLighten3);
            expect(getStyleValue('--crumbs-dark-secondary-lighten-2')).toBe(themes.dark?.secondaryLighten2);
            expect(getStyleValue('--crumbs-dark-secondary-lighten-1')).toBe(themes.dark?.secondaryLighten1);
            expect(getStyleValue('--crumbs-dark-secondary-darken-1')).toBe(themes.dark?.secondaryDarken1);
            expect(getStyleValue('--crumbs-dark-secondary-darken-2')).toBe(themes.dark?.secondaryDarken2);
            expect(getStyleValue('--crumbs-dark-secondary-darken-3')).toBe(themes.dark?.secondaryDarken3);
            expect(getStyleValue('--crumbs-dark-secondary-darken-4')).toBe(themes.dark?.secondaryDarken4);
            expect(getStyleValue('--crumbs-dark-secondary-darken-5')).toBe(themes.dark?.secondaryDarken5);

            expect(getStyleValue('--crumbs-dark-error')).toBe(themes.dark?.error);
            expect(getStyleValue('--crumbs-dark-error-lighten-5')).toBe(themes.dark?.errorLighten5);
            expect(getStyleValue('--crumbs-dark-error-lighten-4')).toBe(themes.dark?.errorLighten4);
            expect(getStyleValue('--crumbs-dark-error-lighten-3')).toBe(themes.dark?.errorLighten3);
            expect(getStyleValue('--crumbs-dark-error-lighten-2')).toBe(themes.dark?.errorLighten2);
            expect(getStyleValue('--crumbs-dark-error-lighten-1')).toBe(themes.dark?.errorLighten1);
            expect(getStyleValue('--crumbs-dark-error-darken-1')).toBe(themes.dark?.errorDarken1);
            expect(getStyleValue('--crumbs-dark-error-darken-2')).toBe(themes.dark?.errorDarken2);
            expect(getStyleValue('--crumbs-dark-error-darken-3')).toBe(themes.dark?.errorDarken3);
            expect(getStyleValue('--crumbs-dark-error-darken-4')).toBe(themes.dark?.errorDarken4);
            expect(getStyleValue('--crumbs-dark-error-darken-5')).toBe(themes.dark?.errorDarken5);

            expect(getStyleValue('--crumbs-dark-grey')).toBe(themes.dark?.grey);
            expect(getStyleValue('--crumbs-dark-grey-lighten-5')).toBe(themes.dark?.greyLighten5);
            expect(getStyleValue('--crumbs-dark-grey-lighten-4')).toBe(themes.dark?.greyLighten4);
            expect(getStyleValue('--crumbs-dark-grey-lighten-3')).toBe(themes.dark?.greyLighten3);
            expect(getStyleValue('--crumbs-dark-grey-lighten-2')).toBe(themes.dark?.greyLighten2);
            expect(getStyleValue('--crumbs-dark-grey-lighten-1')).toBe(themes.dark?.greyLighten1);
            expect(getStyleValue('--crumbs-dark-grey-darken-1')).toBe(themes.dark?.greyDarken1);
            expect(getStyleValue('--crumbs-dark-grey-darken-2')).toBe(themes.dark?.greyDarken2);
            expect(getStyleValue('--crumbs-dark-grey-darken-3')).toBe(themes.dark?.greyDarken3);
            expect(getStyleValue('--crumbs-dark-grey-darken-4')).toBe(themes.dark?.greyDarken4);
            expect(getStyleValue('--crumbs-dark-grey-darken-5')).toBe(themes.dark?.greyDarken5);

            expect(getStyleValue('--crumbs-dark-black')).toBe(themes.dark?.black);
            expect(getStyleValue('--crumbs-dark-white')).toBe(themes.dark?.white);
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

    describe('get color var', () => {
        let manager: ThemesManager;

        beforeEach(() => {
            manager = new ThemesManager(themes);
            manager.configure();
        });

        test('get color var with valid key', () => {
            expect(manager.getColorVar('primary')).toBe('--crumbs-light-primary');
            expect(manager.getColorVar('primaryLighten5')).toBe('--crumbs-light-primary-lighten-5');
        });

        test('get color var with invalid key', () => {
            expect(manager.getColorVar('invalid')).toBe('invalid');
        });
    });

    describe('get color ref', () => {
        let manager: ThemesManager;

        beforeEach(() => {
            manager = new ThemesManager(themes);
            manager.configure();
        });

        test('get color ref with valid key', () => {
            expect(manager.getColorRef('primary')).toBe('var(--crumbs-light-primary)');
            expect(manager.getColorRef('primaryLighten5')).toBe('var(--crumbs-light-primary-lighten-5)');
        });

        test('get color ref with invalid key', () => {
            expect(manager.getColorRef('invalid')).toBe('invalid');
        });
    });

    test('get supported theme modes', () => {
        let manager = new ThemesManager(themes);
        manager.configure();

        expect(manager.getSupportedThemeModes()).toEqual(Object.keys(themes));
    });
});
