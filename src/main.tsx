import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router/dom";
import "./index.css";
import loginRouter from "./loginRouter.tsx";
import mainRouter from "./mainRouter.tsx";
import { getUser } from "./utils/user.ts";

// console.log(getUser());
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={new QueryClient()}>
      <RouterProvider router={getUser() ? mainRouter : loginRouter} />
    </QueryClientProvider>
  </StrictMode>,
);
