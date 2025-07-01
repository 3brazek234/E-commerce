import { Outlet } from "react-router-dom";
import Header from "../Components/Common/Header/Header";
import NavBar from "../Components/Common/NavBar/NavBar";

export const Layout = () => {
  return (
    <>
      <Header />
      <NavBar />
      <Outlet/>
    </>
  );
};
