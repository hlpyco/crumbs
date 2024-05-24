import { beforeEach, describe, expect, test } from 'vitest'
import { faker } from '@faker-js/faker';
import { classBuilder } from '../../builders/class';

describe('class builder', () => {
  let arrayClasses: string[];
  let recordClasses: Record<string, boolean>;

  beforeEach(() => {
    arrayClasses = faker.lorem.words(5).split(' ');
    recordClasses = arrayClasses.reduce((acc, cur) => ({ ...acc, [cur]: faker.helpers.arrayElement([true, false]) }), {});
  });

  test('build class correctly, joining array classes', () => {
    const result = classBuilder(arrayClasses);

    expect(result).toBe(arrayClasses.join(' '));
  });

  test('build class correctly, joining record classes', () => {
    const result = classBuilder(recordClasses);

    expect(result).toBe(arrayClasses.filter((key) => recordClasses[key]).join(' '));
  });
});
