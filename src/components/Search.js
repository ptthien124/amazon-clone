import React, { Suspense, useEffect, useMemo, useState, memo } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import BannerSlider from "./body/mainPage/BannerSlider";
import Product from "./body/mainPage/Product";
import SkeletonProduct from "./body/mainPage/SkeletonProduct";
import Spinner from "./Spinner";

function Search() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const storeList = useSelector((state) => state.storeList);

  const params = useParams();

  const [filterList, setFilterList] = useState([]);

  useMemo(() => {
    setFilterList([]);
    const value = params.keyword.trim().toLowerCase();
    storeList.forEach((product) => {
      const title = product.title.toLowerCase();
      const index = title.indexOf(value);
      if (index === 0) setFilterList((prev) => [...prev, product]);
    });
  }, [params.keyword]);

  return (
    <div className="seach">
      <BannerSlider />
      <div className="grid wide">
        <div className="row" style={{ margin: 0 }}>
          {filterList.length > 0 ? (
            filterList.map((product) => (
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
    </div>
  );
}

export default memo(Search);
