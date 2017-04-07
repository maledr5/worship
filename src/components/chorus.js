import React, { Component } from 'react';
import SongElement from './song_element.js';

class Chorus extends Component {
	render() {
		const chorus = this.props.chorus
		return(
			<table className="chorus">
				<SongElement structure={chorus.structure} chords={chorus.chords} lyrics={chorus.lyrics}/>
			</table>
		)
	}

}

export default Chorus