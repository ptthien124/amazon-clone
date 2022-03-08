import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import productsApi from "./api/productsApi";
import "./App.css";
import CheckOutPage from "./components/body/checkOut/CheckOutPage";
import MainPage from "./components/body/mainPage/MainPage";
import ProductPage from "./components/body/ProductPage";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Search from "./components/Search";
import { addAllToStore } from "./features/storeSlice";
import "./gridsystem.css";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProductList = async () => {
      try {
        const response = await productsApi.getAll();
        console.log("Fetch products successfully!");
        dispatch(addAllToStore(response));
      } catch (error) {
        console.log("Failed to fetch product list, error: ", error);
      }
    };

    fetchProductList();
  }, []);

  return (
    <div className="app">
      <Header />
      <div className="header__block"></div>
      <Routes>
        <Route path="/amazon-clone" element={<MainPage />} />
        <Route path="/amazon-clone/checkOut" element={<CheckOutPage />} />
        <Route path="/amazon-clone/products/:id" element={<ProductPage />} />
        <Route path="/amazon-clone/search/:keyword" element={<Search />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
