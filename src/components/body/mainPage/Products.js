import React, { lazy, Suspense } from "react";
import { useSelector } from "react-redux";
import Spinner from "../../Spinner";
import SkeletonProduct from "./SkeletonProduct";

const Product = lazy(() => import("./Product"));

function Products() {
  const storeList = useSelector((state) => state.storeList);

  return (
    <div className="grid wide">
      <div className="row" style={{ margin: 0 }}>
        {storeList.length > 0 ? (
          storeList.map((product) => (
            <Suspense key={product.id} fallback={<SkeletonProduct />}>
              <Product
                id={product.id}
                category={product.category}
                title={product.title}
                image={product.image}
                description={product.description}
                price={product.price}
              />
            </Suspense>
          ))
        ) : (
          <Spinner />
        )}
      </div>
    </div>
  );
}

export default Products;
