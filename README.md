# LIRI-BOT

LIRI is a command line app that takes in parameters given by the user following a command line. LIRI can be used to search for concert event and venues, songs from Spotify, Movies and even a random surprise. On the Terminal, LIRI takes in 4 commands:
* `concert-this`

* `spotify-this-song`

* `movie-this`

* `do-what-it-says`

## Concert-this Command

Search for concerts of a band or artist.
By inputting on the terminal the following:

`node liri.js concert-this <artist/band name>`

LIRI will return all results of possible concert events, the venues, and dates.

![concert-this](https://raw.githubusercontent.com/kevinlichang/LIRI-Homework/master/images/concert-this.PNG)

## Spotify-this-song Command

Search for a song by inputting:

`node liri.js spotify-this-song <song title>`

LIRI will return results from the Spotify API.

![spotify-this-song](https://raw.githubusercontent.com/kevinlichang/LIRI-Homework/master/images/spotify-this-song.PNG)

## Movie-this Command

Search for movies and films by inputting:

`node liri.js movie-this <movie name>`

LIRI will return results using the OMDB API

![movie-this](https://raw.githubusercontent.com/kevinlichang/LIRI-Homework/master/images/movie-this.PNG)

## Do-what-it-says Command

LIRI will execute a random command based on data from random.txt by inputting:

`node liri.js do-what-it-says`

![do-what-it-says](https://raw.githubusercontent.com/kevinlichang/LIRI-Homework/master/images/do-what-it-says.PNG)