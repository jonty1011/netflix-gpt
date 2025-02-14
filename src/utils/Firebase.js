// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDA9f4OvTCI3-6zsKwKvjJAD1OBjl3YTrY",
  authDomain: "netflixgpt-69943.firebaseapp.com",
  projectId: "netflixgpt-69943",
  storageBucket: "netflixgpt-69943.firebasestorage.app",
  messagingSenderId: "904706030489",
  appId: "1:904706030489:web:9a0f5367e0316d84273108",
  measurementId: "G-RM82QSN8PY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
 export const auth = getAuth();