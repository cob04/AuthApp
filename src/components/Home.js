import React, { Component } from "react";
import { Jumbotron, Button } from "reactstrap";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Jumbotron className="custom-jumbotron">
          <h1 className="main-text">Hello, Welcome to Radio Africa</h1>
          <Button color="secondary" className="custom-button" size="lg" block>
            Sign Up / Sign In
          </Button>
        </Jumbotron>
      </div>
    );
  }
}
