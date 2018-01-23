import React, { Component } from 'react';
import './App.css';
import FilmDetails from './FilmDetails.js';
import FilmListing from './FilmListing.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="film-library">
          <FilmListing />
          <FilmDetails />

        </div>
      </div>
    );
  }
}

export default App;
