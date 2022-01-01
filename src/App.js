import { Route, Routes } from "react-router-dom";
import "./App.css";
import CheckOutPage from "./components/body/checkOut/CheckOutPage";
import MainPage from "./components/body/mainPage/MainPage";
import ProductPage from "./components/body/ProductPage";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./gridsystem.css";

function App() {
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
