import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter } from "react-router";
import { Router } from "react-router";
import { RouterContextProvider } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from "./components/layout/Root";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
);
