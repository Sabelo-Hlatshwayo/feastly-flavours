import { Outlet } from "react-router-dom";
import DesktopNavigation from "../../components/DesktopNavigation/DesktopNavigation";

function RootLayout() {
  return (
    <div className="rootLayout">
      <DesktopNavigation />
      <Outlet />
    </div>
  );
}

export default RootLayout;
