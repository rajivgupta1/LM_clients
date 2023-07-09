import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  burrows: [],
};
const burrowSlice = createSlice({
  name: "burrow",
  initialState,
  reducers: {
    setBurrows: (state, { payload }) => {
      console.log("step 6 ");
      state.burrows = payload;
    },
  },
});

const { reducer, actions } = burrowSlice;

export const { setBurrows } = actions;
export default reducer;