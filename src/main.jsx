import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./component/Pages/Home";
import About from "./component/Pages/About";
import Contact from "./component/Pages/Contact";
import NotFound from "./component/Pages/NotFound";
import Layout from "./Layout";
import SingalProduct from "./component/Pages/SingleProduct";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
      {
        path: "singleproduct/:id",
        element: <SingalProduct />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);