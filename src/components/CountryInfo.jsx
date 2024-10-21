import React from "react";
import { useState, useEffect } from "react";


function CountryInfo({list}) {

    if (list.length === 0) {
        return <div>No country information available.</div>;
    }
    const randomIndex = Math.floor(Math.random() * 250); 
    const country = list[randomIndex];

    const totalCountries = list.length;

    const landlocked = list.filter(country => country.landlocked);
    const totalLandlocked = landlocked.length;

    const englishSpeaking = list.filter(country => 
        country.languages && 
        Object.values(country.languages).some(lang => lang.toLowerCase().includes('english'))
    ); 
    const totalEnglishSpeaking = englishSpeaking.length;
    

    const totalPopulation = list.reduce((sum, country) => sum + country.population, 0);
    const averagePopulation = (totalCountries > 0) ? (totalPopulation / totalCountries) : 0;

    const totalLandlockedPopulation = landlocked.reduce((sum, country) => sum + country.population, 0);
    const averageLandlockedPopulation = (totalLandlocked > 0) ? (totalLandlockedPopulation / totalLandlocked) : 0;

    const populations = list.map(country => country.population);
    const highestPopulation = Math.max(...populations);
    const lowestPopulation = Math.min(...populations);
    
    return (
        <div className='countryInfo'>
            <div>
                <h4>Total Countries: {totalCountries}</h4>
                <h4>Total Landlocked Countries: {totalLandlocked}</h4>
                <h4>Total English Speaking Countries: {totalEnglishSpeaking}</h4>
            </div>
            <div>
                <h4>Average Population: {averagePopulation.toLocaleString()}</h4>
                <h4>Average Population of Landlocked Countries: <br></br> {averageLandlockedPopulation.toLocaleString()}</h4>
                <h4>Highest Population: {highestPopulation.toLocaleString()}</h4>
                <h4>Lowest Population: {lowestPopulation}</h4>
            </div>
            <div>
                <h3>Random Flag: {country.name.common}</h3>
                <img src={country.flags.png} alt={`Flag of ${country.name.common}`} />
            </div>
           
         {/*    
            <div><h1>{country.name.common}</h1><br></br><h3>Capital:<br></br>{country.capital}</h3></div>
            <div>
                <u>Continent(s)</u>: {country.continents} <br/><u>Population</u>:{country.population.toLocaleString()}<br></br>
                <u>Currencies</u>: {country.currencies 
                    ? Object.entries(country.currencies).map(([key, { name, symbol }]) => (
                        <p key={key}>
                            {name} ({key}) {symbol}
                        </p>
                    )): 'N/A'}
            </div>
            <div><img src={country.flags.png} alt={`Flag of ${country.name.common}`} /></div>
           <div>Time Zone(s): {country.timezones.length > 0 ? country.timezones.map((timezone, index) => (
                        <div key={index}>{timezone}</div> )) : 'N/A'}
            </div>
        */}
        </div>
    );


}


  
export default CountryInfo;
  