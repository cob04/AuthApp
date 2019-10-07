import React, { Component } from "react";
import { Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          <Route exact path="/" render={props => <Home />} />
          <Route path="/profile" component={Profile} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
