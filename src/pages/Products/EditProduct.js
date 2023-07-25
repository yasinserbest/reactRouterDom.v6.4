import React from "react";
import ProductForm from "../../components/Products/ProductForm";
import { useLoaderData, json } from "react-router-dom";

function EditProduct() {
  const data = useLoaderData();
  return (
    <div className="page">
      {/**css AddProducttan.scss geliyor */}
      <h2 className="page__title">Edit Product</h2>
      <ProductForm method={"PUT"} product={data} />
    </div>
  );
}

export async function loader({ params }) {
  const productId = params.productId;
  const response = await fetch("https://dummyjson.com/products/" + productId);
  if (!response.ok) {
    throw json({ message: "Couldn't load product 😢😢" }, { status: 500 });
  } else {
    const data = await response.json();
    return data;
  }
}

export default EditProduct;
