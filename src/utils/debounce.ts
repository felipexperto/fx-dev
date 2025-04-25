export function debounce<T extends (...args: any[]) => any>(
  callbackFn: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timeoutId: ReturnType<typeof setTimeout>;

  return function (this: unknown, ...args: Parameters<T>): void {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      callbackFn.apply(this, args);
    }, delay);
  };
}
