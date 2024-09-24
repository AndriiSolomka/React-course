import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setCapital,
  setTranslation,
} from "../../store/features/capitals/slice";
import "./CapitalForm.sass";
import SelectCapital from "../SelectCapital/SelectCapital";
import SelectTranslation from "../SelectTranslation/SelectTranslation";
import FullInfoBtn from "../FullInfoBtn/FullInfoBtn";

const CapitalForm = () => {
  const { countries } = useSelector((state) => state.countries);
  const { selectedCapital, selectedTranslation } = useSelector(
    (state) => state.capitals
  );

  const dispatch = useDispatch();

  const handleCapitalChange = (event) => {
    dispatch(setCapital(event.target.value));
  };

  const handleTranslationChange = (event) => {
    dispatch(setTranslation(event.target.value));
  };

  const selectedCountry = countries.find((country) =>
    country.capital.includes(selectedCapital)
  );

  useEffect(() => {
    if (selectedCountry) {
      const firstTranslation = Object.keys(selectedCountry.translations)[0];
      dispatch(setTranslation(firstTranslation));
    }
  }, [selectedCountry, dispatch]);

  return (
    <div className="capital__form">
      <h2>Capital Form Component</h2>
      <form>
        <SelectCapital
          handleCapitalChange={handleCapitalChange}
          countries={countries}
        />

        <SelectTranslation
          handleTranslationChange={handleTranslationChange}
          selectedCountry={selectedCountry}
        />

        {selectedCountry && selectedTranslation && (
          <FullInfoBtn
            selectedCountry={selectedCountry}
            selectedTranslation={selectedTranslation}
          />
        )}
      </form>
    </div>
  );
};

export default CapitalForm;
