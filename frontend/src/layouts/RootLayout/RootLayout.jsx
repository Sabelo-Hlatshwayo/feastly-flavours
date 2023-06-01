import { Outlet } from "react-router-dom";
import DesktopNavigation from "../../components/DesktopNavigation/DesktopNavigation";
import "./RootLayout.scss";

function RootLayout() {
  return (
    <div className="rootLayout">
      <DesktopNavigation />
      <Outlet />
    </div>
  );
}

export default RootLayout;
