export class Calendar {
    year: number;
    days: Array<{ day: number; date: Date; content: null }>;

    constructor(year: number = new Date().getFullYear()) {
        this.year = year;
        this.days = this.generateDays();
    }

    generateDays() {
        const days = [];
        for (let i = 1; i <= 24; i++) {
            days.push({
                day: i,
                date: new Date(this.year, 11, i), // December is month 11
                content: null // Placeholder for dynamic content
            });
        }
        return days;
    }

    renderCalendar(): HTMLElement {
        const calendarContainer = document.createElement('div');
        calendarContainer.className = 'calendar';

        this.days.forEach(day => {
            const dayElement = document.createElement('div');
            dayElement.className = 'calendar-day';
            dayElement.innerText = `Day ${day.day}`;
            dayElement.onclick = () => this.handleDayClick(day);
            calendarContainer.appendChild(dayElement);
        });

        return calendarContainer;
    }

    handleDayClick(day: { day: number }) {
        // Navigate to the day view via hash routing
        window.location.hash = `#/day/${day.day}`;
    }
}
 