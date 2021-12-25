// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDiJjuMmIuUoI2pNzSd4V-PmCtrnEZnZXo",
  authDomain: "teams-companion-app.firebaseapp.com",
  projectId: "teams-companion-app",
  storageBucket: "teams-companion-app.appspot.com",
  messagingSenderId: "232539269040",
  appId: "1:232539269040:web:7489416305e97606a1d875",
  measurementId: "G-ZTHZTYDQJ5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);