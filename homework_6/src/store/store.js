"use strict";

import { configureStore } from "@reduxjs/toolkit";

import countriesSlice from "./features/countries/slice";
import capitalsSlice from "./features/capitals/slice";

export const store = configureStore({
  reducer: {
    countries: countriesSlice,
    capitals: capitalsSlice,
  },
});
