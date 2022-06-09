import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import './App.css';

function App() {
  // Renders the entire app on the DOM
  const imageUrl = useSelector(store => store.random)
  const dispatch = useDispatch();
  console.log("from store ", imageUrl);


  const getImage = () => {
    axios.get("/random").then(
      response => {
        let url = response.data.data.images.original.url;
        console.log("random sent", response.data.data.images.original.url);
        dispatch({ type: 'SET_RANDOM', payload: url });
      }
    ).catch(
      err => { console.log(err) }
    )
  }

  useEffect(() => {
    getImage()
  }, [])

  return (
    <div>
      <header className="App-header">
        <h1>Random Giphy API</h1>
      </header>

      <p>Results go here</p>
      <img src={imageUrl} alt="Giphy" style={{ height: '600px', maxWidth: '600px' }} />
      <div>
        <button onClick={() => getImage()}>Next</button>
      </div>
    </div>
  );
}

export default App;
