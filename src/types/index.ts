export interface Day {
    date: string;
    isOpen: boolean;
    content: string;
}

export interface CalendarEvent {
    day: Day;
    title: string;
    description: string;
}