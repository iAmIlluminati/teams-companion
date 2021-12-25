import ImageButton from './Forms/Components/ImageButton';
import { loginWithGmail, isUserLogged, activeUser,authStatus } from '../config/firebase'
import { navigate } from '@reach/router';

function Signin() {

  authStatus((status) => {
     if (status) {
        //TODO login is Success go to calendar page
        navigate("/calendar")
    }
     else {
       //TODO usually  it redirects to signin page
    }
  })
  function signIn() {
    loginWithGmail((status) => {
      if (status) {
        //TODO login is Success go to calendar page
        
        navigate("/calendar");
      }
      else {
        //TODO showlogin failed alert 
      }
    })
  }
 
 
    
  return (<>
  <div className="containerCentered" style={{backgroundColor:"#EAB543"}}>
    {/* <a className="btn btn-outline-dark signin" onClick={GoogleSignIn} role="button" style={buttonStyle}>
      <img width="20px" style={{marginBottom:"3px", marginRight:"5px"}} alt="Google sign-in" src="/asserts/img/icons/Google.webp" />
      Signin with Google
      </a> */}
      <ImageButton  alt="Google sign-in" src="/asserts/img/icons/Google.webp"  text="Signin with Google" event={signIn}></ImageButton>
  </div>

  </>)
}
export default Signin;
