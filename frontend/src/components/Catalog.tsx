import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadAdverts, selectAdverts } from "../store/advertsSlice";
import { RootState, AppDispatch } from "../store";
import CarCard from "./CarCard";
import CarModal from "./CarModal";
import { FilterContainer, Select, Input, Button, CatalogContainer } from "../components/Styled/Styled";
import { Car } from "../store/advertsSlice";


const Catalog: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const adverts = useSelector(selectAdverts);
  const status = useSelector((state: RootState) => state.adverts.status);

  const [selectedCar, setSelectedCar] = useState<Car | null>(null);
  const [filters, setFilters] = useState({
    make: "",
    type: "",
    price: "",
  });

  useEffect(() => {
    dispatch(loadAdverts());
  }, [dispatch]);

const filteredCars = (adverts as Car[]).filter((car) => {
  return (
    (filters.make === "" || car.make === filters.make) &&
    (filters.type === "" || car.type === filters.type) &&
    (filters.price === "" || car.rentalPrice <= Number(filters.price))
  );
});

  

  if (status === "loading") return <p>Завантаження...</p>;
  if (status === "failed") return <p>Помилка завантаження</p>;

  return (
    <CatalogContainer>
      <h1>Каталог авто</h1>
      <FilterContainer>
        <Select onChange={(e) => setFilters({ ...filters, make: e.target.value })}>
          <option value="">Всі марки</option>
          {Array.from(new Set(adverts.map((car) => car.make))).map((make) => (
            <option key={make} value={make}>
              {make}
            </option>
          ))}
        </Select>
        <Select onChange={(e) => setFilters({ ...filters, type: e.target.value })}>
          <option value="">Всі типи</option>
          {Array.from(new Set(adverts.map((car) => car.type))).map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </Select>
        <Input
          type="number"
          placeholder="Макс. ціна"
          onChange={(e) => setFilters({ ...filters, price: e.target.value })}
        />
        <Button onClick={() => setFilters({ make: "", type: "", price: "" })}>Скинути фільтр</Button>
      </FilterContainer>

      <ul>
        {filteredCars.map((car) => (
          <CarCard key={car.id} car={car} onClick={() => setSelectedCar(car)} />
        ))}
      </ul>

      {selectedCar && <CarModal car={selectedCar} onClose={() => setSelectedCar(null)} />}
    </CatalogContainer>
  );
};

export default Catalog;
