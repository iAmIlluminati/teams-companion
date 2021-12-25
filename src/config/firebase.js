// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider,getAuth,signInWithRedirect,onAuthStateChanged } from "firebase/auth";
// TODO Add SDKs for Firebase products that you want to use
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


const provider = new GoogleAuthProvider();
const auth = getAuth();
let isUserLogged = false; //manage state of login
let activeUser="Call Auth"; //used inside login function



//TODO callback is redundant... instead gofor sending path alone for success login or logged
//elseby default return to signin


const authStatus=(callback)=>{
  onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    //const uid = user.uid;
    activeUser = user;
    isUserLogged = true;
    callback(true);
    // ...
  } else {
    // User is signed out
    // ...
    activeUser = null;
    isUserLogged = false;
    callback(false);
  }
});
}

const loginWithGmail = (callback) => {
  signInWithRedirect(auth, provider).then((result) => {
    // This gives you a Google Access Token. You can use it to access Google APIs.
    //const credential = GoogleAuthProvider.credentialFromResult(result);
    //const token = credential.accessToken;


    // The signed-in user info.
    console.log("Result : ", result);
    authStatus(callback);

  }).catch((error) => {
    console.log("User login-in error :", error)
    authStatus(callback);
  });;
}

export { loginWithGmail,isUserLogged,activeUser,authStatus };
