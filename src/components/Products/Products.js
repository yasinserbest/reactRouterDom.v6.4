import React from "react";
import ProductCart from "./ProductCart";
import { useLoaderData, json } from "react-router-dom";
import "./Products.scss";
function Products() {
  const products = useLoaderData();

  return (
    <div className="products">
      {products.map((product) => (
        <ProductCart key={product.id} product={product} />
      ))}
    </div>
  );
}

export default Products;

export async function loader({ params }) {
  const category = params.categoryId || "smartphones";
  const response = await fetch(
    "https://dummyjson.com/products/category/" + category
  );
  if (!response.ok) {
    throw json({ message: "Couldn't fetch products 😢😢" }, { status: 500 });
  } else {
    const data = await response.json();
    return data.products;
  }
}
