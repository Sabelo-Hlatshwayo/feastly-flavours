import { NavLink } from "react-router-dom";
import { Home, Heart } from "lucide-react";
import "./MobileNavigation.scss";

function MobileNavigation() {
  return (
    <nav className="mobileNavigation">
      <ul className="mobileNavigation__list">
        <li className="mobileNavigation__item">
          <NavLink className="mobileNavigation__link">
            <Home />
          </NavLink>
        </li>
        <li className="mobileNavigation__item">
          <NavLink className="mobileNavigation__link">
            <Heart />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default MobileNavigation;
