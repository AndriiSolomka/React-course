import React from "react";
import { useSelector } from "react-redux";
import { useParams, useLocation } from "react-router-dom";
import RenderNestedList from "../RenderList/RenderList";
import DeleteBtn from "../DeleteBtn/DeleteBtn";
import "./CountriesFullInfo.sass";

const CountriesFullInfo = () => {
  const { countryName } = useParams();
  const { countries } = useSelector((state) => state.countries);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const sortParam = queryParams.get("sort");

  const countryInfo = countries.find(
    (country) => country.name.official === countryName
  );

  console.log(countryInfo?.id);

  const translation = countryInfo?.translations[sortParam]?.official || "";

  return (
    <div className="full__countries-info">
      <form>
        <label>
          <h1>{translation ? translation : countryName}</h1>
        </label>
        <label>
          <RenderNestedList data={countryInfo} />
        </label>
      </form>

      <DeleteBtn id={countryInfo?.id} />
    </div>
  );
};

export default CountriesFullInfo;
