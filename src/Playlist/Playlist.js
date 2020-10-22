import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHeartbeat} from '@fortawesome/free-solid-svg-icons';

const Playlist = (props) => {
    const {songs} = props

const loaded = () => (
    <div>
      {songs.map((song) => (
        <article>
          <p>{song.title}</p>
          <p>{song.artist}</p>
          <p>{song.time}</p>
          <button onClick={() => {
            props.deleteSong(song)
          }}>X</button>
          <FontAwesomeIcon icon={faHeartbeat} onClick={() => props.addToFaves(song)}/>
        </article>
      ))}
    </div>
  );

  return songs.length > 0 ? loaded() : <h1>Loading...</h1>
};

export default Playlist;