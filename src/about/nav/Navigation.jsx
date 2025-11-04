import './navigation.css';
import { NavLink, useLocation } from 'react-router-dom';

export function Navigation() {
  const location = useLocation();

  // Determine if we're on main tab
  // const isMainActive =
  //   location.pathname === "/" ||
  //   location.pathname === "/DrKhatuna" ||
  //   location.pathname === "/DrKhatuna/";

    const isMainActive = location.pathname === "/" || location.pathname === "/DrKhatuna";

  return (
    <nav className="navigation-nav">
      <ul>
        <li>
          <NavLink
            to="."
            end
            className={isMainActive ? "active" : ""}
          >
            მთავარი
          </NavLink>
        </li>
        <li>
          <NavLink
            to="education"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            განათლება
          </NavLink>
        </li>
        <li>
          <NavLink
            to="experience"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            გამოცდილება
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}