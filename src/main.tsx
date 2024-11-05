import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/test-github-actions/",
    element: <App />,
    children: [
      {
        path: "/test-github-actions/",
        element: <Home />,
      },
      {
        path: "/test-github-actions/contact",
        element: <Contact />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
