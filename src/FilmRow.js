import React, { Component } from 'react';

class FilmRow extends Component {
	render() {
		return (
			<div id={this.props.item.id}>
				<h1>{this.props.item.title}</h1>
			</div>
		)
	}
}

export default FilmRow;