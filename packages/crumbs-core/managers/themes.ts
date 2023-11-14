import CONSTANTS from '../constants';
import Theme from '../models/theme';
import type Themes from '../models/themes';

class ThemesManager {
  private themes: Themes;
  private activeThemeName: string;

  constructor(themes?: Themes) {
    this.themes = themes ? themes : CONSTANTS.themes.base;
    this.activeThemeName = "light";
  };

  configure() {
    this.configureActiveTheme();
    this.configureColors();
  };

  private configureColors() {
    const themesList = Object.keys(this.themes);

    for (let i = 0; i < themesList.length; i++) {
      const theme = themesList[i];

      for (const color in this.themes[theme]) {
        document.documentElement.style.setProperty(
          this.buildColorVar(theme, color),
          this.themes[theme][color],
        );
      }
    }
  };

  private configureActiveTheme() {
    const application = localStorage.getItem("crumbs-theme");
    const system = window.matchMedia("(prefers-color-scheme: dark)")?.matches;
    let themeName = "light";

    if (this.isValidTheme(application)) {
      themeName = application;
    } else if (system) {
      themeName = "dark"
    }

    this.activeThemeName = themeName;
  };

  private isValidTheme(themeName: string | null | undefined): boolean {
    return themeName && Object.keys(this.themes).includes(themeName);
  }

  setActiveTheme(themeName: string) {
    if (!this.isValidTheme(themeName)) {
      throw new Error(`Theme ${themeName} does not exist.`);
    }

    localStorage.setItem("crumbs-theme", themeName);
    this.configure();
  }

  getSupportedThemeModes(): string[] {
    return Object.keys(this.themes);
  }

  getCurrentTheme(): Theme {
    return this.themes[this.activeThemeName];
  }

  getColorVar(key: string): string {
    if (this.getCurrentTheme()[key]) {
      return this.buildColorVar(this.activeThemeName, key);
    }

    return key;
  }

  getColorRef(key: string): string {
    const colorVar = this.getColorVar(key);

    if (colorVar != key) {
      return `var(${colorVar})`;
    }

    return key;
  }

  private buildColorVar(theme: string, colorName: string): string {
    return `--crumbs-${theme}-${colorName}`;
  }
}

export { ThemesManager };