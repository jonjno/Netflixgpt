// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBvqixOfil-xvhLx7QwXmNuZOFrU9GCjv8",
  authDomain: "netflix-b27.firebaseapp.com",
  projectId: "netflix-b27",
  storageBucket: "netflix-b27.appspot.com",
  messagingSenderId: "759567773691",
  appId: "1:759567773691:web:67cf51abfebbfc0a1be55e",
  measurementId: "G-15DDXMES18",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
