import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.scss";
import {
  FaMapMarkerAlt,
  FaSortDown,
  FaSearch,
  FaShoppingCart,
  FaBars,
} from "react-icons/fa";
import { useSelector } from "react-redux";

function Header() {
  const cartList = useSelector((state) => state.cartList);

  return (
    <div className="grid">
      <div className=" header">
        <div className="header__top flex-center">
          <div className="header__topLeft flex-center">
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
            <Link to="/amazon-clone/checkOut" className="header__link flex-center">
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
      </div>
    </div>
  );
}

export default Header;
