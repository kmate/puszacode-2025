// Markdown conversion logic extracted from day component.
// Behavior preserved exactly.
import Prism from 'prismjs';
import 'prismjs/components/prism-java';
import 'prismjs/themes/prism-tomorrow.css';

export function mdToHtml(md: string): string {
  let html = md.replace(/```(\w+)?\n?([\s\S]*?)```/g, (match, lang, code) => {
    const language = lang || 'java';
    const trimmedCode = code.trim();
    try {
      const highlighted = Prism.highlight(
        trimmedCode,
        (Prism.languages as any)[language] || Prism.languages.java,
        language
      );
      return `<pre class="language-${language}"><code class="language-${language}">${highlighted}</code></pre>`;
    } catch {
      return `<pre class="language-${language}"><code class="language-${language}">${trimmedCode}</code></pre>`;
    }
  });

  html = html
    .replace(/^###\s+(.*)$/gm, '<h3>$1</h3>')
    .replace(/^##\s+(.*)$/gm, '<h2>$1</h2>')
    .replace(/^#\s+(.*)$/gm, '<h1>$1</h1>')
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/^\s*[-*]\s+(.*)$/gm, '<li>$1</li>');

  html = html.replace(/((<li>[\s\S]*?<\/li>\n?)+)/g, m => `<ul>${m.replace(/\n/g, '')}</ul>`);

  const blocks = html.split(/\n\n+/);
  html = blocks.map(block => {
    const trimmed = block.trim();
    if (/^<(h\d|ul|pre|li|strong)/.test(trimmed)) return trimmed;
    return trimmed ? `<p>${trimmed.replace(/\n/g, '<br>')}</p>` : '';
  }).filter(Boolean).join('\n');

  return html;
}
