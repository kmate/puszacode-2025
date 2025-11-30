import { isDevMode } from '../utils/devMode';
import { buildDevBanner } from './devBanner';
import { buildLockControls } from './lockControls';
import { el } from '../utils/dom';

interface CalendarDayMeta { day: number; date: Date; content: null }

export class Calendar {
    year: number;
    days: Array<CalendarDayMeta>;

    constructor(year: number = new Date().getFullYear()) {
        this.year = year;
        this.days = this.generateDays();
    }

    private generateDays(): Array<CalendarDayMeta> {
        const days: Array<CalendarDayMeta> = [];
        for (let i = 1; i <= 24; i++) {
            days.push({ day: i, date: new Date(this.year, 11, i), content: null });
        }
        return days;
    }

    private currentVisibleDay(): number {
        const urlParams = new URLSearchParams(window.location.search);
        const simulatedDay = urlParams.get('day');
        if (simulatedDay) return parseInt(simulatedDay, 10);
        const now = new Date();
        if (now.getMonth() === 11 && now.getFullYear() === this.year) return now.getDate();
        return 0; // outside December
    }

    renderCalendar(): HTMLElement {
        const wrapper = el('div');
        const calendarContainer = el('div', { className: 'calendar' });
        const devMode = isDevMode();
        const currentDay = this.currentVisibleDay();

        this.days.forEach(day => {
            const dayElement = el('div', { className: 'calendar-day', textContent: `Day ${day.day}` });
            if (devMode || day.day <= currentDay) {
                dayElement.onclick = () => this.handleDayClick(day);
            } else {
                dayElement.classList.add('locked');
                dayElement.style.opacity = '0.4';
                dayElement.style.cursor = 'not-allowed';
            }
            calendarContainer.appendChild(dayElement);
        });

        if (devMode) wrapper.appendChild(buildDevBanner());
        wrapper.appendChild(calendarContainer);

        if (devMode) {
            const { unlockAll, lockAll } = buildLockControls();
            if (unlockAll) wrapper.appendChild(unlockAll);
            if (lockAll) wrapper.appendChild(lockAll);
        }
        return wrapper;
    }

    private handleDayClick(day: { day: number }) {
        window.location.hash = `#/day/${day.day}`;
    }
}
 