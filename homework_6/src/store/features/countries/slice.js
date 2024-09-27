"use strict";

import { createSlice } from "@reduxjs/toolkit";
import { fetchCountries, fetchDeleteCountry } from "./thunks";
import { SLICE_COUNTRY_NAME } from "./const";

const initialState = {
  countries: [],
};

export const countriesSlice = createSlice({
  name: SLICE_COUNTRY_NAME,
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchCountries.fulfilled, (state, action) => {
        state.countries = action.payload;
      })
      .addCase(fetchDeleteCountry.fulfilled, (state, action) => {
        state.countries = state.countries.filter(
          (country) => country.id !== action.payload
        );
      });
  },
});

export const { setDelete } = countriesSlice.actions;

export default countriesSlice.reducer;
