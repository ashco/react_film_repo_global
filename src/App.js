import React, { Component } from 'react';
import './App.css';
import FilmDetails from './FilmDetails.js';
import FilmListing from './FilmListing.js';

import TMDB from './TMDB.js';



// const url = `https://api.themoviedb.org/3/movie/${film.id}?api_key=${TMDB.api_key}&append_to_response=videos,images&language=en`


class App extends Component {

  // fetch(url).then(response => {
  //   response.json().then(data => {
  //     console.log(data) // take a look at what you get back!
  //   })
  // })

  render() {
    return (
      <div className="App">
        <div className="film-library">
          {console.log(TMDB.films)}
          <FilmListing films={TMDB.films} />
          <FilmDetails film={TMDB.films[0]} />

        </div>
      </div>
    );
  }
}

export default App;
