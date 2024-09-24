"use strict";

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { services } from "../../../services/services";

export const fetchCountries = createAsyncThunk(
  "countries/fetchCountries",
  async () => {
    const response = await services.get();

    console.log("SLICE: ", response);

    return response;
  }
);

export const fetchDeleteCountry = createAsyncThunk(
  "countries/deleteCountry",
  async (countryId) => {
    await services.delete(countryId);
    return countryId;
  }
);

const initialState = {
  countries: [],
};

export const countriesSlice = createSlice({
  name: "countries",
  initialState,
  reducers: {
    /*  setDelete: async (state, action) => {
      console.log(action.payload);

      state.countries = await services.delete(action.payload);

      /* await services.delete(action); */
    /* state.countries.filter(
        (country) => country.id !== action.payload
      );
    }, */
  },

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
