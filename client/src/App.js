import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AddProducts from "./components/AddProducts/AddProducts";
import UpdateProduct from "./components/UpdateProduct/UpdateProduct";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/addproducts" element={<AddProducts />} />
        <Route path="/updateproduct/:id" element={<UpdateProduct />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
