import React, { Component } from 'react';
import SongElement from './song_element.js';

class Bridge extends Component {
	render() {
		const bridge = this.props.bridge
		return(
			<table className="bridge">
				<SongElement structure={bridge.structure} chords={bridge.chords} lyrics={bridge.lyrics}/>
			</table>
		)
	}

}

export default Bridge