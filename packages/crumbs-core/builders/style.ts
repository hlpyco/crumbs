import CONSTANTS from '../constants';

export function styleBuilder(...styles: Array<string>): string {
  return [styles].join(CONSTANTS.misc.join);
}
