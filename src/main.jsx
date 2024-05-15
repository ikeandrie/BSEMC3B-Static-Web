import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "../styles/index.scss";

import ErrorPage from "./global-error.jsx";

import Home from "../layouts/Home.jsx";
import School from "../layouts/School.jsx";

import About from "../pages/about.jsx";
import Contact from "../pages/contact.jsx";
import Setting from "../pages/setting.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/homeschool",
    element: <School />,
    children: [
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "setting",
        element: <Setting />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
