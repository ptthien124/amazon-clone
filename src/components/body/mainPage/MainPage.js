import { useEffect } from "react";
import BannerSlider from "./BannerSlider";
import Products from "./Products";

function MainPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="mainPage" style={{ flex: "1" }}>
      <BannerSlider />
      <Products />
    </div>
  );
}

export default MainPage;
