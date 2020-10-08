import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Project from "./Project";
import Education from "./Education";
import Header from "./Header";

function App() {
  return (
    // <div className="app">
    //   <h1>My Profile</h1>
    // </div>
    <Router>
      <div className="app">
        <Switch>
          <Route path="/project">
            <Header />
            <Project />
          </Route>
          <Route path="/education">
            <Header />
            <Education />
          </Route>
          {/* <Route path="/resume">
            <Home />
          </Route>
          <Route path="/contact">
            <Home />
          </Route> */}
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
