import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Project from "./Project";
import Education from "./Education";
import Header from "./Header";
import Footer from "./Footer";
import Resume from "./Resume";
import Resume2 from "./Resume2";

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
            <Footer />
          </Route>
          <Route path="/education">
            <Header />
            {/* <Education /> */}
            <Home />
            <Footer />
          </Route>
          {/* <Route path="/resume">
            <Header />
            <Resume />
            <Footer />
          </Route> */}
          <Route path="/resume">
            <Header />
            <Resume2 />
            <Footer />
          </Route>
          <Route path="/">
            <Header />
            <Home />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
