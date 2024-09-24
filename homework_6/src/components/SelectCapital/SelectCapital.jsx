import React from "react";
import { useSelector } from "react-redux";

const SelectCapital = ({ handleCapitalChange, countries }) => {
  const { selectedCapital } = useSelector((state) => state.capitals);

  return (
    <div>
      <label>
        <p>Select Capital</p>
        <select onChange={handleCapitalChange} value={selectedCapital}>
          {countries.map((item) => (
            <option key={item.id}>{item.capital}</option>
          ))}
        </select>
      </label>
    </div>
  );
};

export default SelectCapital;
