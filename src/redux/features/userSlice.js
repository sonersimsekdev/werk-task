import { createSlice } from "@reduxjs/toolkit";

import { db } from "../../firebase/firebase";
export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    tasks: [],
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
    list(action) { },
    todoAdd(action) {
      // Add a new document in collection "cities"
     
    },
    todoUpdated(action) {},
    },
  });
export const { todoAdd, todoUpdated, login, logout, list } = userSlice.actions;
export const selectUser = (state) => state.user.user;
export default userSlice.reducer;