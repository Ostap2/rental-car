// components/CarCard.tsx
import { CarCardContainer, CarImage, CarTitle, CarPrice, HeartButton } from "../components/Styled/Styled";
import { Car } from "../store/advertsSlice";

interface CarCardProps {
  car: Car;
  onClick?: () => void;
  onFavoriteToggle: (car: Car) => void;
  isFavorite: boolean;
}

const CarCard: React.FC<CarCardProps> = ({ car, onClick, onFavoriteToggle, isFavorite }) => {
  const handleFavoriteToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    onFavoriteToggle(car);
  };

  return (
    <CarCardContainer onClick={onClick}>
      <CarImage src={car.img} alt={car.make} />
      <CarTitle>{car.make} {car.model}</CarTitle>
      <CarPrice>{car.rentalPrice} грн/день</CarPrice>
      <HeartButton onClick={handleFavoriteToggle} $isFavorite={isFavorite}>
        
      </HeartButton>
    </CarCardContainer>
  );
};

export default CarCard;
