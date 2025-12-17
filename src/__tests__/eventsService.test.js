// src/__tests__/eventsService.test.js
import { getUpcomingEvents } from "../services/eventsService";

describe("Вимоги до визначення майбутніх заходів", () => {
  const events = [
    { id: 1, date: "2025-12-31" },
    { id: 2, date: "2020-01-01" },
    { id: 3 }
  ];

  test("Повертаються лише заходи з датою у майбутньому", () => {
    const now = new Date("2024-01-01");
    const result = getUpcomingEvents(events, now);

    expect(result.length).toBe(1);
    expect(result[0].id).toBe(1);
  });

  test("Якщо передано не масив — повертається порожній масив", () => {
    const result = getUpcomingEvents(null, new Date());
    expect(result).toEqual([]);
  });
});
