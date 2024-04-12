import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Shop from "./Components/Pages/Shop";
import ShopCategory from "./Components/Pages/ShopCategory";
import Product from "./Components/Pages/Product";
import Cart from "./Components/Pages/Cart";
import LoginSignup from "./Components/Pages/LoginSignup";
import Footer from "./Components/Footer/Footer";
import men_banners from './Components/Assets/banner_mens.png'
import women_banners from './Components/Assets/banner_women.png'
import kids_banners from './Components/Assets/banner_kids.png'
function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<Shop />}
        />
        <Route
          path="/mens"
          element={<ShopCategory banner={men_banners} category="men" />}
        />

        <Route
          path="/womens"
          element={<ShopCategory banner={women_banners} category="women" />}
        />

        <Route
          path="/kids"
          element={<ShopCategory banner={kids_banners} category="kid" />}
        />
        <Route path="/product" element={<Product />} />
        <Route path=":productId" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<LoginSignup />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
