export function filterEventsByType(events, type) {
    if (!type) {
      return events;
    }
  
    return events.filter(event => event.type === type);
  }
  
  export function getFreeEvents(events) {
    return events.filter(event => {
      if (event.price === undefined) {
        return false;
      }
      return event.price === 0;
    });
  }
  