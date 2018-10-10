const request = require("request");
const Spotify = require("node-spotify-api");
const moment = require("moment");

require("dotenv").config();

const spotifyKeys = require("./keys.js");

const nodeCommand = process.argv[2];
const nodeArgs = process.argv;
let name = "";

function getName() {
  for (let i = 3; i < nodeArgs.length; i++) {
    if (i > 3 && i < nodeArgs.length) {
      name = name + "+" + nodeArgs[i];
    } else {
      name += nodeArgs[i];
    }
  }
};

// turn on new spotify app
const spotify = new Spotify(spotifyKeys.spotify);


// Command line concert-this <artist/band name>
function bandsInTown() {
  getName();

  const queryUrl = `https://rest.bandsintown.com/artists/${name}/events?app_id=codingbootcamp`

  request(queryUrl, function (error, response, body) {
    const result = JSON.parse(body);
    if (!error && response.statusCode === 200) {
      for (let i = 0; i < result.length; i++) {
        console.log(`
        ================================================================
        Venue Name: ${result[i].venue.name}
        Location: ${result[i].venue.city}, ${result[i].venue.region}, ${result[i].venue.country}
        Event Date: ${result[i].datetime}
        ================================================================`)
      }
    };
  });
};


// spotify-this-song <song name>


// movie-this <movie-name>
function movie() {
  getName();

  if (nodeArgs.length < 4) {
    name = "Mr. Nobody";
  }

  const queryUrl = `http://www.omdbapi.com/?t=${name}&apikey=trilogy`;

  request(queryUrl, function (error, response, body) {
    const result = JSON.parse(body);
    if (!error && response.statusCode === 200) {
      console.log(`
        ================================================================
        Title: ${result.Title}
        Year: ${result.Year}
        IMDB Rating: ${result.imdbRating}
        Rotten Tomatoes Rating: ${result.Ratings[1].Value}
        Country: ${result.Country}
        Language: ${result.Language}
        Plot: ${result.Plot}
        Actors: ${result.Actors}
        ================================================================`)
    };
  });
};

switch (nodeCommand) {
  case "concert-this":
    bandsInTown();
    break;
  case "movie-name":
    movie();
    break;

};