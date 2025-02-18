// import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { addAdvert } from "../store/advertsSlice";
// import { AppDispatch } from "../store";

// const AddCarForm: React.FC = () => {
//   const dispatch = useDispatch<AppDispatch>();
//   const [car, setCar] = useState({
//     make: "",
//     model: "",
//     img: "",
//     rentalPrice: "",
//     mileage: "",
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setCar({ ...car, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     dispatch(addAdvert({ ...car, rentalPrice: Number(car.rentalPrice), mileage: Number(car.mileage) }));
//     setCar({ make: "", model: "", img: "", rentalPrice: "", mileage: "" });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input name="make" placeholder="Марка" value={car.make} onChange={handleChange} required />
//       <input name="model" placeholder="Модель" value={car.model} onChange={handleChange} required />
//       <input name="img" placeholder="URL зображення" value={car.img} onChange={handleChange} required />
//       <input name="rentalPrice" placeholder="Ціна за годину" type="number" value={car.rentalPrice} onChange={handleChange} required />
//       <input name="mileage" placeholder="Пробіг" type="number" value={car.mileage} onChange={handleChange} required />
//       <button type="submit">Додати авто</button>
//     </form>
//   );
// };

// export default AddCarForm;

