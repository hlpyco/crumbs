import { classBuilder, styleBuilder } from '@/core/builders';

export function compositor(
  styles: Array<string> = [],
  classes: Array<string> = [],
) {
  return {
    style: styleBuilder(...styles),
    class: classBuilder(...classes),
  };
}
