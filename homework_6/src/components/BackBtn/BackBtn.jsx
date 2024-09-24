import React from "react";
import { NavLink } from "react-router-dom";
import { COUNTRIES } from "../../const/path";

const BackBtn = () => {
  return (
    <>
      <NavLink to={COUNTRIES}>
        <button>Move to countries</button>
      </NavLink>
    </>
  );
};

export default BackBtn;
