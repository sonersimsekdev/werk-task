// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
//, collection, getDocs
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAPbXeJsBtPeEvkTehfixJtLWyg7W2-2xw",
  authDomain: "werk-task.vercel.app",
  projectId: "todo-56aa6",
  storageBucket: "todo-56aa6.appspot.com",
  messagingSenderId: "1029253731971",
  appId: "1:1029253731971:web:f931d3cd5ed88f0315adb6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { auth };
export default db;
