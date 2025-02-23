import styled from "styled-components";
import { CiHeart } from "react-icons/ci";

// Стиль для кнопки серця
export const HeartButton = styled(CiHeart)<{ $isFavorite: boolean }>`
  color: ${(props) => (props.$isFavorite ? "red" : "white")};
  cursor: pointer;
  font-size: 24px;
  transition: color 0.3s ease;
  position: absolute; /* Додаємо абсолютне позиціонування */
  top: 10px; /* Відступ зверху */
  right: 10px; /* Відступ з правого боку */
background: transparent;

  &:hover {
    color: ${(props) => (props.$isFavorite ? "darkred" : "darkgrey")};
  }
`;

// Контейнер каталогу
export const CatalogContainer = styled.div`
  padding: 20px;
  text-align: center;
`;

// Фільтр
export const FilterContainer = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  margin-bottom: 20px;
`;

export const Select = styled.select`
  padding: 10px;
  border-radius: 5px;
`;

export const Input = styled.input`
  padding: 10px;
  border-radius: 5px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  background: blue;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

// Контейнер картки авто
export const CarCardContainer = styled.li`
  display: inline-block;
  width: 250px;
  margin: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;
  position: relative; /* Додаємо позиціонування для дочірніх елементів */

  &:hover {
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }
`;


// Новий стиль для контейнера карток
export const CarCardList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr); // 4 колонки
  gap: 20px; // Відступи між картками
  list-style-type: none;
  padding: 0;
  max-width: 1200px; /* Встановлюємо максимальну ширину, яку бажаєте */
  margin: 0 auto; /* Автоматичне вирівнювання по горизонталі */
`;


export const CarImage = styled.img`
  width: 100%;
  border-radius: 5px;
`;

export const CarTitle = styled.h3`
  margin: 10px 0;
`;

export const CarPrice = styled.p`
  color: green;
  font-weight: bold;
`;

// Модальне вікно
export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 5px;
  position: relative;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: red;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 20px;
`;
export const FavoritesContainer = styled.div`

`;
