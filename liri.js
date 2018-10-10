const request = require("request");
const Spotify = require("node-spotify-api");
const moment = require("moment");

require("dotenv").config();

const spotifyKeys = require("./keys.js");

const nodeCommand = process.argv[2];
const nodeNameInput = process.argv[3];

// turn on new spotify app
const spotify = new Spotify(spotifyKeys.spotify);


// Command line concert-this <artist/band name>


// spotify-this-song <song name>


// movie-this <movie-name>
function movie() {
  const nodeArgs = process.argv;
  let movieName = "";
  for (var i = 3; i < nodeArgs.length; i++) {

    if (i > 3 && i < nodeArgs.length) {
      movieName = movieName + "+" + nodeArgs[i];   
    } 
    else {
      movieName += nodeArgs[i]; 
    }
  }

  if (nodeArgs.length < 4) {
    movieName = "Mr. Nobody";
  }
  
  const queryUrl = `http://www.omdbapi.com/?t=${movieName}&apikey=trilogy`;

  request(queryUrl, function(error, response, body) {
    if (!error && response.statusCode === 200) {
      console.log(`
        ===============================================
        Title: ${JSON.parse(body).Title}
        Year: ${JSON.parse(body).Year}
        IMDB Rating: ${JSON.parse(body).imdbRating}
        Rotten Tomatoes Rating: ${JSON.parse(body).Ratings[1].Value}
        Country: ${JSON.parse(body).Country}
        Language: ${JSON.parse(body).Language}
        Plot: ${JSON.parse(body).Plot}
        Actors: ${JSON.parse(body).Actors}
        ===============================================`
      )
    };
  });
};

switch (nodeCommand) {
  case "movie-name":
    movie();
    break;
};
