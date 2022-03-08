import React, { useCallback, useEffect, useState } from "react";
import {
  FaBars,
  FaMapMarkerAlt,
  FaSearch,
  FaShoppingCart,
  FaSortDown,
  FaTimes,
} from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../styles/Header.css";
import HeaderRecommended from "./HeaderRecommended";

function Header() {
  const cartList = useSelector((state) => state.cartList);
  const storeList = useSelector((state) => state.storeList);

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
    e.stopPropagation();

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

  const input = document.querySelector(".header__input");
  const search = document.querySelector(".header__search");

  const handleInputFocus = () => {
    if (input === document.activeElement && input.value.trim().length > 0) {
      search?.classList.add("focus");
    } else search?.classList.remove("focus");
  };

  document.addEventListener("mouseup", handleInputFocus, { passive: true });

  const [inputValue, setInputValue] = useState("");
  const [searchList, setSearchList] = useState([]);

  const handleInputValueChanged = useCallback(
    (e) => {
      setInputValue(e.target.value);
      setSearchList([]);
      handleInputFocus();
      if (e.target.value !== "") {
        const value = e.target.value.trim().toLowerCase();
        storeList.forEach((product) => {
          const title = product.title.toLowerCase();
          const index = title.indexOf(value);
          if (index === 0) setSearchList((prev) => [...prev, product]);
        });
      }
    },
    [inputValue]
  );

  const navigate = useNavigate();

  const handleSearchEnter = useCallback(() => {
    if (inputValue !== "") {
      const link = `/amazon-clone/search/${inputValue}`;
      navigate(link);
    }
  }, [inputValue]);

  useEffect(() => {
    document.querySelector(".header__input").addEventListener("keyup", (e) => {
      if (e.key === "Enter") {
        const searchBtn = document.querySelector(".header__searchBtn");
        handleInputFocus();
        input.blur();
        searchBtn.click();
      }
    });
  }, []);

  const location = useLocation();

  useEffect(() => {
    setInputValue("");
  }, [location]);

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
            <div className="header__topInput">
              <input
                className="header__input"
                value={inputValue}
                onChange={handleInputValueChanged}
              />
              <div className="header__overlayer"></div>
              <div className="header__search">
                {searchList.length > 0 &&
                  searchList.map((product, i) => (
                    <HeaderRecommended
                      id={product.id}
                      key={product.id}
                      title={product.title}
                      value={inputValue.trim()}
                    />
                  ))}
              </div>
            </div>
            <button
              className="flex-center header__searchBtn"
              onClick={handleSearchEnter}
            >
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
