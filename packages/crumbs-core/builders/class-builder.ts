import { JOIN_CHARACTER } from '@constants';

export function classBuilder(...classes: Array<string>): string {
  return [classes].join(JOIN_CHARACTER);
}
