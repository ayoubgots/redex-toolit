import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./Counter-Slice";
import authReducer from "./Authentification-Slice";

const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer },
});

export default store;
