import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./gridsystem.css";
import "./App.css";
import productsApi from "./api/productsApi";
import { useDispatch } from "react-redux";
import { addAllToStore } from "./features/storeSlice";
import Header from "./components/Header";
import MainPage from "./components/body/mainPage/MainPage";
import CheckOutPage from "./components/body/checkOut/CheckOutPage";
import Footer from "./components/Footer";
import ProductPage from "./components/body/ProductPage";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProductList = async () => {
      try {
        const response = await productsApi.getAll();
        console.log("Fetch products successfully!");
        dispatch(addAllToStore(response));
      } catch (error) {
        console.log("Failed to fetch product list: ", error);
      }
    };

    fetchProductList();
  }, []);

  return (
    <div className="app">
      <Header />
      <div className="header__block" style={{ height: "99px" }}></div>

      <Routes>
        <Route path="/amazon-clone" element={<MainPage />} />
        <Route path="/amazon-clone/checkOut" element={<CheckOutPage />} />
        <Route path="/amazon-clone/products/:id" element={<ProductPage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
