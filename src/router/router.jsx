import { createBrowserRouter } from "react-router-dom";

/* LAYOUTS */
import MainLayout from "../layouts/MainLayout.jsx";
/* LAYOUTS */

/* PAGES */
import Home from "../pages/Home.jsx";
import Err404 from "../pages/Err404.jsx";
/* PAGES */

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  { path: "*", element: <Err404 /> },
]);