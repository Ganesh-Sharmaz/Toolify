// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries





// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyALV7eZGKtTp8mD-z3V944WMDbiXsH3vmU",
  authDomain: "tool-studio.firebaseapp.com",
  projectId: "tool-studio",
  storageBucket: "tool-studio.appspot.com",
  messagingSenderId: "790877637588",
  appId: "1:790877637588:web:d91165eb9f08fe0a84e441",
  measurementId: "G-PX2ZDLTX1J"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();

export {auth, createUserWithEmailAndPassword, updateProfile}