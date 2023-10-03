import { beforeEach, describe, expect, test } from 'vitest'
import { ThemesManager } from '../../managers/themes';
import { themeFactory } from '../factories/themes';
import Themes from '../../models/themes';

function getStyleValue(key: string): string {
    return document.documentElement.style.getPropertyValue(key)
}

describe('theme manager', () => {
    let theme: Themes;

    beforeEach(() => {
        theme = themeFactory.build();
    });

    test('configure theme with default theme', () => {
        configureTheme();

        expect(getStyleValue('--crumbs-light-primary')).toBe('#00dc96');
        expect(getStyleValue('--crumbs-light-secondary')).toBe('#0039ee');
        expect(getStyleValue('--crumbs-light-error')).toBe('#d31e1e');

        expect(getStyleValue('--crumbs-dark-primary')).toBe('#00dc96');
        expect(getStyleValue('--crumbs-dark-secondary')).toBe('#0039ee');
        expect(getStyleValue('--crumbs-dark-error')).toBe('#d31e1e');
    });

    test('configure theme with provided theme', () => {
        configureTheme(theme);

        expect(getStyleValue('--crumbs-light-primary')).toBe(theme.light.primary);
        expect(getStyleValue('--crumbs-light-secondary')).toBe(theme.light.secondary);
        expect(getStyleValue('--crumbs-light-error')).toBe(theme.light.error);

        expect(getStyleValue('--crumbs-dark-primary')).toBe(theme.dark.primary);
        expect(getStyleValue('--crumbs-dark-secondary')).toBe(theme.dark.secondary);
        expect(getStyleValue('--crumbs-dark-error')).toBe(theme.dark.error);
    });
});
