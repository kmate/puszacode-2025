// Lock / Unlock all controls for calendar dev mode.
import { el, button } from '../utils/dom';

export function buildLockControls(): { unlockAll?: HTMLButtonElement; lockAll?: HTMLButtonElement } {
  let anyUnlocked = false;
  let anyLocked = false;
  for (let i = 1; i <= 24; i++) {
    const isUnlocked = localStorage.getItem(`day-unlocked-${i}`) === '1';
    if (isUnlocked) anyUnlocked = true; else anyLocked = true;
    if (anyUnlocked && anyLocked) break;
  }
  const result: { unlockAll?: HTMLButtonElement; lockAll?: HTMLButtonElement } = {};
  if (anyLocked) {
    const unlockAllBtn = button('🔓 Unlock All Days', 'unlock-all-btn');
    unlockAllBtn.addEventListener('click', () => {
      for (let i = 1; i <= 24; i++) localStorage.setItem(`day-unlocked-${i}`, '1');
      unlockAllBtn.textContent = '✅ All Unlocked – refreshing…';
      setTimeout(() => window.location.reload(), 600);
    });
    result.unlockAll = unlockAllBtn;
  }
  if (anyUnlocked) {
    const lockAllBtn = button('🔒 Lock All Days', 'lock-all-btn');
    lockAllBtn.addEventListener('click', () => {
      for (let i = 1; i <= 24; i++) localStorage.removeItem(`day-unlocked-${i}`);
      lockAllBtn.textContent = '🔐 All Locked – refreshing…';
      setTimeout(() => window.location.reload(), 600);
    });
    result.lockAll = lockAllBtn;
  }
  return result;
}
