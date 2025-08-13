import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import { Layout } from "../Layout/Layout";
import ProductDetails from "../Pages/ProductDetails.tsx/ProductDetails";
import Product from "../Pages/Product/Product";
import Faq from "../Pages/Faq/Faq";
import AboutUs from "../Pages/AboutUs/AboutUs";
import ContactUs from "../Components/Home/ContactUs/ContactUs";

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
      },
      {
        path: "/faq",
        element: <Faq />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
    ],
  },
]);

export default routes;
