import { createSlice } from "@reduxjs/toolkit";


const todoSlice = createSlice({
    name: "todos",
    reducers: {
        list(action){},
        todoAdd(action) {
            
        },
        todopdated(action) {
           
        },
    },
});
export const { todoAdd, todopdated ,fishUpdated } = todoSlice.actions;

export default todoSlice.reducer;