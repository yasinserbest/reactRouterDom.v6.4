//1
/*
<Routes>
  <Route path="/" element={<RootLayout />}>
    <Route path="products">
      <Route index element={<AllProductsPage />} />
      <Route path=":productId">
        <Route index element={<SingleProductPage />} />
        <Route path="edit" element={<EditProductPage />} />
      </Route>
      <Route path="add" element={<AddProductPage />} />
    </Route>
  </Route>
</Routes>;
*/

/*
//2
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "products",
        element: <AllProductsPage />,
        children: [
          {
            path: ":productId",
            children: [
              {
                index: true,
                element: <SingleProductPage />,
              },
              {
                path: "edit",
                element: <EditProductPage />,
              },
            ],
          },
          {
            path: "add",
            element: <AddProductPage />,
          },
        ],
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}
*/
/*
// 3
export async function loader({ params, request }) {
  const response = await fetch("https://dummyjson.com/products");
  if (!response.ok) {
    //handle your error
    return null;
  } else {
    const data = await response.json();
    return data.products;
  }
}
*/

/*
//4
import { loader as allProductsLoader } from "./pages/AllProductsPage"

const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          path: "products",
          element: <AllProductsPage />,
          loader:allProductsLoader,
          children: [

//5
*/
/*
export async function action({ request, params }) {
    const data = await request.formData();  //get entered data
    const userData = Object.fromEntries(data);
  
    const response = await fetch("https://dummyjson.com/users/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
  
    if (!response.ok) {
      return { message: "Couldn't create account. 💥💥" };
    }
    return redirect("/");
  }

 // 6

import { useLoaderData } from "react-router-dom";
function AllProductsPage() {
  const products = useLoaderData(); //get your data with useLoaderData
  return (
    <div className="products">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
}

//6
import { useLoaderData, useNavigation } from "react-router-dom";
function AllProductsPage() {
  const products = useLoaderData(); //get your data via useLoaderData
  const navigation = useNavigation();
  return (
    <>
      {navigation.state === "loading" ? (
        <p>Loading...</p>) : (
        products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))
      )}
    </>
  );
}

import { useSubmit, Form } from "react-router-dom";

function Sil() {
  let submit = useSubmit();
  return (
    <Form
      onChange={(event) => {
        submit(event.currentTarget);
      }}
    >
      <input type="text" name="search" />
      <button type="submit">Search</button>
    </Form>
  );
}

export default Sil;
*/
