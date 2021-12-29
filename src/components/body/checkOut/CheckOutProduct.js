import React, { memo, useCallback } from "react";
import { FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../../features/cartSlice";
import "../../../styles/CheckOutProduct.scss";

function CheckOutProduct({
  id,
  cartId,
  title,
  category,
  description,
  price,
  image,
  rating,
  hasPrime,
}) {
  const dispatch = useDispatch();

  const handleRemoveFromCartClick = useCallback(() =>
    dispatch(removeFromCart(cartId)),[cartId]
  );

  return (
    <div className="checkOutProduct flex">
      <img src={image} alt="" />
      <div className="checkOutProduct__info flex-col">
        <h3>{title}</h3>
        <span>{category}</span>
        <div className="checkOutProduct__rating flex-center">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <FaStar key={i} />
            ))}
        </div>
        <p>{description}</p>
        {hasPrime && (
          <span style={{ fontSize: "1.6rem", color: "#007185" }}>Prime</span>
        )}
      </div>
      <div className="checkOutProduct__withPrice flex-col">
        <span>£{price}</span>
        <div className="flex-col">
          <button>Buy</button>
          <button onClick={handleRemoveFromCartClick}>Remove</button>
        </div>
      </div>
    </div>
  );
}

export default memo(CheckOutProduct);
