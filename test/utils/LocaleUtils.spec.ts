import { describe, it, expect } from 'vitest';
import { getLocaleType } from '../../src/utils/LocaleUtils';

describe('getLocaleType', () => {
  it('should return default locale if no props are provided', () => {
    const result = getLocaleType();
    expect(result).toBe('en-US');
  });

  it('should return default locale if the pathname does not contain any supported locale', () => {
    const result = getLocaleType({ location: { pathname: '/example/path/routes/many' } });
    expect(result).toBe('en-US');
  });

  it('should return the locale from the pathname if it is supported', () => {
    const result = getLocaleType({ location: { pathname: '/zh-CN/example/path' } });
    expect(result).toBe('zh-CN');
  });

  it('should return the first supported locale found in the pathname', () => {
    const result = getLocaleType({ location: { pathname: '/en-US/zh-CN/example/path' } });
    expect(result).toBe('en-US');
  });
});
