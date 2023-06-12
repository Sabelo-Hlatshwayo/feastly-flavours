import { NavLink } from "react-router-dom";
import { Home, Heart } from "lucide-react";
import "./DesktopNavigation.scss";

function DesktopNavigation() {
  return (
    <nav className="desktopNavigation">
      <h1 className="desktopNavigation__heading">feastly flavours</h1>
      <ul className="desktopNavigation__list">
        <li className="desktopNavigation__item">
          <NavLink className="desktopNavigation__link">
            <Home to="/" />
            <span>home</span>
          </NavLink>
        </li>
        <li className="desktopNavigation__item">
          <NavLink to="/favourites" className="desktopNavigation__link">
            <Heart />
            <span>favourites</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default DesktopNavigation;
