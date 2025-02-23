import React, { useEffect, useState } from "react";
import { Car } from "../store/advertsSlice";
import { Button, FavoritesContainer, CarCardList } from "../components/Styled/Styled";
import CarCard from "../components/CarCard";

const FavoritesPage: React.FC = () => {
  const [favorites, setFavorites] = useState<Car[]>([]);

  // Завантажуємо улюблені автомобілі з localStorage
  useEffect(() => {
    const savedFavorites = localStorage.getItem("favorites");
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites)); // Завантажуємо з localStorage
    }
  }, []);

  // Видалення автомобіля з улюблених
  const handleRemoveFromFavorites = (car: Car) => {
    const updatedFavorites = favorites.filter((favoriteCar) => favoriteCar.id !== car.id);
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites)); // Оновлюємо localStorage
  };

  // Очищення всіх улюблених автомобілів
  const handleClearFavorites = () => {
    setFavorites([]);
    localStorage.removeItem("favorites"); // Очищаємо localStorage
  };

  return (
    <FavoritesContainer>
      <h1>Ваші улюблені автомобілі</h1>
      {favorites.length === 0 ? (
        <p>У вас немає улюблених автомобілів.</p>
      ) : (
        <>
          <CarCardList>
            {favorites.map((car) => (
              <CarCard
                key={car.id}
                car={car}
                onFavoriteToggle={handleRemoveFromFavorites} // Функція для видалення
                isFavorite={true}
              />
            ))}
          </CarCardList>
          <Button onClick={handleClearFavorites}>Очистити всі улюблені</Button>
        </>
      )}
    </FavoritesContainer>
  );
};

export default FavoritesPage;
