import type Theme from '@models/theme';

const defaultTheme: Theme = {
  light: {
    primary: '#00dc96',
    secondary: '#0039ee',
    error: '#d31e1e',
  },
  dark: {
    // TODO: change dark theme
    primary: '#00dc96',
    secondary: '#0039ee',
    error: '#d31e1e',
  },
};

export function configureTheme(theme?: Theme) {
  theme ??= defaultTheme;

  const themeKeys = Object.keys(theme);
  for (let i = 0; i < themeKeys.length; i++) {
    const mode = themeKeys[i];

    for (const color in theme[mode]) {
      document.documentElement.style.setProperty(
        `--crumbs-${mode}-${color}`,
        mode[color],
      );
    }
  }
}
