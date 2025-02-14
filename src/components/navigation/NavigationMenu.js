import { NavLink } from "react-router-dom";
import ResetLocation from "../actions/ResetLocation";

const activeNavlink = ({ isActive }) =>
  "gray-text nav-link" + (isActive ? " active" : "");

const NavigationMenu = (props) => {
  return (
    <section className="menu-links">
      <NavLink
        to="/"
        className={({ isActive }) =>
          "gray-text nav-link" + (isActive ? " main-active" : "")
        }
        onClick={() => {
          ResetLocation();
          props.closeMenu();
        }}
      >
        Main
      </NavLink>
      <NavLink
        to="/about"
        onClick={() => {
          ResetLocation();
          props.closeMenu();
        }}
        className={activeNavlink}
      >
        About
      </NavLink>
      <NavLink
        to="/portfolio"
        className={activeNavlink}
        onClick={() => {
          ResetLocation();
          props.closeMenu();
        }}
      >
        Portfolio
      </NavLink>
      <NavLink
        to="/contact"
        className={activeNavlink}
        onClick={() => {
          ResetLocation();
          props.closeMenu();
        }}
      >
        Contact
      </NavLink>
    </section>
  );
};

export default NavigationMenu;
