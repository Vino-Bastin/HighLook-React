import { configureStore } from "@reduxjs/toolkit";

import authReducers from "./auth";
import loadingReducers from "./loading";
import messageReducers from "./message";
import constantsReducers from "./constants";

const store = configureStore({
  reducer: {
    auth: authReducers,
    loading: loadingReducers,
    message: messageReducers,
    constants: constantsReducers,
  },
});

export default store;
