import express from "express";
import cors from "cors";

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

let events = [
  { id: 1, name: "Концерт класичної музики" },
  { id: 2, name: "Виставка сучасного мистецтва" },
  { id: 3, name: "Театральна постановка" },
];

// Маршрут для отримання всіх подій
app.get("/events", (req, res) => {
  res.json(events);
});

// Додати нову подію (вразливе місце: без перевірки введення)
app.post("/events", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ error: "Назва події обов'язкова" });
  }
  const newEvent = { id: events.length + 1, name };
  events.push(newEvent);
  res.status(201).json(newEvent);
});

app.listen(PORT, () => {
  console.log(`Сервер запущено на порту ${PORT}`);
});
