import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import { Layout } from "../Layout/Layout";

const routes = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);

export default routes;
