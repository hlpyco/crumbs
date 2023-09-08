import type ThemeMode from '@models/theme-mode';

export default interface Theme {
  readonly light?: ThemeMode;
  readonly dark?: ThemeMode;
}
