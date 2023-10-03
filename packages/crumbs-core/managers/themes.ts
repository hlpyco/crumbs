import CONSTANTS from '@constants';
import type Themes from '@models/themes';

class ThemesManager {
  themes: Themes;
  activeTheme: string;

  constructor(themes?: Themes) {
    this.themes = themes ? themes : CONSTANTS.themes.base;
    this.activeTheme = 
  };

  configure() {
    this.configureColors();
  };

  private configureColors() {
    const themesList = Object.keys(this.themes);

    for (let i = 0; i < themesList.length; i++) {
      const theme = themesList[i];

      for (const color in this.themes[theme]) {
        document.documentElement.style.setProperty(
          `--crumbs-${theme}-${color}`,
          this.themes[theme][color],
        );
      }
    }
  };

  private configureActiveTheme() {
    const application = localStorage.getItem("theme");
    const system = window.matchMedia("(prefers-color-scheme: dark)")?.matches;
    const base = "light";

    if (application) {
      // Define preferences set and get methods for retrieving application;
      return;
    }

    if (system) {
      // Define system retrieve method;
      return;
    }

    return base;
  };

  getColor(key: string) {}
}

export { ThemesManager };