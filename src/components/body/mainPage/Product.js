import React, { memo, useCallback, useMemo } from "react";
import { FaStar } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../../../features/cartSlice";
import "../../../styles/Product.scss";

function Product({ id, title, category, description, price, image }) {
  const dispatch = useDispatch();

  const cartId = useSelector((state) => state.cartList.length);

  const rating = useMemo(() => Math.floor(Math.random() * 5) + 1, []);

  const hasPrime = useMemo(() => Math.random() < 0.5, []);

  const productLink = useMemo(() => {
    let link = title.trim();
    link = link.replace(/,/g, "");
    link = link.replace(/  /g, " ");
    link = link.replace(/ /g, "-");
    link = link.toString() + "::id:" + id.toString();

    return link;
  }, []);

  const handleAddToBasketClick = useCallback(
    (e) => {
      e.preventDefault();
      const productInfo = {
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
      dispatch(addToCart(productInfo));
    },
    [cartId]
  );

  return (
    <div className="col wl-3 l-4 m-6 c-12">
      <Link
        to={`/amazon-clone/products/${productLink}`}
        className="product flex-col-center"
      >
        <img className="product__img" src={image} alt="" />
        <div className="product__info flex-col">
          <h3 className="product__title">{title}</h3>
          <span className="product__category">{category}</span>
          <div className="product__rating">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <FaStar key={i} />
              ))}
          </div>
          <p className="product__description">{description}</p>
          <div className="flex-center">
            <span className="product__price">£{price}</span>
            {hasPrime && <span>Prime</span>}
          </div>
          <button onClick={handleAddToBasketClick} className="product__btn">
            Add to Basket
          </button>
        </div>
      </Link>
    </div>
  );
}

export default memo(Product);
