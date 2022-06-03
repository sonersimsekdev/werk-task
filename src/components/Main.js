import React, { useRef, useState, useEffect } from 'react'
import "./styles/_main.scss"
import "./styles/_input.scss"
import { auth } from '../firebase/firebase';

export default function Main() {

    

    const [email, setEmail] = useState(
        window.localStorage.getItem("emailForSignIn") || ""
    );
    useEffect(() => {
        // Get the saved email
        const saved_email = window.localStorage.getItem("emailForSignIn");

        // Verify the user went through an email link and the saved email is not null
        if (auth.isSignInWithEmailLink(window.location.href) && !!saved_email) {
            // Sign the user in
            auth.signInWithEmailLink(saved_email, window.location.href);
        }
    }, []);


    const updateEmail = (e) => {
        setEmail(e.target.value);
      };

    const trySignIn = async () => {
        // If the user is re-entering their email address but already has a code
        if (auth.isSignInWithEmailLink(window.location.href) && !!email) {
            // Sign the user in
            auth.signInWithEmailLink(email, window.location.href).catch((err) => {
                console.log("An unknown error has occured");

            });
        } else {
            auth
                .sendSignInLinkToEmail(email, {
                    url: "http://localhost:3000/",
                    handleCodeInApp: true,
                })
                .then(() => {
                    // Save the users email to verify it after they access their email
                    window.localStorage.setItem("emailForSignIn", email);
                })
                .catch((err) => {
                    console.log("An unknown error has occured");

                });
        }
    };


    return (
        <div className='main'>
            <form action=''>
                <h2 className='login-text'>Login</h2>
                <input placeholder='E-mail' type="email" className='inputField' value={email}  onChange={updateEmail} onKeyPress={(e) => e.key === 'Enter' && trySignIn()}></input>
            </form>
        </div>
    )
}
