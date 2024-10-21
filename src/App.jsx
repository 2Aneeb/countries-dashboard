import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg'
import './App.css'

const API_URL ="https://restcountries.com/v3.1/all"
const API_URL_ASIA = "https://restcountries.com/v3.1/region/asia"

function App() {
  const [list, setList] = useState([])


  useEffect(() => {
    const fetchCountriesData = async () => {
      const response = await fetch(API_URL_ASIA);
      const json = await response.json();
      //console.log(json)
      console.log(json[0])
      setList(json);
    };
    fetchCountriesData().catch(console.error);
  }, []);

  //console.log(list[2].name.common)
  return (
    <div>
      <h1>World Countries</h1>
      <ul>
        {list.map((country) => (
          <li key={country.cca2}>{country.name.common}</li>
        ))}

      </ul>
    </div>
  )
}

export default App
