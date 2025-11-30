import { verifyCode, sha256Hex } from '../utils/codeValidation';
import { mdToHtml } from '../utils/markdown';
import { loadCodes, getBase } from '../utils/codes';
import { isDevMode } from '../utils/devMode';
import { buildDevBanner } from './devBanner';
import { el, button } from '../utils/dom';

export function renderDay(dayNumber: number): HTMLElement {
  const devMode = isDevMode();
  const outer = el('div', { className: 'day-view-wrapper' });
  if (devMode) outer.appendChild(buildDevBanner());
  const container = el('div', { className: 'day-container' });
  const h1 = el('h1', { html: `Day <span id="day-number">${dayNumber}</span>` });
  container.appendChild(h1);
  const content = el('div', { id: 'content', textContent: 'Loading task…' });
  container.appendChild(content);

  // Load markdown for this day (Vite serves /public at root, omit /public prefix)
  const taskUrl = `${getBase()}tasks/day-${dayNumber}.md`;
  fetch(taskUrl)
    .then(r => r.ok ? r.text() : Promise.reject(new Error('Task not found')))
    .then(md => {
      content.innerHTML = mdToHtml(md);
    })
    .catch(() => {
      content.textContent = 'No task found for this day yet.';
    });

  // Code input + verification
  const codeContainer = el('div', { className: 'code-input-container' });
  const codeInput = el('input', { className: 'code-input' }) as HTMLInputElement;
  codeInput.type = 'text';
  codeInput.placeholder = 'Enter unlock code';
  codeContainer.appendChild(codeInput);
  const status = el('div', { className: 'code-status' });
  codeContainer.appendChild(status);
  const openBtn = button('Unlock Door', undefined, 'open-door');
  openBtn.disabled = false;
  codeContainer.appendChild(openBtn);
  container.appendChild(codeContainer);

  // Determine unlocked state from localStorage (dev mode still honors stored state so you can re-lock)
  const unlocked = localStorage.getItem(`day-unlocked-${dayNumber}`) === '1';
  const reveal = el('div', { className: 'door-reveal' });
  container.appendChild(reveal);
  if (!unlocked) {
    reveal.style.display = 'none';
  }
  function addLockButton() {
    if (!devMode) return;
    // Avoid duplicating
    if (codeContainer.querySelector('.lock-btn')) return;
    const lockBtn = button('🔒 Lock', 'lock-btn');
    lockBtn.addEventListener('click', () => {
      localStorage.removeItem(`day-unlocked-${dayNumber}`);
      window.location.reload();
    });
    codeContainer.appendChild(lockBtn);
  }

  if (unlocked) {
    status.textContent = '🍫 You already ate this chocolate!';
    openBtn.style.display = 'none';
    codeInput.style.display = 'none';
    addLockButton();
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
      status.textContent = devMode ? 'Dev mode: unlocked (test) 🍫' : '🍫 Here\'s where you can find your reward!';
      status.className = 'code-status code-status--success';
      // Persist unlocked state even in dev mode so lock button works consistently
      localStorage.setItem(`day-unlocked-${dayNumber}`, '1');
      isUnlocked = true;
      codeInput.disabled = true;
      // Remove the button once unlocked to match already-unlocked state
      openBtn.style.display = 'none';
      addLockButton();
      // Compute hash of the entered code to select image by hash filename
      let enteredHash: string | null = null;
      try {
        // Use Web Crypto helper (statically imported) to get sha256 hex
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
    const img = el('img') as HTMLImageElement;
    img.alt = `Unlocked image for day ${dayNumber}`;
    const srcByHash = hash ? `${getBase()}assets/day-${dayNumber}-${hash}.svg` : '';
    img.src = srcByHash || `${getBase()}assets/day-${dayNumber}.svg`;
    img.onerror = () => {
      // If hash image missing, try fallback to day-N.svg once
      if (srcByHash) {
        img.onerror = () => { img.style.display = 'none'; status.textContent += ' (image missing)'; };
        img.src = `${getBase()}assets/day-${dayNumber}.svg`;
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

  outer.appendChild(container);
  return outer;
}
