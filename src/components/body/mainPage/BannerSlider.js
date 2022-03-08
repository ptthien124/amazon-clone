import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import sliderImages from "../../../app/sliderImages";
import "../../../styles/BannerSlider.css";

function BannerSlider() {
  let settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 7000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    pauseOnHover: false,
  };

  return (
    <div className="bannerSlider">
      <FaChevronLeft className="bannerSlider__customArrow" />
      <Slider className="slider" {...settings}>
        {sliderImages.map((image, i) => (
          <img src={image} key={i} alt="" />
        ))}
      </Slider>

      <FaChevronRight className="bannerSlider__customArrow" />
    </div>
  );
}

export default BannerSlider;
