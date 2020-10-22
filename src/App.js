import React, {useState, useEffect} from 'react';
import {Route, Switch} from 'react-router-dom'
import './App.scss';
import Header from './Header/Header'
import Form from './Form/Form'
import Playlist from './Playlist/Playlist'

function App() {
  const url = 'https://jaltunr.herokuapp.com'

  const [songs, setSongs] = useState([])

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

 

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route 
          exact
          path='/'
          render={(routerProps) => <Playlist {...routerProps} songs={songs}/>}
        />
      </Switch>
      {/* <Form /> */}
    </div>
  );
}

export default App;
