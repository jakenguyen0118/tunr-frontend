import React, {useState, useEffect} from 'react';
import {Route, Switch} from 'react-router-dom'
import './App.scss';
import Header from './Header/Header'
import Form from './Form/Form'
import Playlist from './Playlist/Playlist'

function App() {
  const url = 'https://jaltunr.herokuapp.com'

  const [songs, setSongs] = useState([])

  const emptySong = {
    title: '',
    artist: '',
    time: ''
  }

  const getSongs = () => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setSongs(data.data)
      })
  }

  useEffect(() => {
    getSongs()
  }, [])

 	const handleAddSong = (newSong) => {
		fetch(url, {
			method: 'post',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(newSong) 
    })
    .then((response) => getSongs()); 
	};

  return (
		<div className='App'>
			<Header />
			
				<Route
					exact
					path='/'
					render={(routerProps) => <Playlist {...routerProps} songs={songs} />}
				/>
		
			<Form handleSubmit={handleAddSong} song={emptySong}/>

		</div>
	);
}

export default App;
