import type Themes from '../models/themes';

const BASE: Themes = {
  light: {
    primary: '#00dc96',
    secondary: '#0039ee',
    error: '#d31e1e',
    grey: '#9f9f9f',

    primaryLighten50: '#d4f9ed',
    secondaryLighten50: '#dee5fd',
    errorLighten50: '#f9dede',
    greyLighten50: '#a6a6a6',

    primaryLighten30: '#eefdf8',
    secondaryLighten30: '#f2f5fe',
    greyLighten30: '#f5f5f5',
  },

  dark: {
    // TODO: change dark theme
    primary: '#00dc96',
    secondary: '#0039ee',
    error: '#d31e1e',
    grey: '#9f9f9f',

    primaryLighten50: '#d4f9ed',
    secondaryLighten50: '#dee5fd',
    errorLighten50: '#f9dede',
    greyLighten50: '#a6a6a6',

    primaryLighten30: '#eefdf8',
    secondaryLighten30: '#f2f5fe',
    greyLighten30: '#f5f5f5',
  },
};

export default {
  base: BASE,
};