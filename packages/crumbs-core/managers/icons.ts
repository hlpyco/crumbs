import Provider from "models/provider";

class IconsManager {
  private providers: Provider[];
  private defaultProvider: Provider;
  private defaultFamily: string;

  constructor(providers: Provider[]) {
    this.providers = providers;
    this.setDefaultProvider();
    this.setDefaultFamily();
  };

  configure() {
    for (let index = 0; index <= this.providers.length; index++) {
      const provider = this.providers[index];
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
    const provider = this.providers.find(
      (element: Provider) => element.isDefault
    );

    if (!provider) {
      this.defaultProvider = this.providers[0];
      return;
    }

    this.defaultProvider = provider;
  }

  private setDefaultFamily() {
    this.defaultFamily = this.defaultProvider.families[0];
  }

  public locate(name: string) {
    const prefix = this.defaultProvider.prefix;
    const separator = this.defaultProvider.separator;
    const family = this.defaultFamily;
    return `${prefix}${separator}${family} ${prefix}${separator}${name}`
  }
}

export { IconsManager };
