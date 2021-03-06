import React from 'react';

const API_URL = 'https://image.tmdb.org/t/p/w780/';

const FilmPoster = props => <img src={`${API_URL}${props.posterPath}`} alt="thingy" />;
// ABOVE REPLACES BELOW
// class FilmPoster extends Component {
// 	render() {
// 		return (
// 			<img src={`${API_URL}${this.props.posterPath}`} alt="thingy" />
// 		)
// 	}
// }


export default FilmPoster;