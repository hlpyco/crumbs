import { beforeEach, describe, expect, test } from 'vitest'
import { faker } from '@faker-js/faker';
import { classBuilder } from '../../builders/class';

describe('class builder', () => {
  let classes: string[];

  beforeEach(() => {
    classes = faker.lorem.words(5).split(' ');
  });

  test('build class correctly', () => {
    const result = classBuilder(classes);

    expect(result).toBe(classes.join(' '));
  });
});
