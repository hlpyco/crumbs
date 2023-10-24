import { PropOptions } from 'vue';

export function makeColorProps(): Record<string, PropOptions> {
  return {
    color: {
      type: String,
      default: 'primary',
    },
  };
}
