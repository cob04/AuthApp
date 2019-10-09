import React, { Component } from "react";
import { Jumbotron } from "reactstrap";
import axios from "axios";

export default class Callback extends Component {
  componentDidMount() {
    var urlParams = new URLSearchParams(this.props.location.search);
    console.log(this.props.location.search);
    let auth_code = urlParams.get("code");
    axios
      .post("http://localhost:4000/oauth/token", {
        client_id: process.env.REACT_APP_APPLICATION_ID,
        client_secret: process.env.REACT_APP_CLIENT_SECRET,
        code: auth_code,
        grant_type: "authorization_code",
        redirect_uri: process.env.REACT_APP_CALLBACK_URL
      })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  render() {
    return (
      <div>
        <Jumbotron className="custom-jumbotron">
          <h1 className="main-text">Please be patient, Loading ...</h1>
        </Jumbotron>
      </div>
    );
  }
}
