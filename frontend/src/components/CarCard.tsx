import { CarCardContainer, CarImage, CarTitle, CarPrice } from "./Styled/Styled";
import { Car } from "../types";

interface CarCardProps {
    car: Car;
    onClick: () => void;
  }

const CarCard: React.FC<CarCardProps> = ({ car, onClick }) => {
  return (
    <CarCardContainer onClick={onClick}>
      <CarImage src={car.img} alt={car.model} />
      <CarTitle>
        {car.make} {car.model}
      </CarTitle>
      <CarPrice>Ціна за годину: ${car.rentalPrice}</CarPrice>
    </CarCardContainer>
  );
};

export default CarCard;

