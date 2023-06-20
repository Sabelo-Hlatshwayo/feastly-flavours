import { Outlet } from "react-router-dom";
import RecipesContextProvider from "../../context/features/RecipesContextProvider";
import DesktopNavigation from "../../components/DesktopNavigation/DesktopNavigation";
import MobileNavigation from "../../components/MobileNavigation/MobileNavigation";
import "./RootLayout.scss";

function RootLayout() {
  return (
    <div className="rootLayout">
      <DesktopNavigation />
      <MobileNavigation />

      <RecipesContextProvider>
        <Outlet />
      </RecipesContextProvider>
    </div>
  );
}

export default RootLayout;
