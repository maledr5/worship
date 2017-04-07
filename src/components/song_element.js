import React, { Component } from 'react';

class SongElement extends Component {
	render() {
		return(
			<tbody>
				<tr>
					<td className="structure">{this._getStructure()}</td>
	    			<td className="chords">{this._getChords()}</td>
	    			<td className="lyrics">{this._getLyrics()}</td>
				</tr>
			</tbody>
		)
	}

	_getStructure() {
		const structure = this.props.structure;
		return structure.map ( (orderNumber, id) => {
			return <div key={id}> {orderNumber} </div>
		});
	}

	_getChords() {
		const chords = this.props.chords;
		return chords.join(" ");
	}

	_getLyrics() {
		const lyrics = this.props.lyrics;
		return lyrics.map ( (line, id) => {
			return <div key={id}> {line} </div>
		});
	}
}

export default SongElement;