import React, { Component } from "react";
import { Route } from "react-router-dom";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Nav from "./components/Nav";

class App extends Component {
  render() {
    return (
      <>
        <Nav />
        <Route path="/" exact component={Home}></Route>
        <Route path="/profile" component={Profile}></Route>
      </>
    );
  }
}

export default App;
