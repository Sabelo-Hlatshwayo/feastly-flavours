import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./layouts/RootLayout/RootLayout";
import Home from "./pages/Home/Home";
import Favourites from "./pages/Favourites/Favourites";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },

      {
        path: "favourites",
        element: <Favourites />,
      },
    ],
  },
]);

export default router;
