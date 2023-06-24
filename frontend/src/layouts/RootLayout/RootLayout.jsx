import { Outlet } from "react-router-dom";
import FavouritesContextProvider from "../../context/features/FavouritesContextProvider";
import DesktopNavigation from "../../components/DesktopNavigation/DesktopNavigation";
import MobileNavigation from "../../components/MobileNavigation/MobileNavigation";
import "./RootLayout.scss";

function RootLayout() {
  return (
    <div className="rootLayout">
      <DesktopNavigation />
      <MobileNavigation />

      <FavouritesContextProvider>
        <Outlet />
      </FavouritesContextProvider>
    </div>
  );
}

export default RootLayout;
