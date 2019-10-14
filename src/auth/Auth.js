import axios from "axios";

let _accessToken = null;
let _refreshToken = null;
let _tokenType = null;
let _expiresIn = null;
let _createdAt = null;

export default class Auth {
  constructor(history) {
    this.history = history;
  }

  authorize = () => {
    const authUrl =
      "https://test-auth.songamusic.com/oauth/authorize?client_id=" +
      process.env.REACT_APP_APPLICATION_ID +
      "&redirect_uri=" +
      process.env.REACT_APP_CALLBACK_URL +
      "&response_type=code";
    window.location.replace(authUrl);
  };

  requestAccess = auth_code => {
    return axios
      .post("http://localhost:4000/oauth/token", {
        client_id: process.env.REACT_APP_APPLICATION_ID,
        client_secret: process.env.REACT_APP_CLIENT_SECRET,
        code: auth_code,
        grant_type: "authorization_code",
        redirect_uri: process.env.REACT_APP_CALLBACK_URL
      })
      .then(response => {
        let data = response.data;
        _accessToken = data.access_token;
        _refreshToken = data.refresh_token;
        _tokenType = data.token_type;
        _expiresIn = data.expires_in;
        _createdAt = data.create_at;
        return data.user;
      })
      .catch(error => {
        return error;
      });
  };
}
