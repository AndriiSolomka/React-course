import React from "react";

const SelectTranslation = ({ handleTranslationChange, selectedCountry }) => {
  return (
    <div>
      <label>
        <p>Select Translation</p>
        <select onChange={handleTranslationChange}>
          {selectedCountry &&
            Object.keys(selectedCountry.translations).map((item, index) => (
              <option key={index}>{item}</option>
            ))}
        </select>
      </label>
    </div>
  );
};

export default SelectTranslation;
