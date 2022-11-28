import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isShow: false,
  isFailed: false,
  message: "",
};

const messageSlice = createSlice({
  initialState: initialState,
  name: "message",
  reducers: {
    setMessage: (state, action) => {
      state.isFailed = action.payload.isFailed;
      state.message = action.payload.message;
      state.isShow = action.payload.isShow;
    },
    setIsShow: (state, action) => {
      state.isShow = action.payload.isShow;
    },
  },
});

export const { setMessage, setIsShow } = messageSlice.actions;

export default messageSlice.reducer;
