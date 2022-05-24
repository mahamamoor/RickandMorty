// needed for styling
import './App.css';

// needed to access APIs. allows us to make get, fetch or request from APIs
import axios from 'axios'

// allows us to use the useState method
import {useState} from 'react'

// importing the js files in the components folder
import Characters from './components/characters.js'
import Episode from './components/episode.js'

// declaring the app function. everything needs to be in a function in the highest up file. you can only send states down to component files. you can get information from the component files to the app.js. the app.js sends information to chrome.
const App = () => {

// states are the initial value which get updated automatically. they are not static and can be changed.
// example: episode is the name of the variable. We have to set the variable because that is a react method. Setting the variable means we can change that variable's value through using state. Episode has the value of an empty array.
const [episode, setEpisode] = useState([])
const [data, setData] = useState([])
const [chardisplay, setChardisplay] = useState(false)
const [epidisplay, setEpidisplay] = useState(false)

// making a get request through axios to get the data from the API. after we access the data, then render it. Dot then is waiting for the data to load. The response is whatever the function calls for.
const getData = () => {
  axios.get('https://rickandmortyapi.com/api/character').then((response) => {
    // this is to view the data we are getting from the API.
    console.log(response)
    // set is adding new value to the variable Data here. Populate the array with the information in the paranthesis.
    {setChardisplay ? setData(response.data.results : null}
    setChardisplay(true)
    setEpidisplay(false)
  })
}


const getEpisode = () => {
  axios.get('https://rickandmortyapi.com/api/episode').then((response) => {
    console.log(response)
    // using state to set the episodes value to the data results array
    setEpisode(response.data.results)
    setEpidisplay(true)
    setChardisplay(false)

  })
}

// In javascript, return displays the output.
return (
  // React allows us to return the output on the page.
  <>
  <h1>Rick and Morty</h1>

<button onClick={setChardisplay ? getData : null}>Characters</button>
<button onClick={setEpidisplay ? getEpisode : null}>Episodes</button>

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
// allows us to export the app function to where you are hosting the app.
export default App;
