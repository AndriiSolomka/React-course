import { createSlice } from "@reduxjs/toolkit";
import { CAPITAL_DEFAULT_VALUE } from "../../../const/const";

const initialState = {
  selectedCapital: CAPITAL_DEFAULT_VALUE.capital,
  selectedTranslation: CAPITAL_DEFAULT_VALUE.translation,
};

const capitalsSlice = createSlice({
  name: "capitals",
  initialState,
  reducers: {
    setCapital: (state, action) => {
      state.selectedCapital = action.payload;
    },
    setTranslation: (state, action) => {
      state.selectedTranslation = action.payload;
    },
  },
});

export const { setCapital, setTranslation } = capitalsSlice.actions;

export default capitalsSlice.reducer;
