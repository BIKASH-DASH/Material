import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import About from './pages/About'
import Home from './pages/Home'
import Create from './pages/Create'


function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/Create">Create</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route component={About} exact path="/about">
          
          </Route>
          <Route component={Create} exact path="/create">
            
          </Route>
          <Route component={Home} exact path="/">
      
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
