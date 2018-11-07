import React, { Component } from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import "./App.css";
class App extends Component {
  render() {
    return (
      <div className="page">
        <Router>
            <div className="container--page">
          <div className="container--menu">
            <ul>
              <li>
                <NavLink activeClassName="active" exact to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="active" to="/about">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="active" to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="container--main">
            <Route exact path="/">
              {({ match }) => <Home show={match !== null} />}
            </Route>
            <Route path="/about">
              {({ match }) => <About show={match !== null} />}
            </Route>
            <Route path="/contact">
              {({ match }) => <Contact show={match !== null} />}
            </Route>
          </div>
        </div>
        </Router>
      </div>
    );
  }
}

export default App;
