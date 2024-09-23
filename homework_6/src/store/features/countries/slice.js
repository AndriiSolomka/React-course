"use strict";

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const API = "https://655655bc84b36e3a431f9829.mockapi.io/countries";

export const fetchCountries = createAsyncThunk(
  "countries/fetchCountries",
  async () => {
    const request = await fetch(API);
    const response = await request.json();

    console.log("SLICE RESPONSE", response);
    
    return response;
  }
);

const initialState = {
  countries: [],
};

export const countriesSlice = createSlice({
  name: "countries",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchCountries.fulfilled, (state, action) => {
      state.countries = action.payload;
    });
  },
});

export const { increment, decrement, incrementByAmount } = countriesSlice.actions;

export default countriesSlice.reducer;
