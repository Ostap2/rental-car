import { useState } from "react";

const API_URL = import.meta.env.VITE_API_URL;

const AddCarForm: React.FC = () => {
  const [car, setCar] = useState({
    year: "",
    make: "",
    model: "",
    type: "",
    img: "",
    description: "",
    fuelConsumption: "",
    engineSize: "",
    accessories: "",
    functionalities: "",
    rentalCompany: "",
    address: "",
    rentalConditions: "",
    mileage: "",
    rentalPrice: "", // Додано нове поле для ціни
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCar({ ...car, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newCar = {
      ...car,
      year: Number(car.year),
      fuelConsumption: Number(car.fuelConsumption),
      engineSize: Number(car.engineSize),
      mileage: Number(car.mileage),
      rentalPrice: Number(car.rentalPrice), // Перетворення на число
      accessories: car.accessories.split(","),
      functionalities: car.functionalities.split(","),
    };

    try {
      const response = await fetch(`${API_URL}/adverts`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newCar),
      });
      const data = await response.json();
      console.log("Додано авто:", data);
    } catch (error) {
      console.error("Помилка:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="year" placeholder="Рік" type="number" value={car.year} onChange={handleChange} required />
      <input name="make" placeholder="Марка" value={car.make} onChange={handleChange} required />
      <input name="model" placeholder="Модель" value={car.model} onChange={handleChange} required />
      <input name="type" placeholder="Тип" value={car.type} onChange={handleChange} required />
      <input name="img" placeholder="URL зображення" value={car.img} onChange={handleChange} required />
      <input name="description" placeholder="Опис" value={car.description} onChange={handleChange} required />
      <input name="fuelConsumption" placeholder="Витрати пального" type="number" value={car.fuelConsumption} onChange={handleChange} required />
      <input name="engineSize" placeholder="Об'єм двигуна" type="number" value={car.engineSize} onChange={handleChange} required />
      <input name="accessories" placeholder="Аксесуари (через кому)" value={car.accessories} onChange={handleChange} required />
      <input name="functionalities" placeholder="Функціональність (через кому)" value={car.functionalities} onChange={handleChange} required />
      <input name="rentalCompany" placeholder="Компанія оренди" value={car.rentalCompany} onChange={handleChange} required />
      <input name="address" placeholder="Адреса" value={car.address} onChange={handleChange} required />
      <input name="rentalConditions" placeholder="Умови оренди" value={car.rentalConditions} onChange={handleChange} required />
      <input name="mileage" placeholder="Пробіг" type="number" value={car.mileage} onChange={handleChange} required />
      <input name="rentalPrice" placeholder="Ціна оренди" type="number" value={car.rentalPrice} onChange={handleChange} required /> {/* Нове поле */}
      <button type="submit">Додати авто</button>
    </form>
  );
};

export default AddCarForm;
