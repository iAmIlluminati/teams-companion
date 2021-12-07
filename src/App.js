import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Redirect,Switch} from 'react-router-dom';
import ForumForm from './Pages/Forms/ForumForm';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Signin from './Pages/Signin';
import Room from './Pages/Room'
import ForumHomepage from './Pages/ForumHomepage';
import Calendar from './Pages/Calendar'
import AskQues from './Pages/AskQues'
function App() {

  const auth = getAuth();

  return (<>
      <Router>
        <div className="App">
          <Switch>
            <Route exact path='/signin' component={Signin} />
            <Route exact path='/' component={Calendar} />
            <Route exact path='/room' component={Room} />
            <Route exact path="/forum" component={ForumHomepage} />
            <Route exact path="/calendar" component={Calendar}/>
            <Route exact path="/askques" component={AskQues}/>
          
          </Switch>
        </div>
      </Router>
  </>);
}

export default App;
