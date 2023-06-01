import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layouts/RootLayout/RootLayout";
import Showcase from "./components/Showcase/Showcase";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Showcase />,
      },
    ],
  },
]);

export default router;
