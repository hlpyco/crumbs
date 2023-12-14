import { beforeEach, describe, expect, test } from 'vitest'
import { faker } from '@faker-js/faker';
import { styleBuilder } from '../../builders/style';

describe('style builder', () => {
  let styles: string[];

  beforeEach(() => {
    styles = faker.lorem.words(5).split(' ');
  });

  test('build style correctly', () => {
    const result = styleBuilder(styles);

    expect(result).toBe(styles.join(' '));
  });
});
