// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyC8_nuO1zPMbaTR04jM0rBG0ohr7wlbP78",
  authDomain: "intervyo-ae286.firebaseapp.com",
  projectId: "intervyo-ae286",
  storageBucket: "intervyo-ae286.firebasestorage.app",
  messagingSenderId: "456130693558",
  appId: "1:456130693558:web:3fd5a08ce9e36370981917",
  measurementId: "G-ZJEFC9JH3C"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);