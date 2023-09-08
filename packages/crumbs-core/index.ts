import { classBuilder, styleBuilder } from '@/builders';
import type Theme from '@models/theme';
import Crumbs from '@models/crumbs';
import type { DefineComponent, PluginFunction, VueConstructor } from 'vue';
import { configureTheme } from '@managers/theme-manager';

interface CrumbsOptions {
  readonly theme?: Theme;
  readonly styles?: string[],
  readonly classes?: string[],
}

export default function createCrumbs(components: DefineComponent[], options: CrumbsOptions = {}) {
  configureTheme(options.theme);

  const style = styleBuilder(...options.styles ?? [])
  const cls = classBuilder(...options.styles ?? [])

  const install: PluginFunction<unknown> = (Vue: VueConstructor) => {
    for (const component of components) {
      Vue.component(component.name, component);
    }

    Object.defineProperty(Vue.prototype, '$crumbs', new Crumbs(style, cls));
  };

  return {
    install,
  };
}

