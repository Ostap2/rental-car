import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

// Тип для оголошення авто
interface Car {
  id: number;
  img: string;
  make: string;
  model: string;
  rentalPrice: number;
}

// Отримати всі оголошення
export const fetchAdverts = async (): Promise<Car[]> => {
  const response = await axios.get(`${API_URL}/api/adverts`);
  return response.data;
};

// Отримати одне оголошення
export const fetchAdvertById = async (id: number): Promise<Car> => {
  const response = await axios.get(`${API_URL}/api/adverts/${id}`);
  return response.data;
};
