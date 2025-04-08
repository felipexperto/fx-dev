export function isWindowDefined() {
  return typeof window !== 'undefined';
}

export function redirectTo(url: string) {
  if (isWindowDefined()) window.location.assign(url);
}

export function reloadPage() {
  if (isWindowDefined()) window.location.reload();
}
