import { createSlice, configureStore } from "@reduxjs/toolkit";
const initialAuthoState = { isAuthenticated: false };
const authSlice = createSlice({
  name: "authentification",
  initialState: initialAuthoState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

export const authoActions = authSlice.actions;

export default authSlice.reducer;