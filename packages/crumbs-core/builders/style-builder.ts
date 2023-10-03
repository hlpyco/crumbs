import { JOIN_CHARACTER } from '@constants';

export function styleBuilder(...styles: Array<string>): string {
  return [styles].join(JOIN_CHARACTER);
}
