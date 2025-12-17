export function getUpcomingEvents(events, currentDate) {
    if (!Array.isArray(events)) {
      return [];
    }
  
    return events.filter(event => {
      if (!event.date) return false;
  
      const eventDate = new Date(event.date);
      return eventDate >= currentDate;
    });
  }
  