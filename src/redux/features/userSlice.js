import { createSlice } from "@reduxjs/toolkit";
import { auth, db, collection } from '..//..//firebase/firebase';
import { v4 as uuidv4 } from 'uuid';
import { doc, setDoc ,Timestamp} from "firebase/firestore";
export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    tasks: [{
      task:"",
      timeStamp:{},
      id:""
    },]
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
    stateAdd: (state, action) => {//not working
      state.tasks.push(action.payload);
    },
    list(action) { }, 
    async todoAdd(action) { //not working
      await setDoc(doc(db, "todos", uuidv4()), {
        task: action.payload,
        timeStamp: Timestamp.fromDate(new Date())
      }, { capital: true }, { merge: true });
    },
    todoUpdated(action) { },
  },
});
export const { todoAdd, todoUpdated, login, logout, list, stateAdd } = userSlice.actions;
export const selectUser = (state) => state.user.user;
export default userSlice.reducer;