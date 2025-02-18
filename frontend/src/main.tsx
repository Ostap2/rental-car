// index.tsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux"; // Імпортуємо Provider з react-redux
import "./index.css";
import App from "./App";
import { store } from "./store"; // Іменований імпорт

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>  {/* Обгортаємо додаток в Provider */}
      <App />
    </Provider>
  </StrictMode>
);
