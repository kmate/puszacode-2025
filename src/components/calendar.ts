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

        // Get URL params for dev mode and simulated day
        const urlParams = new URLSearchParams(window.location.search);
        const devMode = urlParams.get('dev') === '1';
        const simulatedDay = urlParams.get('day');
        
        // Determine current day for visibility
        const now = new Date();
        let currentDay: number;
        
        if (simulatedDay) {
            // Use simulated day if provided
            currentDay = parseInt(simulatedDay, 10);
        } else if (now.getMonth() === 11 && now.getFullYear() === this.year) {
            // We're in December of the calendar year
            currentDay = now.getDate();
        } else {
            // Outside December - show no days (unless dev mode)
            currentDay = 0;
        }

        this.days.forEach(day => {
            const dayElement = document.createElement('div');
            dayElement.className = 'calendar-day';
            dayElement.innerText = `Day ${day.day}`;
            
            // Show day if: dev mode OR day is <= current day
            if (devMode || day.day <= currentDay) {
                dayElement.onclick = () => this.handleDayClick(day);
            } else {
                // Future day - make it look locked
                dayElement.classList.add('locked');
                dayElement.style.opacity = '0.4';
                dayElement.style.cursor = 'not-allowed';
            }
            
            calendarContainer.appendChild(dayElement);
        });

        return calendarContainer;
    }

    handleDayClick(day: { day: number }) {
        // Navigate to the day view via hash routing
        window.location.hash = `#/day/${day.day}`;
    }
}
 