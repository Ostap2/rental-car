import axios from "axios";
import { Car } from "../store/advertsSlice"; 
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

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
