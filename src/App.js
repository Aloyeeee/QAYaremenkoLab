import React from "react";
import EventList from "./components/EventList";

const App = () => {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <header>
        <h1>Культурні заходи МФК СумДУ</h1>
        <p>
          Ласкаво просимо на платформу для перегляду та відстеження всіх культурних заходів МФК СумДУ.
          Тут ви можете знайти концерти, виставки, лекції та інші події, що відбуваються в університеті.
        </p>
      </header>

      <section style={{ marginTop: "30px" }}>
        <h2>Фільтри подій</h2>
        <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
          <select>
            <option value="">Всі типи</option>
            <option value="music">Концерти</option>
            <option value="lecture">Лекції</option>
            <option value="exhibition">Виставки</option>
          </select>
          <input type="date" />
          <button>Застосувати</button>
        </div>
      </section>

      <section style={{ marginTop: "30px" }}>
        <h2>Найближчі події</h2>
        <EventList />
      </section>

      <section style={{ marginTop: "30px" }}>
        <h2>Додати подію</h2>
        <p>Якщо ви адміністратор, ви можете додати нову подію:</p>
        <button id="addEvent">Додати подію</button>
      </section>

      <footer style={{ marginTop: "50px", borderTop: "1px solid #ccc", paddingTop: "10px" }}>
        <p>&copy; 2025 МФК СумДУ. Всі права захищені.</p>
      </footer>
    </div>
  );
};

export default App;
