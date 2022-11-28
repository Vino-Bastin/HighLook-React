import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tailors: [],
};

const constantSlice = createSlice({
  initialState,
  name: "constants",
  reducers: {
    setTailors: (state, action) => {
      state.tailors = action.payload.tailors;
    },
  },
});

export const { setTailors } = constantSlice.actions;

export default constantSlice.reducer;
