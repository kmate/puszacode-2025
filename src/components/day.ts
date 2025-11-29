import { verifyCode } from '../utils/codeValidation';
import Prism from 'prismjs';
import 'prismjs/components/prism-java';
import 'prismjs/themes/prism-tomorrow.css';

let codesCache: Record<string, string> | null = null;

function getBase(): string {
  // Use relative paths so deployment under subpaths (e.g., GitHub Pages) works without import.meta
  return '';
}

async function loadCodes(): Promise<Record<string, string>> {
  if (codesCache) return codesCache as Record<string, string>;
  try {
  const base = getBase();
  const res = await fetch(`${base}codes.json`);
    if (!res.ok) throw new Error('codes.json missing');
    codesCache = await res.json() as Record<string, string>;
    return codesCache as Record<string, string>;
  } catch (e) {
    console.warn('Failed to load codes.json', e);
    codesCache = {};
    return codesCache as Record<string, string>;
  }
}

function mdToHtml(md: string): string {
  // Minimal Markdown converter for headings, bold, italics, code, lists, inline code
  // IMPORTANT: Process code blocks BEFORE inline code to avoid conflicts
  
  // Code blocks with language support (e.g., ```java) - process FIRST
  let html = md.replace(/```(\w+)?\n?([\s\S]*?)```/g, (match, lang, code) => {
    const language = lang || 'java'; // Default to Java
    const trimmedCode = code.trim();
    
    try {
      // Highlight with Prism
      const highlighted = Prism.highlight(
        trimmedCode,
        Prism.languages[language] || Prism.languages.java,
        language
      );
      return `<pre class="language-${language}"><code class="language-${language}">${highlighted}</code></pre>`;
    } catch (e) {
      // Fallback if highlighting fails
      return `<pre class="language-${language}"><code class="language-${language}">${trimmedCode}</code></pre>`;
    }
  });
  
  // Now process the rest of markdown (headings, bold, inline code, lists)
  html = html
    .replace(/^###\s+(.*)$/gm, '<h3>$1</h3>')
    .replace(/^##\s+(.*)$/gm, '<h2>$1</h2>')
    .replace(/^#\s+(.*)$/gm, '<h1>$1</h1>')
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/^\s*[-*]\s+(.*)$/gm, '<li>$1</li>');
  
  // Wrap consecutive list items with <ul>
  html = html.replace(/((<li>[\s\S]*?<\/li>\n?)+)/g, (m) => `<ul>${m.replace(/\n/g, '')}</ul>`);
  
  // Remove empty lines to prevent extra spacing
  html = html.replace(/^\s*$/gm, '');
  
  // Paragraphs (only for non-empty lines that aren't already tags)
  html = html.replace(/^(?!<h\d|<ul|<pre|<li)(.+)$/gm, '<p>$1</p>');
  return html;
}

export function renderDay(dayNumber: number): HTMLElement {
  const container = document.createElement('div');
  container.className = 'day-container';

  // Dev backdoor: check for ?dev=1 query parameter to bypass verification
  const urlParams = new URLSearchParams(window.location.search);
  const devMode = urlParams.get('dev') === '1';

  const h1 = document.createElement('h1');
  h1.innerHTML = `Day <span id="day-number">${dayNumber}</span>`;
  container.appendChild(h1);

  const content = document.createElement('div');
  content.id = 'content';
  content.textContent = 'Loading task…';
  container.appendChild(content);

  // Load markdown for this day (Vite serves /public at root, omit /public prefix)
  const base = getBase();
  const taskUrl = `${base}tasks/day-${dayNumber}.md`;
  fetch(taskUrl)
    .then(r => r.ok ? r.text() : Promise.reject(new Error('Task not found')))
    .then(md => {
      content.innerHTML = mdToHtml(md);
    })
    .catch(() => {
      content.textContent = 'No task found for this day yet.';
    });

  // Code input + verification
  const codeContainer = document.createElement('div');
  codeContainer.className = 'code-input-container';

  const codeInput = document.createElement('input');
  codeInput.type = 'text';
  codeInput.placeholder = 'Enter unlock code';
  codeInput.className = 'code-input';
  codeContainer.appendChild(codeInput);

  const status = document.createElement('div');
  status.className = 'code-status';
  codeContainer.appendChild(status);

  const openBtn = document.createElement('button');
  openBtn.id = 'open-door';
  openBtn.textContent = 'Unlock Door';
  openBtn.disabled = false; // allow click to attempt unlock
  codeContainer.appendChild(openBtn);
  container.appendChild(codeContainer);

  // In dev mode, don't check localStorage (test fresh each time)
  const unlocked = devMode ? false : localStorage.getItem(`day-unlocked-${dayNumber}`) === '1';

  const reveal = document.createElement('div');
  reveal.className = 'door-reveal';
  container.appendChild(reveal);
  if (!unlocked) {
    reveal.style.display = 'none';
  }
  if (unlocked) {
    status.textContent = 'Door already unlocked.';
    openBtn.style.display = 'none';
    codeInput.style.display = 'none';
    // Load expected hash and show image by hash to avoid missing fallback
    loadCodes().then(c => {
      const expectedHash = c[String(dayNumber)] || null;
      loadImage(expectedHash);
    }).catch(() => {
      loadImage();
    });
  }

  let isUnlocked = unlocked;

  async function attemptUnlock() {
    const value = codeInput.value.trim();
    if (!value) {
      status.textContent = 'Enter a code.';
      status.className = 'code-status code-status--error';
      return;
    }
    status.textContent = 'Checking…';
    status.className = 'code-status';
  const codes = await loadCodes();
  const ok = devMode ? true : await verifyCode(dayNumber, value, codes);
    if (ok) {
      status.textContent = devMode ? 'Dev mode: auto-unlocked.' : 'Code accepted! Door unlocked.';
      status.className = 'code-status code-status--success';
      if (!devMode) {
        localStorage.setItem(`day-unlocked-${dayNumber}`, '1');
      }
      isUnlocked = true;
      codeInput.disabled = true;
      // Remove the button once unlocked to match already-unlocked state
      openBtn.style.display = 'none';
      // Compute hash of the entered code to select image by hash filename
      let enteredHash: string | null = null;
      try {
        // Use Web Crypto via helper to get sha256 hex
        const { sha256Hex } = await import('../utils/codeValidation');
        enteredHash = await sha256Hex(value);
      } catch (e) {
        console.warn('Failed to compute hash from entered code, falling back to expected hash.', e);
      }
      // Select image hash:
      // - In dev mode, always use expected hash from codes.json so images resolve
      // - Otherwise prefer the computed entered hash, fallback to expected
      const hashForImage = devMode
        ? (codes[String(dayNumber)] || null)
        : (enteredHash || codes[String(dayNumber)] || null);
      loadImage(hashForImage);
    } else {
      status.textContent = 'Incorrect code.';
      status.className = 'code-status code-status--error';
    }
  }
  codeInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !isUnlocked) attemptUnlock();
  });

  function loadImage(hash?: string | null) {
    const img = document.createElement('img');
    img.alt = `Unlocked image for day ${dayNumber}`;
    // Prefer hash-based filenames to prevent guessing. Fallback to day-N.svg if missing
  const base = getBase();
  const srcByHash = hash ? `${base}assets/day-${dayNumber}-${hash}.svg` : '';
  img.src = srcByHash || `${base}assets/day-${dayNumber}.svg`;
    img.onerror = () => {
      // If hash image missing, try fallback to day-N.svg once
      if (srcByHash) {
        img.onerror = () => { img.style.display = 'none'; status.textContent += ' (image missing)'; };
  img.src = `${base}assets/day-${dayNumber}.svg`;
      } else {
        img.style.display = 'none';
        status.textContent += ' (image missing)';
      }
    };
    reveal.innerHTML = '';
    reveal.appendChild(img);
    reveal.style.display = 'flex';
  }

  openBtn.addEventListener('click', () => {
    if (!isUnlocked) {
      attemptUnlock();
    }
  });

  return container;
}
