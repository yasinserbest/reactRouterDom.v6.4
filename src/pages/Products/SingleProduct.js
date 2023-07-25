import React, { Suspense, useEffect } from "react";
import { useLoaderData, defer, Await, json } from "react-router-dom";
import SingleProductComponent from "../../components/Products/SingleProduct";
import ProductComments from "../../components/Products/ProductComments";
import HashLoader from "react-spinners/HashLoader";
import "./SingleProduct.scss";
function SingleProduct() {
  const { product, comments } = useLoaderData();

  return (
    <>
      <div className="singleProductPage__title">Product</div>
      <div className="singleProductPage">
        <Suspense
          fallback={
            <div className="singleProductPage__loader">
              <HashLoader color="#fe7809" size={150} speedMultiplier={1} />
            </div>
          }
        >
          <Await resolve={product}>
            {(loadProduct) => <SingleProductComponent product={loadProduct} />}
          </Await>
        </Suspense>
        <Suspense
          fallback={
            <div className="singleProductPage__loader">
              <HashLoader color="#fe7809" size={150} speedMultiplier={1} />
            </div>
          }
        >
          <Await resolve={comments} errorElement={<p>zz</p>}>
            {(loadComments) => <ProductComments comments={loadComments} />}
          </Await>
        </Suspense>
      </div>
    </>
  );
}

export default SingleProduct;

async function loadProduct(productId) {
  const response = await fetch("https://dummyjson.com/products/" + productId);
  if (!response.ok) {
    return null;
  } else {
    const product = await response.json();
    return product;
  }
}

async function loadComments(productId) {
  const response = await fetch(
    "https://dummyjson.com/comments/post/" + productId
  );
  if (!response.ok) {
    return null;
  } else {
    const data = await response.json();
    return data.comments;
  }
}

export function loader({ request, params }) {
  const id = params.productId;
  return defer({
    product: loadProduct(id),
    comments: loadComments(id),
  });
}
