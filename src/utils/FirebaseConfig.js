// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBxA-MqrV36OWfTW2bYt18koaMtB5XLoW0",
  authDomain: "netflixgpt-151ec.firebaseapp.com",
  projectId: "netflixgpt-151ec",
  storageBucket: "netflixgpt-151ec.firebasestorage.app",
  messagingSenderId: "284345106368",
  appId: "1:284345106368:web:37dfc0e4fb2ce4e3479225",
  measurementId: "G-C8V3LXT31P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);