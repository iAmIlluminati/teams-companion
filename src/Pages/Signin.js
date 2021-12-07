import firebase from '../config/firebase'
import { GoogleAuthProvider,getAuth, getRedirectResult,signInWithRedirect,setPersistence,inMemoryPersistence} from "firebase/auth";
import {Redirect} from 'react-router-dom';
import { doc, getDoc, getFirestore } from "firebase/firestore";
function Signin() {
  
  let buttonStyle = {
    textTransform: "none",
    border: "1px black solid",
    color: "black",
    boxShadow: "1px 1px grey",
    fontWeight: "500",
    width: "50vw",
    minWidth: "220px",
    maxWidth:"400px",
    backgroundColor:"white"
    
  };

  async function checkBefore() {
    let db = getFirestore();
    console.log("Inside Check Before");
    const auth = getAuth();
    if (auth.currentUser) {
      const userHasRoom = doc(db, 'test', auth.currentUser.email);
      const docUser = await getDoc(userHasRoom);
      console.log(docUser.exists());
      if (docUser.exists()) {
        console.log("Document data:", docUser.data());
      } else {
        console.log("Document data");
        return <Redirect to='/' />
      }
      console.log(auth);
    }
  }
  
  async function GoogleSignIn() {
    
    const auth = getAuth();
    setPersistence(auth, inMemoryPersistence)
    .then(() => {
      const provider = new GoogleAuthProvider();
      provider.addScope('profile');
      provider.addScope('email');
      // In memory persistence will be applied to the signed in Google user
      // even though the persistence was set to 'none' and a page redirect
      // occurred.
      return signInWithRedirect(auth, provider);
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
    });
    auth.onAuthStateChanged(user => {
      if (user) {
        checkBefore();
      }
    })
    


  }
    
  return (<>
  <div className="containerCentered" style={{backgroundColor:"#EAB543"}}>
    <a className="btn btn-outline-dark signin" onClick={GoogleSignIn} role="button" style={buttonStyle}>
      <img width="20px" style={{marginBottom:"3px", marginRight:"5px"}} alt="Google sign-in" src="/asserts/img/icons/Google.webp" />
      Signin with Google
    </a>
  </div>

  </>)
}
export default Signin;