import { createSlice } from "@reduxjs/toolkit";
import {  auth, db, collection} from '..//..//firebase/firebase';
import { doc, setDoc } from "firebase/firestore";
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
      setDoc(doc(db, "todos", "todo2"), {
        task: "go inside",
      });
    },
    todoUpdated(action) {},
    },
  });
export const { todoAdd, todoUpdated, login, logout, list } = userSlice.actions;
export const selectUser = (state) => state.user.user;
export default userSlice.reducer;