import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import MovieDetails from './components/MovieDetails/MovieDetails'
import SearchBar from './components/SearchBar/SearchBar'

import './App.css'

function App() {
  const [movie, setMovie] = useState({});
  const [searchMovieName, setSearchMovieName] = useState('wedding crashers');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log('USE EFFECT IS RUNNING')
    const endpoint = `http://www.omdbapi.com/?apikey=fb2413ad&t=${searchMovieName}`
    // Make our API call ---> to OMDB
    async function getMovie() {
      // await fetch makes the http request in javascript instead of the browser
      // we have to await because fetch needs to talk to omdbapi
      // travel all the way to the omdb database and back before we have data
      
      try {
        setLoading(true)
        const response = await fetch(endpoint)
        const body = await response.json(); // <- .json() from fetch and changes the json
        // into a javascript object
        // we have to await response.json()
        // because it takes time in computer world to convert a string into an object
        console.log(body)
        setMovie(body)
        setLoading(false)
      } catch(err) {
        console.log(err)
        setLoading(false)
      }
    }

    getMovie();

  }, [searchMovieName]) // < empty array says run this function when this component loads onto the DOM!
    // MEMORIZE THIS!!! - when the component loads, use the useEffect function one time
    // [searchMovieName], run the effect when the component loads and every single time
    // the state variable searchMovieName is updated

  return (
    <>
      <SearchBar setSearchMovieName={setSearchMovieName}/>
      {loading ? <h1>Loading...</h1> : <MovieDetails movie={movie} />}
    
    </>
  )
}

export default App

