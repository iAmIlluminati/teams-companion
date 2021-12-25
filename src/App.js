import logo from './logo.svg';
import './App.css';
import RoomForm from './Pages/RoomForm';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Signin from './Pages/Signin';
import Room from './Pages/Room'
import ForumHomepage from './Pages/ForumHomepage';
import Calendar from './Pages/Calendar'
import AskQues from './Pages/AskQues'
import {Router} from '@reach/router'
function App() {

  const auth = getAuth();

  return (<>
    <div className="App">
        
      <Router>
            <Signin path='/signin'/>
            <Signin path='/'/>
            <Room path='/room'/>
            <ForumHomepage path="/forum"/>
            <Calendar path="/calendar" />
            <AskQues path="/askques"/>
            <RoomForm path="/joinroom"/>
      </Router>
      </div>
  </>);
}

export default App;
