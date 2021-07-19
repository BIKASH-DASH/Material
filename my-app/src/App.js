import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {createTheme,ThemeProvider} from '@material-ui/core'
import blue from '@material-ui/core/colors/blue';
import About from './pages/About'
import Home from './pages/Home'
import Create from './pages/Create'
const theme = createTheme({
  palette:{
    primary:{
      main: "#1d191a"

    },
    secondary: blue,
    
  },
  typography: {
    fontFamily: "Zen Loop",
    fontSize: 38,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
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
      </Router></ThemeProvider>
  );
}

export default App;
