import "@/styles/index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "react-loading-skeleton/dist/skeleton.css";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import store from "./redux/store.ts";
import router from "./router";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </StrictMode>
);
