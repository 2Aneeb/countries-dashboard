import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg'
import './App.css'
import CountryTable from './components/CountryTable';
import CountryInfo from './components/CountryInfo';

const API_URL ="https://restcountries.com/v3.1/all"
const API_URL_ASIA = "https://restcountries.com/v3.1/region/asia"

function App() {
  const [list, setList] = useState([])


  useEffect(() => {
    const fetchCountriesData = async () => {
      const response = await fetch(API_URL);
      const json = await response.json();
      const filterI = json.filter(country => country.name.common !== 'Israel');
      setList(filterI);
    };
    fetchCountriesData().catch(console.error);
  }, []);

  if (list.length > 0) {
    console.log(list[0].name.common);
  }
  return (
    <div>
      <h1>World Countries</h1>
       <CountryInfo list={list}/> 
      <ul>
        <CountryTable list={list}/>
      </ul>
    </div>
  )
}

export default App
