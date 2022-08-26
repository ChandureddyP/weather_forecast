// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkCDQLLHRs0S7XadDpLwuvkDzuDuYxSno",
  authDomain: "weather-forecast-926ea.firebaseapp.com",
  projectId: "weather-forecast-926ea",
  storageBucket: "weather-forecast-926ea.appspot.com",
  messagingSenderId: "753941193167",
  appId: "1:753941193167:web:58d5c2d570ebe7764d72ba",
  measurementId: "G-7QHY76V264"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);