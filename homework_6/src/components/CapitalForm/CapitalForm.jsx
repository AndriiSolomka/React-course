import React from "react";
import { useSelector, useDispatch } from "react-redux";

import "./CapitalForm.sass";

const CapitalForm = () => {
  const { countries } = useSelector((state) => state.countries);

  return (
    <div className="capital__form">
      <h2>Capital Form Component</h2>
      <form>
        <label>
          <p>Select Capital</p>
          <select>
            {countries.map((item) => (
              <option key={item.id}>
                {item.flag}

                {item.capital}
              </option>
            ))}
          </select>
        </label>
        <label>
          <p>Select Translation</p>
          <select>
            {/* {countries.map((item) => (
              <option key={item.id}>{Object.keys(item.translations)[0]}</option>
            ))} */}
          </select>
        </label>

        <button>Read more about {}</button>
      </form>
    </div>
  );
};

export default CapitalForm;
