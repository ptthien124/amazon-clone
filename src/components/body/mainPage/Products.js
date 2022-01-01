import React, { memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import productsApi from "../../../api/productsApi";
import { addAllToStore } from "../../../features/storeSlice";
import Product from "./Product";
import SkeletonProduct from "./SkeletonProduct";

function Products() {
  const dispatch = useDispatch();

  const storeList = useSelector((state) => state.storeList);

  useEffect(() => {
    const fetchProductList = async () => {
      try {
        const response = await productsApi.getAll();
        console.log("Fetch products successfully!");
        dispatch(addAllToStore(response));
      } catch (error) {
        console.log("Failed to fetch product list: ", error);
      }
    };

    fetchProductList();
  }, []);

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
