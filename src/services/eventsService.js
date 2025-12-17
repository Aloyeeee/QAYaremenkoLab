// src/services/eventsService.js

// Повертає лише майбутні події
export function getUpcomingEvents(events, currentDate) {
    if (!Array.isArray(events)) return [];       // Якщо не масив — порожній масив
    return events.filter(event => event.date && new Date(event.date) >= currentDate);
  }
  
  // Фільтрація за типом події
  export function filterEventsByType(events, type) {
    if (!Array.isArray(events)) return [];
    return events.filter(event => event.type === type);
  }
  