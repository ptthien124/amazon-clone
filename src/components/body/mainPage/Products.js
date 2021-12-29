import React from "react";
import { useSelector } from "react-redux";
import Product from "./Product";

function Products() {
  const storeList = useSelector((state) => state.storeList);

  return (
    <div className="grid wide">
      <div className="row" style={{ margin: 0 }}>
        {storeList &&
          storeList.map((product) => (
            <Product
              key={product.id}
              id={product.id}
              category={product.category}
              title={product.title}
              image={product.image}
              description={product.description}
              price={product.price}
            />
          ))}
      </div>
    </div>
  );
}

export default Products;
