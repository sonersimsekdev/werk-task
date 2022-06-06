import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './redux/features/userSlice';
import { auth, onAuthStateChanged } from './firebase/firebase';
import Login from "./components/Login";
import Dash from "./components/Dash";
function App() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        // user is logged in, send the user's details to redux, store the current user in the state
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, []);

  return (
    <div className="App">
      {!user ? (
        // display the login form 
        <Login />
      ) : (
        // display the rest of the app
        <Dash />
      )}
      
    </div>
  );
}

export default App;
