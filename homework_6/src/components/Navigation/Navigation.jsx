import React from "react";
import { NavLink } from "react-router-dom";
import { HOME, COUNTRIES } from "../../const/path";
import "./Navigation.sass";

const Navigation = () => {
  return (
    <>
      <nav>
        <ul>
          <li className="nav__link">
            <NavLink to={HOME}>Home </NavLink>
          </li>
          <li className="nav__link">
            <NavLink to={COUNTRIES}>Countries </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
