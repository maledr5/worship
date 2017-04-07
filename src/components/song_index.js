import React, { Component } from 'react';

class SongIndex extends Component {
	render() {
		return <div className='song-index'>{this._buildSongsIndex()}</div>
	}

	_buildSongsIndex() {
		const songs = this.props.songs;
		return songs.map( (song, index) => {
			index = index + 1;
			return (
				<a href={'#' + this._getId(song.name)} key={this._getId(song.name)}>
					{index + ': ' + song.name}
				</a>
			)
		});
	}

	_getId(songName) {
		return songName.split(' ').join('_')
	}
}

export default SongIndex;