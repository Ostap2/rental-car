import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadAdverts, selectAdverts } from "../store/advertsSlice";
import { Car } from "../store/advertsSlice";
import { RootState, AppDispatch } from "../store";

import CarCard from "./CarCard";
import CarModal from "./CarModal";
import { FilterContainer, Select, Input, Button, CatalogContainer, CarCardList } from "../components/Styled/Styled";

const Catalog: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const adverts = useSelector(selectAdverts);
  const status = useSelector((state: RootState) => state.adverts.status);

  const [selectedCar, setSelectedCar] = useState<Car | null>(null);
  const [filters, setFilters] = useState({
    make: "",
    price: "",
    minMileage: "",
    maxMileage: "",
  });
  const [favorites, setFavorites] = useState<Car[]>([]);
  const [page, setPage] = useState(1);
  const adsPerPage = 12;

  useEffect(() => {
    dispatch(loadAdverts());
  }, [dispatch]);

  useEffect(() => {
    const savedFavorites = localStorage.getItem("favorites");
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const availablePrices = Array.from(
    new Set(adverts.map((car) => car.rentalPrice))
  ).sort((a, b) => a - b);

  const availableMakes = Array.from(new Set(adverts.map((car) => car.make)));

  const filteredCars = (adverts as Car[]).filter((car) => {
    return (
      (filters.make === "" || car.make === filters.make) &&
      (filters.price === "" || car.rentalPrice <= Number(filters.price)) &&
      (filters.minMileage === "" || car.mileage >= Number(filters.minMileage)) &&
      (filters.maxMileage === "" || car.mileage <= Number(filters.maxMileage))
    );
  });

  const totalPages = Math.ceil(filteredCars.length / adsPerPage);
  const displayedCars = filteredCars.slice(0, page * adsPerPage);

  const handleLoadMore = () => {
    if (page < totalPages) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const handleFavoriteToggle = (car: Car) => {
    setFavorites((prevFavorites) => {
      if (prevFavorites.some((fav) => fav.id === car.id)) {
        return prevFavorites.filter((fav) => fav.id !== car.id);
      } else {
        return [...prevFavorites, car];
      }
    });
  };

  if (status === "loading") return <p>Завантаження...</p>;
  if (status === "failed") return <p>Помилка завантаження</p>;

  return (
    <CatalogContainer>
      <h1>Каталог авто</h1>
      <FilterContainer>
        <Select
          value={filters.make}
          onChange={(e) => setFilters({ ...filters, make: e.target.value })}
        >
          <option value="">Всі марки</option>
          {availableMakes.map((make) => (
            <option key={make} value={make}>
              {make}
            </option>
          ))}
        </Select>

        <Select
          value={filters.price}
          onChange={(e) => setFilters({ ...filters, price: e.target.value })}
        >
          <option value="">Всі ціни</option>
          {availablePrices.map((price) => (
            <option key={price} value={price}>
              {price} $
            </option>
          ))}
        </Select>

        <Input
          type="number"
          placeholder="Мін. пробіг"
          value={filters.minMileage}
          onChange={(e) => setFilters({ ...filters, minMileage: e.target.value })}
        />

        <Input
          type="number"
          placeholder="Макс. пробіг"
          value={filters.maxMileage}
          onChange={(e) => setFilters({ ...filters, maxMileage: e.target.value })}
        />

        <Button onClick={() => setFilters({ make: "", price: "", minMileage: "", maxMileage: "" })}>
          Скинути фільтри
        </Button>
      </FilterContainer>

      <CarCardList>
        {displayedCars.map((car) => {
          const isFavorite = favorites.some((fav) => fav.id === car.id);

          return (
            <CarCard
              key={car.id}
              car={car}
              onClick={() => setSelectedCar(car)}
              onFavoriteToggle={handleFavoriteToggle}
              isFavorite={isFavorite}
            />
          );
        })}
      </CarCardList>

      {selectedCar && (
        <CarModal
          car={selectedCar}
          onClose={() => setSelectedCar(null)}
          onFavoriteToggle={handleFavoriteToggle}
          isFavorite={favorites.some((fav) => fav.id === selectedCar.id)}
        />
      )}

      {page < totalPages && <Button onClick={handleLoadMore}>Завантажити більше</Button>}
    </CatalogContainer>
  );
};

export default Catalog;
