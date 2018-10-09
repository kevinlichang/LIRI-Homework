const request = require("request");
const Spotify = require("node-spotify-api");
const moment = require("moment");

require("dotenv").config();

const spotifyKeys = require("./keys.js");

// turn on new spotify app
const spotify = new Spotify(spotifyKeys.spotify);
