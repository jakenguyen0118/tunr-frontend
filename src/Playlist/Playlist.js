import React from 'react';

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
        </article>
      ))}
    </div>
  );

  return songs.length > 0 ? loaded() : <h1>Loading...</h1>
};

export default Playlist;