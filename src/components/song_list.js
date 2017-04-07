import React, { Component } from 'react';
import Lyrics from './lyrics.js';

class SongList extends Component {
	render () {
		return <div className='song-list'>{this._buildSongsLinks()}</div>
	}

	_buildSongsLinks() {
		const songs = this.props.songs;
		return songs.map( (song) => {
			return (
				<div id={this._getId(song.name)} key={this._getId(song.name)}>
					<h4 className='capo'>{song.capo}</h4>
					<h3 className='song-title'>{song.name}</h3>
					<Lyrics
						verse={song.verse}
						preChorus={song.preChorus}
						chorus={song.chorus}
						bridge={song.bridge}
					/>
				</div>
			)

		});
	}

	_getId(songName) {
		return songName.split(' ').join('_')
	}
}

export default SongList;