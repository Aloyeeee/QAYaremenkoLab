// src/__tests__/integration.test.js
import React from "react";
import { render, screen } from "@testing-library/react";
import EventList from "../components/EventList";
import * as eventsService from "../services/eventsService";

describe("Integration test: EventList and eventsService", () => {
  const MOCK_EVENTS = [
    { id: 1, title: "Концерт", type: "music", date: "2025-12-20", price: 0 },
    { id: 2, title: "Виставка", type: "art", date: "2023-01-10", price: 100 },
    { id: 3, title: "Лекція", type: "education", date: "2026-01-15", price: 0 }
  ];

  beforeEach(() => {
    // Spy/Mock для getUpcomingEvents
    jest.spyOn(eventsService, "getUpcomingEvents").mockImplementation((events) => {
      return events.filter(e => new Date(e.date) >= new Date("2025-01-01"));
    });
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test("EventList показує тільки майбутні події", () => {
    render(<EventList events={MOCK_EVENTS} />);

    expect(screen.getByText("Концерт")).toBeInTheDocument();
    expect(screen.getByText("Лекція")).toBeInTheDocument();

    expect(screen.queryByText("Виставка")).toBeNull();
  });

  test("getUpcomingEvents викликана один раз з правильними аргументами", () => {
    render(<EventList events={MOCK_EVENTS} />);
    expect(eventsService.getUpcomingEvents).toHaveBeenCalledTimes(1);
    expect(eventsService.getUpcomingEvents).toHaveBeenCalledWith(MOCK_EVENTS, expect.any(Date));
  });
});
