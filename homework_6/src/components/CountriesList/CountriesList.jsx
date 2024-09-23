import React from "react";
import "./CountriesList.sass";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

const CountriesList = () => {
  const { countries } = useSelector((state) => state.countries);

  return (
    <div className="countries__list">
      <form>
        <label>
          <ul>
            {countries.map((item) => (
              <li key={item.id}>
                <NavLink to={`/countries/${item.name.official}`}>
                  {item.name.official}{" "}
                </NavLink>
              </li>
            ))}
          </ul>
        </label>
      </form>
    </div>
  );
};

export default CountriesList;
