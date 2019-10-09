export default class Auth {
  constructor(history) {
    this.history = history;
  }

  login = () => {
    console.log("Logging in!");
    const authUrl =
      "https://test-auth.songamusic.com/oauth/authorize?client_id=" +
      process.env.REACT_APP_APPLICATION_ID +
      "&redirect_uri=" +
      process.env.REACT_APP_CALLBACK_URL +
      "&response_type=code";
    console.log(authUrl);
    window.location.replace(authUrl);
  };
}
