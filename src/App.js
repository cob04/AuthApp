import React, { Component } from "react";
import { Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./components/Home";
import ProfilePage from "./containers/ProfilePage";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Callback from "./components/Callback";
import Auth from "./auth/Auth";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.auth = new Auth(this.props.history);
    this.state = {};
  }
  setUserData = user => this.setState({ user: user });
  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          <Route
            exact
            path="/"
            render={props => <Home auth={this.auth} {...props} />}
          />
          <Route
            exact
            path="/callback"
            render={props => (
              <Callback
                setUser={this.setUserData}
                auth={this.auth}
                {...props}
              />
            )}
          />
          <Route
            exact
            path="/profile"
            render={props => <ProfilePage user={this.state.user} {...props} />}
          />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
