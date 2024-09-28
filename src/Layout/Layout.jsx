import React, { useEffect } from "react";
import { Collapse, Dropdown, initTWE } from "tw-elements";
import { Outlet } from "react-router-dom";
import Header from "../components/shared/Header";
import Footer from "../components/shared/Footer";

const Layout = () => {
  useEffect(() => {
    initTWE({ Collapse, Dropdown });
  }, []);
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
