import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./layouts/RootLayout/RootLayout";
import Home from "./pages/Home/Home";
import Favourites from "./pages/Favourites/Favourites";
import Error from "./pages/Error/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,

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
