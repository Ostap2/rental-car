import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import axios from "axios";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const MOCKAPI_URL = "https://67b0c63a3fc4eef538e8608c.mockapi.io/adverts"

// Отримати всі оголошення
app.get("/api/adverts", async (req, res) => {
  try {
    const { data } = await axios.get(MOCKAPI_URL);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: "Помилка отримання даних" });
  }
});

// Отримати одне оголошення за ID
app.get("/api/adverts/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { data } = await axios.get(`${MOCKAPI_URL}/${id}`);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: "Помилка отримання оголошення" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Сервер запущено на порту ${PORT}`);
});
