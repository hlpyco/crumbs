import { beforeEach, describe, expect, test, vi } from 'vitest'
import { IconsManager } from '../../managers/icons';
import IconProvider from '../../models/icons/provider';
import { iconProviderFactory } from '../factories/icons/provider';
import IconConstants from '../../constants/icons';
import { faker } from '@faker-js/faker';

describe('IconsManager', () => {
  let iconProviders: Record<string, IconProvider>;
  let iconProviderValues: IconProvider[];
  let defaultProvider: IconProvider;
  let defaultFamily: string;

  let manager: IconsManager;

  beforeEach(() => {
    iconProviders = iconProviderFactory.buildList(3).reduce((object, item) => ({
      ...object,
      [item.name!]: item,
    }), {} as Record<string, IconProvider>);
    iconProviderValues = Object.values(iconProviders);
    defaultProvider = iconProviderValues.find((element) => element.isDefault) ?? iconProviderValues[0];
    defaultFamily = defaultProvider.families![0];

    manager = new IconsManager(iconProviders);
  });

  describe('configure', () => {
    beforeEach(() => {
      document.head.innerHTML = '';
    });

    test('configure with no providers', () => {
      manager = new IconsManager();
      manager.configure();

      expect(document.head.childNodes.length).toBe(0);
    });

    test('configure with one provider', () => {
      manager = new IconsManager([iconProviderValues[0]]);
      manager.configure();

      expect(document.head.childNodes.length).toBe(1);

      const element = document.head.childNodes[0];
      const script = element as HTMLScriptElement;

      expect(script.src).toBe(iconProviderValues[0].cdn);
      expect(script.crossOrigin).toBe(iconProviderValues[0].crossOrigin);
    });

    test('configure with providers', () => {
      manager.configure();

      for (let index = 0; index < document.head.childNodes.length; index++) {
        const element = document.head.childNodes[index];
        const script = element as HTMLScriptElement;

        expect(script.src).toBe(iconProviderValues[index].cdn);
        expect(script.crossOrigin).toBe(iconProviderValues[index].crossOrigin);
      }
    });
  });

  describe('getSize', () => {
    test('get default size', () => {
      expect(manager.getSize('')).toBe(IconConstants.size.default);
    });

    test('get size with name', () => {
      expect(manager.getSize('x-small')).toBe(IconConstants.size.xSmall);
      expect(manager.getSize('xSmall')).toBe(IconConstants.size.xSmall);

      expect(manager.getSize('small')).toBe(IconConstants.size.small);
      expect(manager.getSize('default')).toBe(IconConstants.size.default);
      expect(manager.getSize('large')).toBe(IconConstants.size.large);

      expect(manager.getSize('x-large')).toBe(IconConstants.size.xLarge);
      expect(manager.getSize('xLarge')).toBe(IconConstants.size.xLarge);
    });
  });

  describe('locate', () => {
    let iconName: string;

    beforeEach(() => {
      iconName = faker.lorem.word();
    });

    test('locate with default provider and family', () => {
      expect(manager.locate(iconName)).toBe(`${defaultProvider.prefix}${defaultProvider.separator}${defaultFamily} ${defaultProvider.prefix}${defaultProvider.separator}${iconName}`);
    });

    test('locate with default provider and custom family included in provider', () => {
      const family = defaultProvider.families![1];

      expect(manager.locate(iconName, family)).toBe(`${defaultProvider.prefix}${defaultProvider.separator}${family} ${defaultProvider.prefix}${defaultProvider.separator}${iconName}`);
    });

    test('locate with default provider and custom family not included in provider', () => {
      const family = 'NOT_INCLUDED_FAMILY';

      expect(manager.locate(iconName, family)).toBe(`${defaultProvider.prefix}${defaultProvider.separator}${defaultFamily} ${defaultProvider.prefix}${defaultProvider.separator}${iconName}`);
    });

    test('locate with custom provider and family included in provider', () => {
      const provider = iconProviderValues[1];
      const family = provider.families![1];

      expect(manager.locate(iconName, family, provider.name)).toBe(`${provider.prefix}${provider.separator}${family} ${provider.prefix}${provider.separator}${iconName}`);
    });

    test('locate with custom provider and family not included in provider', () => {
      const provider = iconProviderValues[1];
      const family = 'NOT_INCLUDED_FAMILY';

      expect(manager.locate(iconName, family, provider.name)).toBe(`${provider.prefix}${provider.separator}${defaultFamily} ${provider.prefix}${provider.separator}${iconName}`);
    });
  });
});
