### Setting Up AuthAPP React app

## Clone this repository locally

- run `git clone https://github.com/cob04/AuthApp.git`

## Install dependencies

- Change directory to **AuthApp** with the command `cd AuthApp`
- Run `npm i` to install all the React app's dependencies

## Run app

- Run `npm start` to start a local server. This should open the browser on
  the location `localhost:3000`

### Setting up the mock OAuth service

Due to unresolved **CORS** issues with [https://test-auth.songamusic.com/oauth/token/](https://test-auth.songamusic.com/oauth/token/)
I have opted to run a dummy server for use in the **requesting access token** step of the **OAuth Flow**

## Below are instructions on how to set up the dummy mock server.

- Change directory to **mock-api** with the command `cd mock-api`
- Install dependencies with `npm i`
- Run the mock server with `node server.js`. This will run a server listening at `http://localhost:4000`
- The run will only receive `POST` requests for the endpoint `http://locahost:4000/oauth/token/`
