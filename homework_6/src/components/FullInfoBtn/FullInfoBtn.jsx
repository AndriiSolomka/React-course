import React from "react";
import { NavLink } from "react-router-dom";
import { COUNTRIES } from "../../const/path";

const FullInfoBtn = ({ selectedCountry, selectedTranslation }) => {
  return (
    <div>
      <NavLink
        to={`${COUNTRIES}/${selectedCountry.name.official}?sort=${selectedTranslation}`}
      >
        <button>Read more about {selectedCountry.name.official}</button>
      </NavLink>
    </div>
  );
};

export default FullInfoBtn;
