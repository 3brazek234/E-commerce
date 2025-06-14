import { RouterProvider } from "react-router-dom";
import "./App.css";
import routes from "./Routes/routes";

export default function App() {
  return (
   <RouterProvider router={routes}/>
  );
}
