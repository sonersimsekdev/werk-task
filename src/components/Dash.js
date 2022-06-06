import React, { useState } from 'react'
import "./styles/_main.scss"
import "./styles/_input.scss"
import "./styles/_second.scss"
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from '..//redux/features/userSlice';
import { auth, db, collection} from '../firebase/firebase';
import { doc, setDoc } from "firebase/firestore";
export default function Dash() {

    const usersCollectionRef = collection(db, "users");
    
    const user = useSelector(selectUser);
    const dispatch = useDispatch();
    const logoutOfApp = () => {
      dispatch(logout());
      auth.signOut();
    };
    async function postAdd () {
        await setDoc(doc(db, "todos", "todo2"), {
            task: "go inside",
          });
    }
    return (
        <>
          {user ? <div className='main todo-page'>
                <div>Datepicker</div>
                <div className='section-out'>
                    <div className='section-in'>
                        <div className='emoji-button'>&#128058;</div>
                        <div>To Do</div>
                    </div>
                    <div className='divField'>
                        <div>aadada</div>
                        <button className='button' type='button'>b</button>
                    </div>
                </div>
                <div className='section-out'>
                    <div className='section-in'>
                        <div className='emoji-button'>&#128058;</div>
                        <div>In Progress</div>
                    </div>
                    <div className='divField'>
                        <div>aadada</div>
                        <button className='button' type='button'>b</button>
                    </div>
                </div>
                <div className='section-out'>
                    <div className='section-in'>
                        <div className='emoji-button'>&#128058;</div>
                        <div>Done</div>
                    </div>
                    <div className='divField'>
                        <div>aadada</div>
                        <button className='button' type='button'>b</button>
                    </div>
                </div>
                <div><input placeholder='+New' type="email" className='inputField' onKeyPress={(e) => e.key === 'Enter' && postAdd()}></input></div>
                <div><button  type="button" onClick={logoutOfApp} className='button'>Log Out</button></div>
            </div>
            : ''}
        </>
    )
}
