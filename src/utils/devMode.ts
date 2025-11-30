// Dev mode utilities.

export function isDevMode(): boolean {
  return new URLSearchParams(window.location.search).get('dev') === '1';
}

export function exitDevMode(): void {
  const params = new URLSearchParams(window.location.search);
  params.delete('dev');
  const newSearch = params.toString();
  const newUrl = window.location.origin + window.location.pathname + (newSearch ? ('?' + newSearch) : '') + window.location.hash;
  window.location.href = newUrl;
}
