import logo from './logo.svg';
import './App.css';

import react from 'react'
import axios from 'axios'

export default App;

const App = () => {

const [data, setData] = useState([])
const [character, setCharacter] = useState([])

const getData = () => {
  axios.get('https://rickandmortyapi.com/api').then((response) => {
    console.log(response)
    setData(response.data)
  })
}

useEffect(() => {
  getData()
}, [])




}
