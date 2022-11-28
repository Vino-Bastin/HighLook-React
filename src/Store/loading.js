import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
};

const loadingSlice = createSlice({
  initialState: initialState,
  name: "loading",
  reducers: {
    setLoadingStatus: (state, action) => {
      state.isLoading = action.payload.isLoading;
    },
  },
});

export const { setLoadingStatus } = loadingSlice.actions;

export default loadingSlice.reducer;
