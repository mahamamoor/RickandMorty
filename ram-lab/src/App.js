import logo from './logo.svg';
import './App.css';

import react from 'react'
import axios from 'axios'

import {useState} from 'react'
import Characters from './components/characters.js'
import Episode from './components/episode.js'

const App = () => {

const [episode, setEpisode] = useState([])
const [data, setData] = useState([])
const [chardisplay, setChardisplay] = useState(false)
const [epidisplay, setEpidisplay] = useState(false)

const getData = () => {
  axios.get('https://rickandmortyapi.com/api/character').then((response) => {
    console.log(response)
    setData(response.data.results)
    setChardisplay(true)
    setEpidisplay(false)
  })
}

const getEpisode = () => {
  axios.get('https://rickandmortyapi.com/api/episode').then((response) => {
    console.log(response)
    setEpisode(response.data.results)
    setEpidisplay(true)
    setChardisplay(false)

  })
}

return (
  <>
  <h1>Rick and Morty</h1>
  <button onClick={getData}>Characters</button>
  <button onClick={getEpisode}>Episodes</button>
  {data.map((info) => {
  return (
    <>
    <Characters characters={info}/>
    </>
  )
  })}

  {episode.map((stuff) => {
  return (
    <>
    <Episode episodes={stuff}/>
    </>
  )
  })}

  </>
)

}

export default App;
