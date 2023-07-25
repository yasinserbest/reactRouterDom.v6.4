import React from "react";
import ProductForm from "../../components/Products/ProductForm";
import "./AddProduct.scss";
function AddProduct() {
  return (
    <div className="page">
      <h2 className="page__title">Add Product</h2>
      <ProductForm method="POST" />
    </div>
  );
}

export default AddProduct;
