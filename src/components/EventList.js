import React from "react";
import { getUpcomingEvents } from "../services/eventsService";
import { filterEventsByType } from "../utils/eventFilter";

const MOCK_EVENTS = [
  { id: 1, title: "Концерт", type: "music", date: "2025-12-20", price: 0 },
  { id: 2, title: "Виставка", type: "art", date: "2024-01-10", price: 50 }
];

const EventList = () => {
  const upcoming = getUpcomingEvents(MOCK_EVENTS, new Date());
  const musicEvents = filterEventsByType(upcoming, "music");

  return (
    <ul>
      {musicEvents.map(event => (
        <li key={event.id}>{event.title}</li>
      ))}
    </ul>
  );
};

export default EventList;
