import { createSlice } from "@reduxjs/toolkit";

export const userSlice  = createSlice({
    name: "user",
    initialState: {
        user:null,
    },
    reducers: {
        login: (state, action) => {
            state.user = action.payload;
          },
          logout: (state) => {
            state.user = null;
          },
        list(action){},
        todoAdd(action) {},
        todoUpdated(action) {},
    },
});
export const { todoAdd, todoUpdated , login, logout, list } = userSlice.actions;
export const selectUser = (state) => state.user.user;
export default userSlice.reducer;