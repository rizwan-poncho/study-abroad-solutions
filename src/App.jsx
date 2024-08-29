import { useEffect, useState } from "react";

import { Collapse, Dropdown, initTWE } from "tw-elements";
import "./App.css";
import Layout from "./Layout/Layout";

function App() {
  useEffect(() => {
    initTWE({ Collapse, Dropdown });
  }, []);
  return (
    <>
      <Layout />
    </>
  );
}

export default App;
