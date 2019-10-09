import React, { Component } from "react";
import { Jumbotron } from "reactstrap";

export default class Callback extends Component {
  componentDidMount() {
    var urlParams = new URLSearchParams(this.props.location.search);
    console.log(this.props.location.search);
    let auth_code = urlParams.get("code");
    this.props.auth.requestAccess(auth_code).then(response => {
      this.props.setUser(response.data.user);
      this.props.history.push("/profile");
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
