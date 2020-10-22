import React from 'react';

const Playlist = (props) => {
    const {songs} = props

const loaded = () => (
    <div>
      {songs.map((song) => (
        <article>
          <p>{song.name}</p>
          <p>{song.name}</p>
          <p>{song.age}</p>
          <button onClick={() => {
            props.deleteSong(song)
          }}>X</button>
           <button onClick={() => {
            props.selectSong(song)
            // not sure how to push this to the favorite playlist
          }}>Fav</button>
        </article>
      ))}
    </div>
  );

//   return songs.length > 0 ? loaded() : <h1>Loading...</h1>
};

export default Playlist;