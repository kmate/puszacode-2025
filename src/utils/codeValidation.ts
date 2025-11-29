export async function sha256Hex(text: string): Promise<string> {
  const data = new TextEncoder().encode(text.trim());
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

export async function verifyCode(day: number, input: string, codes: Record<string, string>): Promise<boolean> {
  const expected = codes[String(day)];
  if (!expected) return false;
  const actual = await sha256Hex(input);
  return actual.toLowerCase() === expected.toLowerCase();
}
