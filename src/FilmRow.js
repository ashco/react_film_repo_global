import React, { Component } from 'react';
import FilmPoster from './FilmPoster.js';

class FilmRow extends Component {
	render() {
		let releaseDate = new Date(this.props.item.release_date).getFullYear();
		return (
			<div className="film-row">
				
				<FilmPoster posterPath={this.props.item.poster_path} />

				<div className="film-summary">
					<h1>{this.props.item.title}</h1>
					<p>{releaseDate}</p>
				</div>
			</div>
		)
	}
}





export default FilmRow;


