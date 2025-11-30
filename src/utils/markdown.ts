// Markdown conversion implemented with markdown-it for robust parsing.
import Prism from 'prismjs';
import 'prismjs/components/prism-java';
import 'prismjs/themes/prism-tomorrow.css';
import MarkdownIt from 'markdown-it';

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

const mdParser = new MarkdownIt({
  html: false,
  breaks: false,
  linkify: true,
  typographer: true,
  highlight: (str: string, lang?: string) => {
    // For ASCII art or when language not recognized, render raw
    if (!lang || !(Prism.languages as any)[lang]) {
      return `<pre><code>${escapeHtml(str)}</code></pre>`;
    }
    try {
      const highlighted = Prism.highlight(str, (Prism.languages as any)[lang], lang);
      return `<pre class="language-${lang}"><code class="language-${lang}">${highlighted}</code></pre>`;
    } catch {
      return `<pre><code>${escapeHtml(str)}</code></pre>`;
    }
  }
});

export function mdToHtml(md: string): string {
  return mdParser.render(md);
}
