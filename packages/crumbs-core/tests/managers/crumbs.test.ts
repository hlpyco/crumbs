import { beforeEach, describe, expect, test, vi } from 'vitest'
import init from '../../managers/crumbs';
import Crumbs from '../../models/crumbs';

describe('crumbs', () => {
  beforeEach(() => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: vi.fn().mockImplementation(query => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: vi.fn(), // deprecated
        removeListener: vi.fn(), // deprecated
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
      })),
    });
  });

  test('init with no options', () => {
    const crumbs = init();

    expect(crumbs).toBeDefined();
    expect(crumbs).toBeInstanceOf(Crumbs);
  });

  test('init with options', () => {

  });
});
