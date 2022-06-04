import React, { useRef, useState, useEffect } from 'react'
import {  sendSignInLinkToEmail } from "firebase/auth";
import { auth } from '../firebase/firebase';
import "./styles/_main.scss"
import "./styles/_input.scss"

export default function Main() {

    const handleSubmit = (e) => {
            e.preventDefault()
    }
    const [email, SetEmail] = useState(null)
    const actionCodeSettings = {
        // URL you want to redirect back to. The domain (www.example.com) for this
        // URL must be in the authorized domains list in the Firebase Console.
        url: 'https://werk-task.vercel.app/',
        // This must be true.
        handleCodeInApp: true,
        iOS: {
          bundleId: 'com.example.ios'
        },
        android: {
          packageName: 'com.example.android',
          installApp: true,
          minimumVersion: '12'
        },
        dynamicLinkDomain: 'https://werk-task.vercel.app/'
      };

       async function login(){
        await sendSignInLinkToEmail(auth, email, actionCodeSettings)
        .then(() => {
            // The link was successfully sent. Inform the user.
            // Save the email locally so you don't need to ask the user for it again
            // if they open the link on the same device.
            window.localStorage.setItem('emailForSignIn', email);
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode)
            console.log(errorMessage)
        });
        alert("içerde")
      }
    return (
        <div className='main' >
            <form action='' onSubmit={handleSubmit}>
                <h2 className='login-text'>Login</h2>
                <input placeholder='E-mail' type="email" className='inputField' onChange={(e) => { SetEmail(e.target.value) }} onKeyPress={(e) => e.key === 'Enter' && login()}></input>
            </form>
        </div>
    )
}