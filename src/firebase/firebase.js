
import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  serverTimestamp,
  doc,
  orderBy,
  limit,
  onSnapshot,
  query,
} from 'firebase/firestore';
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDknTQXeB07erpSSRsFvkYcf0AUeMExJX4",
  authDomain: "todo2-a035e.firebaseapp.com",
  projectId: "todo2-a035e",
  storageBucket: "todo2-a035e.appspot.com",
  messagingSenderId: "912520463351",
  appId: "1:912520463351:web:1c27c31327401ab61ba4f2"
};

// init firebase app
const app = initializeApp(firebaseConfig);

// init services
const db = getFirestore(app);
const auth = getAuth(app);

export {
  db,
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  serverTimestamp,
  doc,
  auth,
  orderBy,
  limit,
  onSnapshot,
  query,
  createUserWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
};