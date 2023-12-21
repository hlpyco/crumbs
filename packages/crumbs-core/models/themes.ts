import type Theme from '../models/theme';

export default interface Themes {
  readonly light?: Theme;
  readonly dark?: Theme;
}
