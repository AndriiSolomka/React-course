import { createAsyncThunk } from "@reduxjs/toolkit";
import { services } from "../../../services/services";
import { SLICE_COUNTRY_NAME } from "./const";

export const fetchCountries = createAsyncThunk(
  `${SLICE_COUNTRY_NAME}/fetchCountries`,
  async () => {
    const response = await services.get();

    console.log("SLICE: ", response);

    return response;
  }
);

export const fetchDeleteCountry = createAsyncThunk(
  `${SLICE_COUNTRY_NAME}/deleteCountry`,
  async (countryId) => {
    await services.delete(countryId);
    return countryId;
  }
);
