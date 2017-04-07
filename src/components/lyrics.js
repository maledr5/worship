import React, { Component } from 'react';
import Verse from './verse.js'
import Chorus from './chorus.js'
import PreChorus from './pre_chorus.js'
import Bridge from './bridge.js'


class Lyrics extends Component {
	render() {
		const verse = this.props.verse;
		const preChorus = this.props.preChorus;
		const chorus = this.props.chorus;
		const bridge = this.props.bridge;
		return(
			<div className="lyrics">
				{this._getVerse()}
				{this._getPreChorus()}
				{this._getChorus()}
				{this._getBridge()}
			</div>
		)
	}

	_getVerse() {
		const verse = this.props.verse;
		if (verse) return <Verse verse={verse}/>;
		return;
	}

	_getChorus() {
		const chorus = this.props.chorus;
		if (chorus) return <Chorus chorus={chorus}/>;
		return;
	}

	_getPreChorus() {
		const preChorus = this.props.preChorus;
		if (preChorus) return <PreChorus preChorus={preChorus}/>;
		return;
	}

	_getBridge() {
		const bridge = this.props.bridge;
		if (bridge) return <Bridge bridge={bridge}/>;
		return;
	}
}

export default Lyrics