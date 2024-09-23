import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.sass";

const Navigation = () => {
  return (
    <>
      <nav>
        <ul>
          <li className="nav__link">
            <NavLink to="/home">Home </NavLink>
          </li>
          <li className="nav__link">
            <NavLink to="/countries">Countries </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
