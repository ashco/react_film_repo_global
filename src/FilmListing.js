import React, { Component } from 'react';
import FilmRow from './FilmRow.js';

//FUNCTIONAL COMPONENT
const AllFilms = (props) => {
	const filmlist = props.films.map((item) => (
		<FilmRow item={item} />
		// <div id={item.id}>
		// 	<h1>{item.title}</h1>
		// </div>
	))
	return <div>{filmlist}</div>
}


class FilmListing extends Component {
	render() {
		// {console.log('props from listing', this.props.films)}
		return (
			<div className="film-list">
				<h1 className="section-title">FILMS</h1>
				<AllFilms films={this.props.films} />
			</div>

		)
	}
}


export default FilmListing;