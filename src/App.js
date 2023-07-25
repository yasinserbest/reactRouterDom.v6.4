import { RouterProvider, createBrowserRouter } from "react-router-dom";

import RootLayout from "./pages/Root";
import HomePage from "./pages/Home";
import RequireAuth from "./components/RequireAuth";
import ErrorPage from "./pages/Error/Error";
//import NotFoundPage from "./components/Error/PageNotFound";
import LoginPage from "./pages/Login/SignIn";
import SignUpPage from "./pages/Login/SignUp";
import ForgotPasswordPage from "./pages/Login/ForgotPassword";
import { action as signUpAction } from "./components/Login/SignUp";
import { action as signInAction } from "./components/Login/SignIn";

import SingleProductPage, { loader } from "./pages/Products/SingleProduct";
import { loader as productsLoader } from "./components/Products/Products";
import AddProductPage from "./pages/Products/AddProduct";
import EditProductPage, {
  loader as productLoader,
} from "./pages/Products/EditProduct";

import { action as productDeleteAction } from "./components/Products/SingleProduct";
import { action as manipulateEventAction } from "./components/Products/ProductForm";
// import Sil from "./medium/sil";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage />, loader: productsLoader },
      {
        path: "category",
        children: [
          {
            path: ":categoryId",
            element: <HomePage />,
            loader: productsLoader,
          },
        ],
      },
      {
        path: "products",
        children: [
          {
            path: ":productId",
            children: [
              {
                index: true,
                element: <SingleProductPage />,
                loader,
                action: productDeleteAction,
              },
              {
                element: <RequireAuth />,
                children: [
                  {
                    path: "edit",
                    element: <EditProductPage />,
                    loader: productLoader,
                    action: manipulateEventAction,
                  },
                ],
              },
            ],
          },
          {
            element: <RequireAuth />,
            children: [
              {
                path: "add",
                element: <AddProductPage />,
                action: manipulateEventAction,
              },
            ],
          },
        ],
      },
      {
        path: "login",
        element: <LoginPage />,
        action: signInAction,
      },
      {
        path: "signUp",
        element: <SignUpPage />,
        action: signUpAction,
      },
      {
        path: "forgotPassword",
        element: <ForgotPasswordPage />,
      },
      // {
      //   path: "sil",
      //   element: <Sil />,
      // },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
