// Code loading & base path utilities (extracted from day component).
// Behavior preserved; caching retained.

let codesCache: Record<string, string> | null = null;

export function getBase(): string {
  return ''; // Deployment-relative root as before
}

export async function loadCodes(): Promise<Record<string, string>> {
  if (codesCache) return codesCache;
  try {
    const res = await fetch(`${getBase()}codes.json`);
    if (!res.ok) throw new Error('codes.json missing');
    codesCache = await res.json() as Record<string, string>;
    return codesCache;
  } catch (e) {
    console.warn('Failed to load codes.json', e);
    codesCache = {};
    return codesCache;
  }
}
