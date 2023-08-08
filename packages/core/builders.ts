import { JOIN_CHARACTER } from '@constants/index';

export function classBuilder(...classes: Array<string>): string {
  return [classes].join(JOIN_CHARACTER);
}

export function styleBuilder(...styles: Array<string>): string {
  return [styles].join(JOIN_CHARACTER);
}
