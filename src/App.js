import React, { useEffect } from "react";
import "./App.css";
import Login from "./Login";
import Player from "./Player";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import { useDataLayerValue } from "./DataLayer";

//ths creates an instance of spitify web api to use through out the app
const spotify = new SpotifyWebApi();

function App() {
  const [{ token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    // Set token
    const hash = getTokenFromUrl();
    window.location.hash = "";
    let _token = hash.access_token;

    if (_token) {
      spotify.setAccessToken(_token);
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });
      spotify.getUserPlaylists().then((playLists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playLists: playLists,
        });
      });

      spotify.getPlaylist("37i9dQZF1DX6dlXjpHAMw3").then((respone) => {
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          dicover_weekly: respone,
        });
      });
    }
  }, [dispatch]);
  return <div className="app">{token ? <Player spotify={spotify} /> : <Login />}</div>;
}

export default App;
