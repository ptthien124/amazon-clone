import React, { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "../../../styles/CheckOutPage.scss";
import CheckOutPageEmpty from "./CheckOutPageEmpty";
import CheckOutPageFill from "./CheckOutPageFill";

function CheckOutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const cartList = useSelector((state) => state.cartList);

  const round = useCallback(
    (value, decimals) =>
      Number(Math.round(value + "e" + decimals) + "e-" + decimals),
    []
  );

  const [total] = useState(
    cartList.reduce((total, productPrice) => total + productPrice.price, 0)
  );

  return (
    <div
      className="checkOutPage"
      style={{ backgroundColor: "#f0f0f0", flex: "1" }}
    >
      <div className="row">
        <div className="col wl-9">
          {cartList.length ? <CheckOutPageFill /> : <CheckOutPageEmpty />}
        </div>
        {cartList.length > 0 && (
          <div className="col wl-3">
            <div className="checkOutPage__subtotal">
              <span>
                Subtotal ({cartList.length}{" "}
                {cartList.length > 1 ? "items" : "item"}):
              </span>
              <span>£{round(total, 2)}</span>
              <button className="flex-center">Proceed to checkout</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CheckOutPage;
