import { CLASS_BUILDER_JOIN_CHARACTER } from '@/constants';

export function classBuilder(...classes: Array<string>): string {
  return [classes].join(CLASS_BUILDER_JOIN_CHARACTER);
}
