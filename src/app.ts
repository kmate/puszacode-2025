// This file serves as the entry point of the application. It initializes the application, sets up routing, and handles the rendering of pages.

import { Calendar } from './components/calendar';
import { renderDay } from './components/day';

const mount = (el: HTMLElement, node: HTMLElement) => {
    el.innerHTML = '';
    el.appendChild(node);
};

const router = () => {
    const root = document.getElementById('app');
    if (!root) return;

    const hash = window.location.hash;
    const dayMatch = hash.match(/^#\/day\/(\d{1,2})$/);
    if (dayMatch) {
        const dayNum = parseInt(dayMatch[1], 10);
        mount(root, renderDay(dayNum));
        return;
    }

    const calendar = new Calendar();
    mount(root, calendar.renderCalendar());
};

const app = () => {
    router();
    window.addEventListener('hashchange', router);
};

document.addEventListener('DOMContentLoaded', app);
