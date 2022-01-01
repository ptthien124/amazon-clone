import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import {
  image1,
  image2,
  image3,
  image4,
  image5,
  image6
} from "../../../app/sliderImages";
import "../../../styles/BannerSlider.scss";

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
        <img src={image1} alt="" />
        <img src={image2} alt="" />
        <img src={image3} alt="" />
        <img src={image4} alt="" />
        <img src={image5} alt="" />
        <img src={image6} alt="" />
      </Slider>

      <FaChevronRight className="bannerSlider__customArrow" />
    </div>
  );
}

export default BannerSlider;
