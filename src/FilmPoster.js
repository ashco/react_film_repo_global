import React, { Component } from 'react';

const API_URL = 'https://image.tmdb.org/t/p/w780/';


class FilmPoster extends Component {
	render() {
		return (
			<img src={`${API_URL}${this.props.posterPath}`} alt="thingy" />
		)
	}
}

export default FilmPoster;