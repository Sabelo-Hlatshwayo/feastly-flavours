import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layouts/RootLayout/RootLayout";
import Showcase from "./pages/Showcase/Showcase";
import Favourites from "./pages/Favourites/Favourites";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Showcase />,
      },

      {
        path: "favourites",
        element: <Favourites />,
      },
    ],
  },
]);

export default router;
