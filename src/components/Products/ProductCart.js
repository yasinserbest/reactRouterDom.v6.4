import React from "react";
import { Link, useNavigation } from "react-router-dom";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import HashLoader from "react-spinners/HashLoader";
import "./ProductCart.scss";

function ProductCart({ product }) {
  const navigation = useNavigation();
  const discountPrice = Math.trunc(
    product.price - (product.price / 100) * product.discountPercentage
  );
  const rating = Math.round(product.rating);

  const filledStars = Array.from({ length: rating }, (_, index) => {
    return <BsStarFill key={index} />;
  });
  const emptyStars = Array.from({ length: 5 - rating }, (_, index) => {
    return <BsStar key={index} />;
  });

  if (navigation.state === "loading")
    return (
      <Link to={`/products/${product.id}`} className="product">
        <div className="product__images loader ">
          <HashLoader color="#fe7809" speedMultiplier={2} size={90} />
        </div>
      </Link>
    );

  return (
    <Link to={`/products/${product.id}`} className="product">
      <div className="product__images">
        <img src={product.images[0]} alt="" className="product__images--img" />
      </div>
      <div className="product__name">{product.title}</div>
      <div className="flex space-between">
        <div className="product__brand">{product.brand}</div>
        <div className="product__rating">
          {filledStars}
          {emptyStars}
        </div>
      </div>
      <div className="product__prices">
        <span className="product__prices--price">${product.price}↓</span>
        <span className="product__prices--discountPrice">
          ${Math.round(discountPrice)}
        </span>
      </div>
    </Link>
  );
}

export default ProductCart;
