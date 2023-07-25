import React, { useState } from "react";
import Button from "../../ui/Button";
import { Form, redirect, json, useNavigation } from "react-router-dom";
import "./ProductForm.scss";

function ProductForm({ product, method }) {
  const [selectedCategory, setSelectedCategory] = useState(product?.category);
  const navigation = useNavigation();
  return (
    <div className="productForm">
      <Form method={method} className="productForm__form">
        <div>
          <div className="nice-form-group">
            <label htmlFor="name">Product Name</label>

            <input
              required
              defaultValue={product?.title}
              id="name"
              name="name"
              type="text"
              placeholder="T-Shirt"
            />
          </div>
          <div className="nice-form-group">
            <label htmlFor="name">Description</label>
            <input
              defaultValue={product?.description}
              id="description"
              name="description"
              type="text"
              placeholder="Basic White T-Shirt"
            />
          </div>
          <div className="nice-form-group">
            <label htmlFor="name">Brand</label>
            <input
              id="brand"
              name="brand"
              defaultValue={product?.brand}
              type="text"
              placeholder="Lacoste"
            />
          </div>
          <div className="nice-form-group">
            <label>Category</label>
            <select
              defaultValue={selectedCategory || "placeholder"}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option disabled value="placeholder">
                Please select a value
              </option>
              <option value="smartphones">Smartphones</option>
              <option value="laptops">Laptops</option>
            </select>
          </div>
          <div className="nice-form-group">
            <label htmlFor="name">Thumbnail</label>
            <input
              defaultValue={product?.thumbnail}
              id="thumbnail"
              name="thumbnail"
              type="text"
              placeholder="https://www.someimage.com"
            />
            <small>Please put whole image url here.</small>
          </div>
          <div className="nice-form-group">
            <label htmlFor="name">Images</label>
            <input
              defaultValue={product?.images}
              id="images"
              name="images"
              type="text"
              placeholder="https://www.someimage.com,https://www.someimage.com,https://www.someimage.com"
            />
            <small>Please add comma seperator( , ) for each url.</small>
          </div>
        </div>
        <div>
          <div className="nice-form-group">
            <label htmlFor="name">Price</label>
            <input
              required
              defaultValue={product?.price}
              id="price"
              name="price"
              type="number"
              placeholder="12"
            />
            <small>Product price without any currency sembol.</small>
          </div>
          <div className="nice-form-group">
            <label htmlFor="name">Discount Percentage</label>
            <input
              defaultValue={product?.discountPercentage}
              id="discountPercentage"
              name="discountPercentage"
              type="number"
              placeholder="5.9"
            />
          </div>
          <div className="nice-form-group">
            <label htmlFor="name">Rating</label>
            <input
              defaultValue={product?.rating}
              id="rating"
              name="rating"
              type="number"
              placeholder="4.9"
            />
            <small>Between 0 - 5</small>
          </div>
          <div className="nice-form-group mb-m">
            <label htmlFor="name">Stock</label>
            <input
              defaultValue={product?.stock}
              id="stock"
              name="stock"
              type="number"
              placeholder="20"
            />
          </div>
          <Button disabled={navigation.state === "submitting"} type="primary">
            {navigation.state === "submitting" ? "Submitting..." : "SAVE"}
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default ProductForm;

export async function action({ request, params }) {
  const method = request.method;
  const data = await request.formData();
  const productData = Object.fromEntries(data);

  let url = "";
  if (method === "POST") {
    url = "https://dummyjson.com/products/add";
  }

  if (method === "PUT") {
    const productId = params.productId;
    url = `https://dummyjson.com/products/${productId}`;
  }

  const response = await fetch(url, {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(productData),
  });

  if (!response.ok) {
    console.log(response);
    if (method === "POST") {
      throw json({ message: "Couldn't add product. 😢😢" }, { status: 500 });
    }
    if (method === "PUT") {
      throw json({ message: "Product couldn't update. 😢😢" }, { status: 500 });
    }
  }
  return redirect("/");
}
