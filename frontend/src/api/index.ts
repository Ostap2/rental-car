import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const fetchData = async () => {
  const response = await axios.get(`${API_URL}/your-endpoint`);
  return response.data;
};
