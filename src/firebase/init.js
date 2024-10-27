// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC9GJD16govAkD3zGyLf5Jl_jRnSs7mBNI",
  authDomain: "store-ui-3368b.firebaseapp.com",
  projectId: "store-ui-3368b",
  storageBucket: "store-ui-3368b.appspot.com",
  messagingSenderId: "317253721762",
  appId: "1:317253721762:web:195b017f089149b250c1fb",
  measurementId: "G-6X99HKJBKD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);