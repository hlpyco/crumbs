import Provider from 'crumbs-core/models/provider';

const providers: Provider[] = [
  {
    prefix: 'fa',
    separator: '-',
    name: 'font-awesome',
    families: ['regular'],
    cdn: 'https://kit.fontawesome.com/c2f585ff19.js',
  }
]

export default {
  icons: providers,
};
