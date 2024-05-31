import CONSTANTS from '../constants';

export function classBuilder(classes: Array<string> | Record<string, boolean>): string {
  if (Array.isArray(classes)) {
    return classes.join(CONSTANTS.misc.join);
  }

  return Object.keys(classes).filter((key) => classes[key]).join(CONSTANTS.misc.join);
}
