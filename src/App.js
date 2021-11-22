import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Fields from './Components/Fields';
import Home from './Components/Home';
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import StickyFooter from './Components/footer/StickyFooter';
function App() {
  return (
    <div className="App">
        <Router>
          <Navbar />
            <Switch>
              <Route exact path="/wework">
                <Home />
              </Route>
              <Route path="/wework/fields">
                <Fields />
              </Route>
              <Route path="/wework/login">
                <Login />
              </Route>
            </Switch>
            <StickyFooter />
        </Router>
    </div>
  );
}

export default App;
