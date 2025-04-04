import { redirectTo, reloadPage, isWindowDefined } from './browserUtils';

describe('[Utils] - browserUtils', () => {
  beforeEach(() => {
    delete (window as any).location;
    (window as any).location = {
      assign: jest.fn(),
      reload: jest.fn(),
    };
  });

  test('should return window exists', () => {
    const windowExists = isWindowDefined();
    expect(windowExists).toBe(true);
  });

  test('should redirect to correct page', () => {
    redirectTo('/xablau');

    expect(window.location.assign).toHaveBeenCalledTimes(1);
    expect(window.location.assign).toHaveBeenCalledWith('/xablau');
  });

  test('should reload page', () => {
    reloadPage();
    expect(window.location.reload).toHaveBeenCalledTimes(1);
  });
});
