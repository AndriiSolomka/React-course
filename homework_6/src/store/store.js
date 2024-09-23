"use strict";

import { configureStore } from "@reduxjs/toolkit";

import countriesSlice from "./features/countries/slice";

export const store = configureStore({
  reducer: {
    countries: countriesSlice,
  },
});
