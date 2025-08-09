import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import { Layout } from "../Layout/Layout";
import ProductDetails from "../Pages/ProductDetails.tsx/ProductDetails";
import Product from "../Pages/Product/Product";

const routes = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/product",
        element: <Product />,
      },
      {
        path: "/product/:id",
        element: <ProductDetails />,
      }
    ],
  },
]);

export default routes;
