import Crumbs from '../models/crumbs';
import type Themes from '../models/themes';
import { classBuilder } from '../builders/class';
import { styleBuilder } from '../builders/style';
import { ThemesManager } from '../managers/themes';
import '../styles/crumbs.css';

export interface CrumbsOptions {
  readonly themes?: Themes;
  readonly styles?: string[],
  readonly classes?: string[],
}

export default function init(options: CrumbsOptions = {}) {
  const themes = new ThemesManager(options.themes);
  themes.configure();

  const style = styleBuilder(...options.styles ?? [])
  const cls = classBuilder(...options.classes ?? [])
  return new Crumbs(style, cls, themes);
};