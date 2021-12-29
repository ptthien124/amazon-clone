import React from "react";
import { useSelector } from "react-redux";
import CheckOutProduct from "./CheckOutProduct";

function CheckOutPageFill() {
  const cartList = useSelector((state) => state.cartList);

  return (
    <div
      className="flex-col"
      style={{
        backgroundColor: "white",
        padding: "20px",
        borderRadius: "2px",
        marginTop: "12px",
      }}
    >
      <h1 style={{ fontSize: "3rem" }}>Your Shopping Cart</h1>
      <span
        style={{
          fontSize: "2rem",
          fontWeight: "600",
          textAlign: "right",
          borderBottom: "1px solid lightgray",
          padding: "8px 0",
        }}
      >
        Price
      </span>
      <div className="flex-col CheckOutProducts">
        {cartList.map((product) => (
          <CheckOutProduct
            key={product.cartId}
            id={product.id}
            cartId={product.cartId}
            image={product.image}
            title={product.title}
            description={product.description}
            price={product.price}
            category={product.category}
            rating={product.rating}
            hasPrime={product.hasPrime}
          />
        ))}
      </div>
    </div>
  );
}

export default CheckOutPageFill;
