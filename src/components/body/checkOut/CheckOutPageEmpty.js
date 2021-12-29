import React from "react";
import { Link } from "react-router-dom";
import "../../../styles/CheckOutPageEmpty.scss";

function CheckOutPageEmpty() {
  return (
    <div className="checkOutPageEmpty">
      <img
        src="https://m.media-amazon.com/images/G/01/cart/empty/kettle-desaturated._CB445243794_.svg"
        alt=""
      />
      <div className="flex-col">
        <h2>Your Amazon Cart is Empty</h2>
        <Link className="checkOutPageEmpty__link" to="/">
          Shop today's deals
        </Link>
        <div className="flex-center">
          <button className="checkOutPageEmpty__btn">
            Sign in to your account
          </button>
          <button className="checkOutPageEmpty__btn">Sign up now</button>
        </div>
      </div>
    </div>
  );
}

export default CheckOutPageEmpty;
