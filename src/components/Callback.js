import React, { useState, useEffect } from "react";
import { Jumbotron } from "reactstrap";

const Callback = props => {
  const [callbackError, setCallbackError] = useState([]);

  useEffect(() => {
    var urlParams = new URLSearchParams(props.location.search);
    let auth_code = urlParams.get("code");
    props.auth
      .requestAccess(auth_code)
      .then(response => {
        props.setUser(response.data.user);
        props.history.push("/profile");
      })
      .catch(_callbackError => setCallbackError(_callbackError));
  }, [props]);

  return (
    <div>
      <Jumbotron className="custom-jumbotron">
        {!callbackError ? (
          <h1 className="main-text">Please be patient, Loading ...</h1>
        ) : (
          <h1 className="main-text">Oops!! We've ecountered an Error ...</h1>
        )}
      </Jumbotron>
    </div>
  );
};

export default Callback;
