import React, { Component } from 'react';
import SongElement from './song_element.js';

class PreChorus extends Component {
	render() {
		const preChorus = this.props.preChorus
		return(
			<table className="pre-chorus">
				<SongElement structure={preChorus.structure} chords={preChorus.chords} lyrics={preChorus.lyrics}/>
			</table>
		)
	}

}

export default PreChorus