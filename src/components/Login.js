import "./styles/_login.scss"
import "./styles/_input.scss"
import "./styles/_button.scss"
import React, { useState } from 'react'
import {
    auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from '../firebase/firebase';
import { useDispatch } from 'react-redux';
import { login } from '..//redux/features/userSlice';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const loginToApp = (e) => {
        e.preventDefault();


        signInWithEmailAndPassword(auth, email, password)
            .then((userAuth) => {
                dispatch(
                    login({
                        email: userAuth.user.email,
                        uid: userAuth.user.uid,
                    })
                );
            })
            .catch((err) => {
                alert(err);
            });
    };

    const register = () => {
        console.log('register the user');

        createUserWithEmailAndPassword(auth, email, password)
            .then((userAuth) => {

                dispatch(
                    login({
                        email: userAuth.user.email,
                        uid: userAuth.user.uid,
                    })
                )

            })
            .catch((error) => {
                console.log('user not updated');
            });

    };

    return (
        <div className='main' >
            <form action='' onSubmit={loginToApp}>
                <h2 className='login-text'>Login</h2>
                <input
                    placeholder='E-mail'
                    type="email"
                    className='inputField'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} />

                <input
                    placeholder='Password'
                    type="password"
                    className='buttonField'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} />

                <button
                    type='submit'
                    className='buttonField'
                    onClick={loginToApp}
                >Login
                </button>
                <button
                
                    type="button"
                    className='buttonField'
                    onClick={register}
                >Register
                </button>
            </form>
        </div>
    )
}