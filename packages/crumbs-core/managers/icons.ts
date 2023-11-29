import IconProvider from "models/icons/provider";
import IconConstants from '../constants/icons';

class IconsManager {
  private providers: IconProvider[];
  private defaultProvider: IconProvider;
  private defaultFamily: string;

  constructor(providers: IconProvider[]) {
    this.providers = providers;
    this.setDefaultProvider();
    this.setDefaultFamily();
  };

  configure() {
    const providers = Object.values(this.providers);

    for (let index = 0; index <= providers.length; index++) {
      const provider = providers[index];
      this.configureCDN(provider?.cdn, provider?.crossOrigin);
    }
  };

  private configureCDN(cdn: string, crossOrigin: string = 'anonymous') {
    const script = document.createElement('script');
    script.src = cdn;
    script.crossOrigin = crossOrigin;
    document.head.appendChild(script);
  }

  private setDefaultProvider() {
    const providers = Object.values(this.providers);

    const provider = providers.find(
      (element: IconProvider) => element.isDefault
    );

    if (!provider) {
      this.defaultProvider = providers[0];
      return;
    }

    this.defaultProvider = provider;
  }

  private setDefaultFamily() {
    this.defaultFamily = this.defaultProvider.families[0];
  }

  private getProvider(name?: string) {
    return this.providers[name] || this.defaultProvider;
  }

  private getFamily(familyName?: string, provider?: IconProvider) {
    const family =  new Set(provider.families || []);
    return family.has(familyName) ? familyName : this.defaultFamily;
  }

  public getSize(name: string) {
    const size = IconConstants.size[name];
    return size ? size : IconConstants.size.default;
  }

  public locate(iconName: string, familyName?: string, providerName?: string) {
    const provider = this.getProvider(providerName);
    const family = this.getFamily(familyName, provider);
    const prefix = provider.prefix;
    const separator = provider.separator;
    return `${prefix}${separator}${family} ${prefix}${separator}${iconName}`;
  }
}

export { IconsManager };
