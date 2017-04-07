import React, { Component } from 'react';
import SongList from './song_list.js';
import SongIndex from './song_index.js';
import SongsData from '../data/songs_data.js';


export default class App extends Component {
	render () {
		return (
			<div>
				<SongIndex songs={this._getSongs()} />
				<SongList songs={this._getSongs()} />
			</div>
		)
	}
	
	_getSongs() {
		return SongsData();
	}
}
