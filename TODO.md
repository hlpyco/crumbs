# Crumbs

## Goals
- [x] Move TailwindCSS from crumbs-vue to crumbs-core
- [x] Generate .css file to be imported inside crumbs-vue
- [ ] Create color name parser;
- [ ] Create theme selector;
- [x] Create core manager;

## Notes
import crumbs from 'crumbs-core';

for (const component of components) {
  Vue.component(component.name, component);
}

Object.defineProperty(Vue.prototype, '$crumbs', crumbs);