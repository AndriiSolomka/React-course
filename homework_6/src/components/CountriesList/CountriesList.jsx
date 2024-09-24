import React from "react";
import "./CountriesList.sass";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import DeleteBtn from "../DeleteBtn/DeleteBtn";
import { COUNTRIES } from "../../const/path";

const CountriesList = () => {
  const { countries } = useSelector((state) => state.countries);

  return (
    <div className="countries__list">
      <form>
        <label>
          <ul>
            {countries.map((item) => (
              <li key={item.id}>
                <NavLink to={`${COUNTRIES}/${item.name.official}`}>
                  {item.name.official}{" "}
                </NavLink>
                <DeleteBtn id={item.id} />
              </li>
            ))}
          </ul>
        </label>
      </form>
    </div>
  );
};

export default CountriesList;
