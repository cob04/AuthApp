import React from "react";
import { Link } from "react-router-dom";
import { Jumbotron, Button } from "reactstrap";

const UserMessage = props => (
  <>
    <h1 className="main-text">
      Hello {props.first_name}, Welcome to Radio Africa
    </h1>
    <p className="text-muted">
      <Link to="/profile">See my profile</Link>
    </p>
  </>
);

const StrangerMessage = props => (
  <>
    <h1 className="main-text">Hello stranger, Welcome to Radio Africa</h1>
    <Button
      color="secondary"
      className="custom-button"
      size="lg"
      block
      onClick={props.auth.authorize}
    >
      Sign Up / Sign In
    </Button>
  </>
);

const Home = props => (
  <div>
    <Jumbotron className="custom-jumbotron">
      {props.user ? (
        <UserMessage first_name={props.user.first_name} />
      ) : (
        <StrangerMessage auth={props.auth} />
      )}
    </Jumbotron>
  </div>
);

export default Home;
