import Crumbs from '../models/crumbs';

import { classBuilder } from '../builders/class';
import { styleBuilder } from '../builders/style';
import { ThemesManager } from '../managers/themes';
import { IconsManager } from './icons';

import type Themes from '../models/themes';
import type Provider from 'models/provider';

import '../styles/crumbs.css';

export interface CrumbsOptions {
  readonly themes?: Themes;
  readonly icons?: Provider[],
  readonly styles?: string[],
  readonly classes?: string[],
}

export default function init(options: CrumbsOptions = {}) {
  const themes = new ThemesManager(options.themes);
  const icons = new IconsManager(options.icons);

  themes.configure();
  icons.configure();

  const style = styleBuilder(options.styles ?? [])
  const cls = classBuilder(options.classes ?? [])
  return new Crumbs(style, cls, themes);
};