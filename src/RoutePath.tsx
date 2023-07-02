import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import AddProduct from "./pages/addProduct/AddProduct";
import HomePage from "./pages/homePage/HomePage";
import UpdateProduct from "./pages/updateProduct/UpdateProduct";
import { Container } from "./shared/styles";
const RoutePath = () => {
  return (
    <Container width="90%">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/addProduct" element={<AddProduct />} />
        <Route path="/updateProduct/:id" element={<UpdateProduct />} />
      </Routes>
    </Container>
  );
};

export default RoutePath;
