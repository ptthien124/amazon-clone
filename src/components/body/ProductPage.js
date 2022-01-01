import React, { useCallback, useEffect, useMemo } from "react";
import { FaStar } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart } from "../../features/cartSlice";
import "../../styles/ProductPage.scss";

function ProductPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const params = useParams();

  const dispatch = useDispatch();

  const storeList = useSelector((state) => state.storeList);

  const cartId = useSelector((state) => state.length);

  const rating = useMemo(() => Math.floor(Math.random() * 5) + 1, []);

  const hasPrime = useMemo(() => Math.random() < 0.5, []);

  const productId = useMemo(() => {
    const idIndex = params.id.indexOf("::id:");
    let id = params.id.slice(idIndex);
    id = id.replace("::id:", "");

    return id;
  });

  const productInfo = useMemo(() => {
    const productInfo = storeList.find(
      (product) => product.id.toString() === productId.toString()
    );

    return productInfo;
  });

  const { id, title, category, description, price, image } = useMemo(() => ({
    ...productInfo,
  }));

  const handleAddToBasketClick = useCallback(
    (e) => {
      e.preventDefault();
      const addProductInfo = {
        id,
        cartId,
        title,
        category,
        description,
        price,
        image,
        rating,
        hasPrime,
      };

      dispatch(addToCart(addProductInfo));
    },
    [cartId]
  );

  return (
    <div className="productPage__wrapper">
      <div className="productPage">
        <img src={image} alt="" />
        <div className="flex-col">
          <div className="flex-col productPage__info">
            <h3>{title}</h3>
            <span>{category}</span>
            <div className="productPage__rating flex-center">
              {Array(rating)
                .fill()
                .map((_, i) => (
                  <FaStar key={i} />
                ))}
            </div>
            <p>{description}</p>
            <div className="flex-center">
              <span>£{price}</span>
              {hasPrime && (
                <span style={{ marginLeft: "100px", color: "#007185" }}>
                  Prime
                </span>
              )}
            </div>
          </div>

          <div className="flex-center productPage__btns flex-col">
            <button>Buy</button>
            <button onClick={handleAddToBasketClick}>Add to Basket</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
