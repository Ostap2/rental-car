import { ModalOverlay, ModalContent, CloseButton, HeartButton } from "./Styled/Styled";
import { Car } from "../store/advertsSlice";

interface CarModalProps {
  car: Car;
  onClose: () => void;
  onFavoriteToggle: (car: Car) => void;
  isFavorite: boolean;
}

const CarModal: React.FC<CarModalProps> = ({ car, onClose, onFavoriteToggle, isFavorite }) => {
  const handleFavoriteToggle = (e: React.MouseEvent) => {
    e.stopPropagation(); // Запобігаємо виклику onClick модального вікна
    onFavoriteToggle(car);
  };

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>×</CloseButton>
        <img src={car.img} alt={car.model} width="100%" />
        <h2>
          {car.make} {car.model}
        </h2>
        <p>Рік: {car.year}</p>
        <p>Тип: {car.type}</p>
        <p>Об'єм двигуна: {car.engineSize} л</p>
        <p>Пробіг: {car.mileage} км</p>
        <p>Компанія: {car.rentalCompany}</p>
        <p>Адреса: {car.address}</p>
        <p>Ціна: {car.rentalPrice} грн/день</p>

        <HeartButton 
          onClick={handleFavoriteToggle}
          isFavorite={isFavorite}
        >
          F
        </HeartButton>
      </ModalContent>
    </ModalOverlay>
  );
};

export default CarModal;
