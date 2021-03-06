import React from "react";
import "../../../styles/Product.css";

function SkeletonProduct() {
  return (
    <div className="col wl-3 l-4 m-6 c-12">
      <div className="skeletonProduct flex-col-center">
        <div className="product__img" />
        <div className="product__info flex-col"></div>
      </div>
    </div>
  );
}

export default SkeletonProduct;
