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
  apiKey: "AIzaSyDFVYfjfFl1oxpjTKgWal1tdVX0ZU2pL7Y",
  authDomain: "werk-todo.firebaseapp.com",
  projectId: "werk-todo",
  storageBucket: "werk-todo.appspot.com",
  messagingSenderId: "462949769504",
  appId: "1:462949769504:web:efa55d35df9eb03352f745",
  measurementId: "G-9NRGT2B3VT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { auth };
export default db;
