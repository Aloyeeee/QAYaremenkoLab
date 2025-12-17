// src/components/EventList.js
import React from "react";
import { getUpcomingEvents, filterEventsByType } from "../services/eventsService";

const DEFAULT_EVENTS = [
  { id: 1, title: "Концерт", type: "music", date: "2025-12-20", price: 0 },
  { id: 2, title: "Виставка", type: "art", date: "2023-01-10", price: 100 },
  { id: 3, title: "Лекція", type: "education", date: "2026-01-15", price: 0 }
];

function EventList({ events = DEFAULT_EVENTS }) {
  const upcoming = getUpcomingEvents(events, new Date());
  // Для інтеграційного тесту показуємо всі майбутні події
  const displayedEvents = upcoming;

  return (
    <ul>
      {displayedEvents.map(event => (
        <li key={event.id}>{event.title}</li>
      ))}
    </ul>
  );
}

export default EventList;
