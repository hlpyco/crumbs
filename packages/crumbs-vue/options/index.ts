import IconProvider from 'crumbs-core/models/icons/provider';

const providers: Record<string, IconProvider> = {
  'font-awesome': {
    prefix: 'fa',
    separator: '-',
    families: ['regular', 'solid'],
    cdn: 'https://kit.fontawesome.com/7b21dfb942.js',
  }
}

export default {
  icons: providers,
};
