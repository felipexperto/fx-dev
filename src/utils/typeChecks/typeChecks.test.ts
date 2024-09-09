import { isDefined, isNull } from './typeChecks';

describe('[Utils] isDefined', () => {
  test('should check if value is not undefined', () => {
    expect(isDefined(42)).toBe(true);
    expect(isDefined(null)).toBe(true);
    expect(isDefined('Hello')).toBe(true);
    expect(isDefined(false)).toBe(true);
    expect(isDefined(true)).toBe(true);
    expect(isDefined([])).toBe(true);
    expect(isDefined({})).toBe(true);
    expect(isDefined(undefined)).toBe(false);
  });
});

describe('[Utils] isNull', () => {
  test('should check if value is null', () => {
    expect(isNull(42)).toBe(false);
    expect(isNull('Hello')).toBe(false);
    expect(isNull(false)).toBe(false);
    expect(isNull(true)).toBe(false);
    expect(isNull(undefined)).toBe(false);
    expect(isNull([])).toBe(false);
    expect(isNull({})).toBe(false);
    expect(isNull(null)).toBe(true);
  });
});
