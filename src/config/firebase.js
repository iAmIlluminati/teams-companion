// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCCYKj3RV5rdGpbe_ZTy_HIIbYZuhcz5pU",
  authDomain: "teams-companion.firebaseapp.com",
  projectId: "teams-companion",
  storageBucket: "teams-companion.appspot.com",
  messagingSenderId: "202724472968",
  appId: "1:202724472968:web:5ab4ac2e897486df49473d",
  measurementId: "G-CQEZ9P9GB6"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export default firebase;