import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import RenderNestedList from "../RenderList/RenderList";
import "./CountriesFullInfo.sass";

const CountriesFullInfo = () => {
  const { countryName } = useParams();
  const { countries } = useSelector((state) => state.countries);

  const countryInfo = countries.find(
    (country) => country.name.official === countryName
  );

  return (
    <div className="full__countries-info">
      <form>
        <label>
          <h1>LOGIK</h1>
        </label>
        <label>
          <RenderNestedList data={countryInfo} />
        </label>
      </form>
    </div>
  );
};

export default CountriesFullInfo;
