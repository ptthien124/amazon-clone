import React from "react";
import {
  FaBars,
  FaMapMarkerAlt,
  FaSearch,
  FaShoppingCart,
  FaSortDown,
  FaTimes,
} from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../styles/Header.scss";

function Header() {
  const cartList = useSelector((state) => state.cartList);

  const handleMobileMenuClick = () => {
    document
      .querySelector(".header__mobile")
      .classList.add("header__mobile--active");

    document
      .querySelector(".header__mobileMenu")
      .classList.add("header__mobileMenu--active");

    document
      .querySelector(".header__mobileOverlayer")
      .classList.add("header__mobileOverlayer--active");
  };

  const handleTurnOffMobileMenu = (e) => {
    e.preventDefault();

    document
      .querySelector(".header__mobile")
      .classList.remove("header__mobile--active");

    document
      .querySelector(".header__mobileMenu")
      .classList.remove("header__mobileMenu--active");

    document
      .querySelector(".header__mobileOverlayer")
      .classList.remove("header__mobileOverlayer--active");
  };

  return (
    <div className="grid">
      <div className="header">
        <div className="header__top flex-center">
          <div className="header__topLeft flex-center">
            <button
              className="header__link header__mobileMenuBtn"
              onClick={handleMobileMenuClick}
            >
              <FaBars />
            </button>
            <Link
              to="/amazon-clone"
              className="header__link flex-center header__img"
            ></Link>
            <Link to="/amazon-clone" className="header__link flex-center">
              <FaMapMarkerAlt />
              <div className="flex-col">
                <small>Deliver to</small>
                <strong>Vietnam</strong>
              </div>
            </Link>
          </div>

          <div className="header__topMiddle flex-center">
            <div className="header__topSelector flex-center">
              All
              <FaSortDown />
            </div>
            <input />
            <button className="flex-center">
              <FaSearch />
            </button>
          </div>

          <div className="header__topRight flex-center">
            <Link to="/amazon-clone" className="header__link flex-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg"
                alt=""
              />
              <FaSortDown />
            </Link>
            <Link to="/amazon-clone" className="header__link flex-center">
              <div className="flex-col">
                <small>Hello, sign in</small>
                <strong>Account & Lists</strong>
              </div>
              <FaSortDown />
            </Link>
            <Link to="/amazon-clone" className="header__link flex-center">
              <div className="flex-col">
                <small>return</small>
                <strong>& Order</strong>
              </div>
            </Link>
            <Link
              to="/amazon-clone/checkOut"
              className="header__link flex-center"
            >
              <FaShoppingCart />
              <strong>Cart</strong>
              <span className="flex-center">{cartList.length}</span>
            </Link>
          </div>
        </div>
        <div className="header__bottom flex-center">
          <Link to="/amazon-clone" className="flex-center header__link">
            <FaBars />
            All
          </Link>
          <Link to="/amazon-clone" className="flex-center header__link">
            Today's Deals
          </Link>
          <Link to="/amazon-clone" className="flex-center header__link">
            Customer Service
          </Link>
          <Link to="/amazon-clone" className="flex-center header__link">
            Registry
          </Link>
          <Link to="/amazon-clone" className="flex-center header__link">
            Gift Cards
          </Link>
          <Link to="/amazon-clone" className="flex-center header__link">
            Sell
          </Link>
        </div>
        <div className="header__mobile">
          <div
            className="header__mobileOverlayer"
            onClick={handleTurnOffMobileMenu}
          ></div>
          <div className="header__mobileMenu flex-col">
            <FaTimes
              className="header__mobileMenuCloseBtn"
              onClick={handleTurnOffMobileMenu}
            />
            <div className="header__mobileMenuContainer flex-center">
              <Link
                to="/amazon-clone"
                className="header__link header__mobileMenuLink flex-center"
              >
                <FaMapMarkerAlt />
                <div className="flex-col">
                  <small>Deliver to</small>
                  <strong>Vietnam</strong>
                </div>
              </Link>
              <Link
                to="/amazon-clone"
                className="header__link header__mobileMenuLink flex-center"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg"
                  alt=""
                />
                <FaSortDown />
              </Link>
              <Link
                to="/amazon-clone"
                className="header__link header__mobileMenuLink flex-center"
              >
                <div className="flex-col">
                  <small>Hello, sign in</small>
                  <strong>Account & Lists</strong>
                </div>
                <FaSortDown />
              </Link>
              <Link
                to="/amazon-clone"
                className="header__link header__mobileMenuLink flex-center"
              >
                <div className="flex-col">
                  <small>return</small>
                  <strong>& Order</strong>
                </div>
              </Link>
            </div>
            <div className="header__mobileMenuContainer flex-col">
              <Link
                to="/amazon-clone"
                className="flex-center header__link header__mobileMenuLink"
              >
                <FaBars />
                All
              </Link>
              <Link
                to="/amazon-clone"
                className="flex-center header__link header__mobileMenuLink"
              >
                Today's Deals
              </Link>
              <Link
                to="/amazon-clone"
                className="flex-center header__link header__mobileMenuLink"
              >
                Customer Service
              </Link>
              <Link
                to="/amazon-clone"
                className="flex-center header__link header__mobileMenuLink"
              >
                Registry
              </Link>
              <Link
                to="/amazon-clone"
                className="flex-center header__link header__mobileMenuLink"
              >
                Gift Cards
              </Link>
              <Link
                to="/amazon-clone"
                className="flex-center header__link header__mobileMenuLink"
              >
                Sell
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
