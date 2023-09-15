// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQTM1X3SBytL45osRsGtWYr7xdPO9n3gM",
  authDomain: "quora-clone-3c2ec.firebaseapp.com",
  projectId: "quora-clone-3c2ec",
  storageBucket: "quora-clone-3c2ec.appspot.com",
  messagingSenderId: "651463581080",
  appId: "1:651463581080:web:012f03274ed14141365fed",
  measurementId: "G-BMEE3TE8J2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { auth, provider }; // hum hamare project m khi bhi use krlenge
