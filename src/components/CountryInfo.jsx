import React, { Component, useEffect, useState } from "react";
import CountriesChart from "./CountriesChart";


function CountryInfo({list}) {

    return (
        <div className='countryInfo'>
            <div>
                <CountriesChart list={list}/>
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
  