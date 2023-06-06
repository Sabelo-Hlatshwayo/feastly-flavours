import { Outlet } from "react-router-dom";
import DesktopNavigation from "../../components/DesktopNavigation/DesktopNavigation";
import MobileNavigation from "../../components/MobileNavigation/MobileNavigation";
import "./RootLayout.scss";

function RootLayout() {
  return (
    <div className="rootLayout">
      <DesktopNavigation />
      <MobileNavigation />
      <Outlet />
    </div>
  );
}

export default RootLayout;
