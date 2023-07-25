import React, { useState, useEffect } from "react";
import Button from "../../ui/Button";
import Dialog from "../ui/Dialog";
import { BsStar, BsStarFill } from "react-icons/bs";
import {
  useParams,
  redirect,
  useSubmit,
  json,

  // useLoaderData,
} from "react-router-dom";
import { getAuthToken } from "../../util/auth";
import "./SingleProduct.scss";

function SingleProduct({ product }) {
  // const data = useLoaderData(); comments sayısı için ama çalışmıyor

  const params = useParams();

  const submit = useSubmit(); //for delete product
  const token = getAuthToken();

  const [openModal, setOpenModal] = useState(false);
  const [totalComment, settotalComment] = useState(5);
  const [image, setImage] = useState(product?.thumbnail);

  if (product == null) {
    return (
      <div className="singleProduct__error">
        Issued some error when fetching product 😢
      </div>
    );
  }

  // Promise.all([data.comments]).then((val) => {
  //   settotalComment(val[0].total);
  // });

  function deleteProductHandler(e) {
    e.preventDefault();
    submit(null, { method: "DELETE" });
  }

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

  return (
    <>
      <div className="singleProduct">
        <div className="images">
          <div className="images__mainImage">
            <img src={image} alt="" />
          </div>
          <div className="images__allImages">
            {product.images.map((image, i) => (
              <img onClick={() => setImage(image)} key={i} src={image} alt="" />
            ))}
          </div>
        </div>
        <div className="details">
          <div className="details__title">{product.title}</div>
          <div className="details__desc">{product.description} </div>

          <div className="details__brand">{product.brand}</div>
          <div className="details__priceBox">
            <span className="details__priceBox--price">${product.price}↓</span>
            <span className="details__priceBox--discountPrice">
              ${discountPrice}
            </span>
          </div>
          <div className="flex mt-m">
            <span className="details__rating">
              {filledStars}
              {emptyStars}
            </span>
            <span className="details__comment">{totalComment} comment</span>
            <span className="details__remain">only {product.stock} left</span>
          </div>

          {token && (
            <div className="admin">
              <Button
                onClick={() => setOpenModal(true)}
                type="small"
                className="admin__delete"
              >
                DELETE
              </Button>
              <Button
                type="small"
                to={`/products/${params.productId}/edit`}
                className="admin__edit"
              >
                EDIT
              </Button>
            </div>
          )}
        </div>
      </div>
      {openModal && (
        <Dialog
          title={"Are you sure you really want to delete item?"}
          setOpenModal={setOpenModal}
          deleteProduct={deleteProductHandler}
        />
      )}
    </>
  );
}

export default SingleProduct;

export async function action({ params, request }) {
  const productId = params.productId;
  const response = await fetch("https://dummyjson.com/products/" + productId, {
    method: request.method,
  });

  if (!response.ok) {
    throw json({ message: "Couldn't delete product 😢😢" }, { status: 500 });
  }
  return redirect("/");
}
