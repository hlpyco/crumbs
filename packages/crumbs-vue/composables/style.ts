import { PropOptions } from 'vue';

export function makeStyleProps(): Record<string, PropOptions> {
    return {
      style: {
        type: Object,
        default: {},
      },
    };
  }
  