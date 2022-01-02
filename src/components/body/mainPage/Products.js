import React, { memo } from "react";
import { useSelector } from "react-redux";
import Product from "./Product";
import SkeletonProduct from "./SkeletonProduct";

function Products() {
  const storeList = useSelector((state) => state.storeList);

  return (
    <div className="grid wide">
      <div className="row" style={{ margin: 0 }}>
        {storeList.length > 0
          ? storeList.map((product) => (
              <Product
                key={product.id}
                id={product.id}
                category={product.category}
                title={product.title}
                image={product.image}
                description={product.description}
                price={product.price}
              />
            ))
          : Array(20)
              .fill()
              .map((_, i) => <SkeletonProduct key={i} />)}
      </div>
    </div>
  );
}

export default memo(Products);
