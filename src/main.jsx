import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Outlet } from "react-router-dom";
import "../styles/index.scss";

import ErrorPage from "./global-error.jsx";

import { Landing } from "../layouts/Landing.jsx";

import { Store } from "../layouts/Store.jsx";
import { Garage } from "../layouts/Garage.jsx";

import { CVT } from "../pages/store/cvt.jsx";
import { Heads } from "../pages/store/head.jsx";
import { Oils } from "../pages/store/oil.jsx";
import { Cylinders } from "../pages/store/cylinder.jsx";
import { CrankShafts } from "../pages/store/crankshaft.jsx";
import { CamShafts } from "../pages/store/camshaft.jsx";
import { Mags } from "../pages/store/mags.jsx";
import { Rims } from "../pages/store/rims.jsx";
import { Kapwa } from "../pages/users/kapwa.jsx";
import { JampongChapsuey } from "../pages/providers/jampong-chapsuey.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "users",
        element: <Outlet />,
        children: [
          {
            path: "@kapwa",
            element: <Kapwa />,
          },
        ],
      },
      {
        path: "store",
        element: <Store />,
        children: [
          {
            path: "cvt",
            element: <CVT />,
          },
          {
            path: "head",
            element: <Heads />,
          },
          {
            path: "oil",
            element: <Oils />,
          },
          {
            path: "cylinder",
            element: <Cylinders />,
          },
          {
            path: "crankshaft",
            element: <CrankShafts />,
          },
          {
            path: "camshaft",
            element: <CamShafts />,
          },
          {
            path: "mags",
            element: <Mags />,
          },
          {
            path: "rim",
            element: <Rims />,
          },
        ],
      },
      {
        path: "/store/cvt/honda-click-125-stock-cvt-set",
        element: <JampongChapsuey />,
      },
      {
        path: "garage",
        element: <Garage />,
      },
    ],
  },
]);

document.body.style.backgroundColor = "#18191a";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
