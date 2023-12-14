import IconProvider from "models/icons/provider";
import IconConstants from '../constants/icons';
import { toCamelCase } from "../misc/normalizers";
import IconSize from "models/icons/size";

class IconsManager {
  private providers: Record<string, IconProvider>;

  private defaultProvider: IconProvider;
  private defaultFamily: string;

  constructor(providers?: Record<string, IconProvider>) {
    this.providers = providers || {};

    this.setDefaultProvider();
    this.setDefaultFamily();
  };

  configure() {
    const providers = Object.values(this.providers);

    for (let index = 0; index < providers.length; index++) {
      const provider = providers[index];

      if (provider.cdn) {
        this.configureCDN(provider.cdn, provider.crossOrigin);
      }
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
    this.defaultFamily = this.defaultProvider?.families[0];
  }

  private getProvider(name?: string): IconProvider {
    return this.providers[name] || this.defaultProvider;
  }

  private getFamily(familyName?: string, provider?: IconProvider): string {
    const family = new Set(provider?.families || []);
    return family.has(familyName) ? familyName : this.defaultFamily;
  }

  public getSize(name: string): IconSize {
    const size = IconConstants.size[toCamelCase(name)];
    return size ? size : IconConstants.size.default;
  }

  public locate(iconName: string, familyName?: string, providerName?: string): string {
    const provider = this.getProvider(providerName);
    const family = this.getFamily(familyName, provider);

    const prefix = provider.prefix;
    const separator = provider.separator;

    return `${prefix}${separator}${family} ${prefix}${separator}${iconName}`;
  }
}

export { IconsManager };
