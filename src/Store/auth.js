import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  authStatus: false,
  JWT: null,
  userDetails: {},
};

const authSlice = createSlice({
  initialState,
  name: "authentication",
  reducers: {
    setAuthStatus: (state, action) => {
      state.JWT = action.payload.JWT;
      state.authStatus = action.payload.authStatus;
      state.userDetails = action.payload.userDetails;
    },
    removeUserDetails: (state) => {
      state.JWT = null;
      state.authStatus = false;
      state.userDetails = {};
    },
  },
});

export const { setAuthStatus, removeUserDetails } = authSlice.actions;

export default authSlice.reducer;
