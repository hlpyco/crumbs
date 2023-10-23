import CONSTANTS from '../constants';

export function classBuilder(...classes: Array<string>): string {
  return [classes].join(CONSTANTS.misc.join);
}
