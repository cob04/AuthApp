import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Jumbotron } from "reactstrap";

const Callback = props => {
  const [callbackError, setCallbackError] = useState([]);

  useEffect(() => {
    var urlParams = new URLSearchParams(props.location.search);
    let auth_code = urlParams.get("code");
    props.auth
      .requestAccess(auth_code)
      .then(response => {
        let data = response.data;
        props.setUser(data.user);
        props.setAccessToken(
          data.access_token,
          data.token_type,
          data.refresh_token
        );
        props.history.push("/profile");
        setCallbackError(null);
      })
      .catch(_callbackError => setCallbackError(_callbackError));
  }, [props, callbackError]);

  return (
    <div>
      <Jumbotron className="custom-jumbotron">
        {!callbackError ? (
          <h1 className="main-text">Please be patient, Loading ...</h1>
        ) : (
          <>
            <h1 className="main-text">
              Oops!! We've ecountered an Error ...
              <small>
                <Link to="/">Go back Home</Link>
              </small>
            </h1>

            <p className="text-muted">{callbackError.message}</p>
            <p className="text-muted">
              Maybe you don't have your server running
            </p>
          </>
        )}
      </Jumbotron>
    </div>
  );
};

export default Callback;
