import React, { useEffect } from "react";
import Header from "../components/Header";
import { Collapse, Dropdown, initTWE } from "tw-elements";
import { Outlet } from "react-router-dom";

const Layout = () => {
  useEffect(() => {
    initTWE({ Collapse, Dropdown });
  }, []);
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Layout;
