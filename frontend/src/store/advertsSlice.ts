import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "./index";

// URL API
const API_URL = "https://67b0c63a3fc4eef538e8608c.mockapi.io/adverts";



// Тип для авто
export interface Car {
  id: string;
  make: string;
  model: string;
  img: string;
  rentalPrice: number;
  mileage: number;
  type: string;
  year: number;
  fuelConsumption: number;
  engineSize: number;
  accessories: string[];
  functionalities: string[]; // Додано
  rentalCompany: string; // Додано
  address: string; // Додано
  rentalConditions: string; // Додано
}



// Стан Redux
interface AdvertsState {
  items: Car[];
  status: "idle" | "loading" | "succeeded" | "failed";
}

const initialState: AdvertsState = {
  items: [],
  status: "idle",
};

// Завантаження всіх авто
export const loadAdverts = createAsyncThunk<Car[]>(
  "adverts/loadAdverts",
  async () => {
    const response = await axios.get<Car[]>(API_URL);
    return response.data.map((car) => ({
      ...car,
      functionalities: car.functionalities || [],
      rentalCompany: car.rentalCompany || "Невідомий орендодавець",
      address: car.address || "Невідома адреса",
      rentalConditions: car.rentalConditions || "Немає умов",
    }));
  }
);



// Додавання нового авто
export const addAdvert = createAsyncThunk<Car, Omit<Car, "id">>(
  "adverts/addAdvert",
  async (newAdvert) => {
    const response = await axios.post<Car>(API_URL, newAdvert);
    return response.data;
  }
);

const advertsSlice = createSlice({
  name: "adverts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadAdverts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(loadAdverts.fulfilled, (state, action: PayloadAction<Car[]>) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(loadAdverts.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(addAdvert.fulfilled, (state, action: PayloadAction<Car>) => {
        state.items.push(action.payload);
      });
  },
});

export default advertsSlice.reducer;
export const selectAdverts = (state: RootState) => state.adverts.items;
