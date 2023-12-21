import { describe, expect, test } from 'vitest'
import { toCamelCase, toKebabCase } from '../../misc/normalizers';

describe('normalizers', () => {
  describe('toKebabCase', () => {
    test('should convert a single word to lowercase', () => {
      expect(toKebabCase('Test')).toBe('test');
    });

    test('should convert camelCase to kebab-case', () => {
      expect(toKebabCase('testStringThreeWords1')).toBe('test-string-three-words-1');
    });

    test('should convert PascalCase to kebab-case', () => {
      expect(toKebabCase('TestStringThreeWords1')).toBe('test-string-three-words-1');
    });

    test('should convert kebab-case to kebab-case', () => {
      expect(toKebabCase('test-string-three-words-1')).toBe('test-string-three-words-1');
    });

    test('should handle empty strings', () => {
      expect(toKebabCase('')).toBe('');
    });
  });

  describe('toCamelCase', () => {
    test('should convert a single word to lowercase', () => {
      expect(toCamelCase('Test')).toBe('test');
    });

    test('should convert kebab-case to camelCase', () => {
      expect(toCamelCase('test-string-three-words-1')).toBe('testStringThreeWords1');
    });

    test('should convert PascalCase to camelCase', () => {
      expect(toCamelCase('TestStringThreeWords1')).toBe('testStringThreeWords1');
    });

    test('should convert camelCase to camelCase', () => {
      expect(toCamelCase('testStringThreeWords1')).toBe('testStringThreeWords1');
    });

    test('should handle empty strings', () => {
      expect(toCamelCase('')).toBe('');
    });
  });
});
