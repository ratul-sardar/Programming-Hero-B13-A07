import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router/dom";
import { router } from "./router/route";
import { Bounce, ToastContainer } from "react-toastify";
import "./index.css";
import TimelineContextProvider from "./context/TimelineContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TimelineContextProvider>
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </TimelineContextProvider>
  </StrictMode>,
);
