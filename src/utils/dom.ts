// DOM helper utilities to reduce repetition when creating elements.
// Non-behavioral refactor: purely reorganizes existing element creation patterns.

export function el<K extends keyof HTMLElementTagNameMap>(tag: K, opts: {
  className?: string;
  textContent?: string;
  id?: string;
  html?: string;
  attrs?: Record<string, string>;
} = {}): HTMLElementTagNameMap[K] {
  const node = document.createElement(tag);
  if (opts.className) node.className = opts.className;
  if (opts.textContent !== undefined) node.textContent = opts.textContent;
  if (opts.id) node.id = opts.id;
  if (opts.html !== undefined) node.innerHTML = opts.html;
  if (opts.attrs) {
    for (const [k,v] of Object.entries(opts.attrs)) node.setAttribute(k, v);
  }
  return node;
}

export function button(text: string, className?: string, id?: string): HTMLButtonElement {
  const b = el('button', { textContent: text, className }) as HTMLButtonElement;
  if (id) b.id = id;
  b.type = 'button';
  return b;
}
