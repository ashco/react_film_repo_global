import React from 'react';
import FilmPoster from './FilmPoster.js';

const FilmRow = (props) => {
	let releaseDate = new Date(props.item.release_date).getFullYear();
	return (
		<div className="film-row">
			
			<FilmPoster posterPath={props.item.poster_path} />

			<div className="film-summary">
				<h1>{props.item.title}</h1>
				<p>{releaseDate}</p>
			</div>
		</div>
	)
}

export default FilmRow;


