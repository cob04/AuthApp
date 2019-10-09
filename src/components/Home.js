import React from "react";
import { Jumbotron, Button } from "reactstrap";

const Home = props => (
  <div>
    <Jumbotron className="custom-jumbotron">
      <h1 className="main-text">Hello, Welcome to Radio Africa</h1>
      <Button
        color="secondary"
        className="custom-button"
        size="lg"
        block
        onClick={props.auth.authorize}
      >
        Sign Up / Sign In
      </Button>
    </Jumbotron>
  </div>
);

export default Home;
