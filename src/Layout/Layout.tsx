import { Outlet } from "react-router-dom";
import Header from "../Components/Common/Header/Header";
import NavBar from "../Components/Common/NavBar/NavBar";
import Footer from "../Components/Common/Footer/Footer";

export const Layout = () => {
  return (
    <>
      <Header />
      <NavBar />
      <Outlet/>
      <Footer />
    </>
  );
};
