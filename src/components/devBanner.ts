// Dev banner component factory (extracted to avoid duplication between calendar & day views)
import { el, button } from '../utils/dom';
import { exitDevMode } from '../utils/devMode';

export function buildDevBanner(): HTMLElement {
  const devBanner = el('div', { className: 'dev-banner' });
  const bannerText = el('span', { textContent: 'Dev tools active' });
  const exitBtn = button('Exit dev mode', 'dev-exit-btn');
  exitBtn.addEventListener('click', exitDevMode);
  devBanner.appendChild(bannerText);
  devBanner.appendChild(exitBtn);
  return devBanner;
}
