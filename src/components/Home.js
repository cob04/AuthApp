import React from "react";
import { Link } from "react-router-dom";
import { Jumbotron, Button } from "reactstrap";

const Home = props => (
  <div>
    <Jumbotron className="custom-jumbotron">
      {props.user ? (
        <>
          <h1 className="main-text">
            Hello {props.user.first_name}, Welcome to Radio Africa
          </h1>
          <p class="text-muted">
            <Link to="/profile">See my profile</Link>
          </p>
        </>
      ) : (
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
      )}
    </Jumbotron>
  </div>
);

export default Home;
