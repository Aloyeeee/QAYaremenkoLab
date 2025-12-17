import { filterEventsByType, getFreeEvents } from "../utils/eventFilter";

describe("Вимоги до фільтрації заходів", () => {
  const events = [
    { id: 1, type: "music", price: 0 },
    { id: 2, type: "art", price: 100 },
    { id: 3, type: "music", price: 50 }
  ];

  test("Якщо тип не заданий — повертаються всі заходи", () => {
    const result = filterEventsByType(events, null);
    expect(result.length).toBe(3);
  });

  test("Повертаються лише заходи обраного типу", () => {
    const result = filterEventsByType(events, "music");
    expect(result.length).toBe(2);
  });

  test("Повертаються лише безкоштовні заходи", () => {
    const result = getFreeEvents(events);
    expect(result).toEqual([{ id: 1, type: "music", price: 0 }]);
  });
});
