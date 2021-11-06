import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Redirect,Switch} from 'react-router-dom';
import ForumForm from './Pages/Forms/ForumForm';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Signin from './Pages/Signin';
import Room from './Pages/Room'
import ForumHomepage from './Pages/ForumHomepage';
function App() {

  const auth = getAuth();

  return (<>
      <Router>
        <div className="App">
          <Switch>
            <Route exact path='/signin' component={Signin} />
            <Route exact path='/' component={ForumForm} />
            <Route exact path='/room' component={Room} />
            <Route exact path="/forum" component={ForumHomepage}/>
          </Switch>
        </div>
      </Router>
  </>);
}

export default App;
