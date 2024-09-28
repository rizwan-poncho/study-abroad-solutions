import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Error from "../pages/Error";
import Layout from "../Layout/Layout";
import Home from "../pages/Home";
import WhyStudyAbroad from "../pages/WhyStudyAbroad";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "*", element: <Error /> },
      { path: "/whystudyabroad", element: <WhyStudyAbroad /> },
    ],
  },
]);

export default router;
