import { Outlet } from "react-router-dom";
import DesktopNavigation from "../../components/DesktopNavigation/DesktopNavigation";

function RootLayout() {
  return (
    <main className="main">
      <DesktopNavigation />
      <Outlet />
    </main>
  );
}

export default RootLayout;
