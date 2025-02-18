import { ModalOverlay, ModalContent, CloseButton } from "./Styled/Styled";
import { Car } from "../types";


interface CarModalProps {
  car: Car;
  onClose: () => void;
}

const CarModal: React.FC<CarModalProps> = ({ car, onClose }) => {
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
        <p>Ціна: ${car.rentalPrice} / год</p>
      </ModalContent>
    </ModalOverlay>
  );
};

export default CarModal;
