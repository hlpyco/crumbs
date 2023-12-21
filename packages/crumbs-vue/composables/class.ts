import { PropOptions } from 'vue';

export function makeClassProps(): Record<string, PropOptions> {
  return {
    class: {
      type: String,
      default: '',
    },
  };
}
