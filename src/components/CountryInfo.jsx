import React from "react";
import { useState, useEffect } from "react";


function CountryInfo({list}) {

    if (list.length === 0) {
        return <div>No country information available.</div>;
    }
    const country = list[0]; 
    
    return (
        <div className='countryInfo'>
            <div>Country Name: {country.name.common} <br></br>Capital: {country.capital}</div>
            <div>Continent: {country.region} <br /> Population: {country.population.toLocaleString()}</div>
            <div>Flag: <img src={country.flags.png} alt={`Flag of ${country.name.common}`} /></div>
            <div>Time Zone: {country.timezones.join(', ')}</div>
            <div>
                Currency: {country.currencies 
                    ? Object.entries(country.currencies).map(([key, { name, symbol }]) => (
                        <div key={key}>
                            {name} ({key}) {symbol}
                        </div>
                    ))
                    : 'N/A'}
            </div>
        </div>
    );


}


  
export default CountryInfo;
  