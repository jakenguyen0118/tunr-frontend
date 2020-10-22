import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import './playlist.scss'

const Playlist = (props) => {
	const { songs } = props

	const loaded = () => (
		<div>
      <h3>Playlist</h3>
			{songs.map((song) => (
				<article>
					<p>{song.title}</p>
					<p>{song.artist}</p>
					<p className='time'>{song.time}</p>
					<button
						onClick={() => {
							props.deleteSong(song)
						}}>
						X
					</button>
					<FontAwesomeIcon
						icon={faHeart}
						onClick={() => props.addToFaves(song)}
					/>
				</article>
			))}
		</div>
	)

	return songs.length > 0 ? loaded() : <h1>Loading...</h1>
}

export default Playlist
