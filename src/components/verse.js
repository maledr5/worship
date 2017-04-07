import React, { Component } from 'react';
import SongElement from './song_element.js';

class Verse extends Component {
	render() {
		const verse = this.props.verse
		return(
			<table className="verse">
				<SongElement structure={verse.structure} chords={verse.chords} lyrics={verse.lyrics}/>
			</table>
		)
	}
}

export default Verse;