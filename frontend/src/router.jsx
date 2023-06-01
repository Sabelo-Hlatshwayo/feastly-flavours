import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layouts/RootLayout/RootLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
  },
]);

export default router;
