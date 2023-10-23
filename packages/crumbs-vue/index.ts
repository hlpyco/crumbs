import { PluginFunction, VueConstructor } from 'vue';
import init, { CrumbsOptions } from 'crumbs-core/managers/crumbs';

import * as crumbs from './components';
export default crumbs;

export function createCrumbs(options: CrumbsOptions = {}) {
  const install: PluginFunction<unknown> = (Vue: VueConstructor) => {
    const crumbs = init(options);

    for (const componentKey of Object.keys(crumbs)) {
      Vue.component(componentKey, crumbs[componentKey]);
    }

    Object.defineProperty(Vue.prototype, '$crumbs', crumbs);

    console.log("CACCA", crumbs);
  };

  return {
    install,
  };
}
