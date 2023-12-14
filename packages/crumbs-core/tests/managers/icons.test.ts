import { beforeEach, describe, expect, test, vi } from 'vitest'
import { IconsManager } from '../../managers/icons';
import IconProvider from '../../models/icons/provider';
import { iconProviderFactory } from '../factories/icons/provider';
import IconConstants from '../../constants/icons';
import { faker } from '@faker-js/faker';

describe('IconsManager', () => {
  let iconProviders: IconProvider[];
  let manager: IconsManager;

  let defaultProvider: IconProvider;
  let defaultFamily: string;

  beforeEach(() => {
    iconProviders = iconProviderFactory.buildList(20);
    manager = new IconsManager(iconProviders);

    defaultProvider = iconProviders.find((element) => element.isDefault) ?? iconProviders[0];
    defaultFamily = defaultProvider.families![0];
  });

  describe('configure', () => {
    test('configure with providers', () => {
      manager.configure();

      for (let index = 0; index < document.head.childNodes.length; index++) {
        const element = document.head.childNodes[index];
        const script = element as HTMLScriptElement;

        expect(script.src).toBe(iconProviders[index].cdn);
        expect(script.crossOrigin).toBe(iconProviders[index].crossOrigin);
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
      const provider = iconProviders[1];
      const family = provider.families![1];

      expect(manager.locate(iconName, family, provider.name)).toBe(`${provider.prefix}${provider.separator}${family} ${provider.prefix}${provider.separator}${iconName}`);
    });

    test('locate with custom provider and family not included in provider', () => {
      const provider = iconProviders[1];
      const family = 'NOT_INCLUDED_FAMILY';

      expect(manager.locate(iconName, family, provider.name)).toBe(`${provider.prefix}${provider.separator}${defaultFamily} ${provider.prefix}${provider.separator}${iconName}`);
    });
  });
});
