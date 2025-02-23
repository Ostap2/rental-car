import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import CatalogPage from "./pages/CatalogPage";

import AddCarForm from "./components/addCarForm";

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CatalogPage />} />
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/add" element={<AddCarForm />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
