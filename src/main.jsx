import { createRoot } from "react-dom/client";
import { Router } from "./router/router.jsx";
import { RouterProvider } from "react-router-dom";
import './assets/css/main.css'


createRoot(document.getElementById("root")).render(
  <RouterProvider router={Router} />
);